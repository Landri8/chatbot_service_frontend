import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../../store/authStore';
import { LoginFormData, loginFormSchema } from '../schemas/loginFormSchema';
import ResponseModel from '../../../../models/response.model';
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil';
import { loginApi } from '../../../../services/authService';


const LoginFormComponent : React.FC = () => {
  const {register, handleSubmit, formState: { errors, isSubmitting },reset} = useForm<LoginFormData>({resolver: zodResolver(loginFormSchema),});
  const authStore = useAuthStore(state => state );
  const navigator = useNavigate();


  const onSubmit = async (data: LoginFormData) => {
    try {
      const {data: responseData} : {data: ResponseModel} = await loginApi(data);

      const loginResponseData = httpResponseHandler(responseData);
      authStore.updateAuthInfo(loginResponseData);
      toast.success(responseData.message);
    
      navigator('/admin');
    } catch (error : Error | any) {
      toast.error(error.message);
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-2'>
          <input {...register('email')} className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none text-zinc-700 border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} placeholder={'Email'} />
          {
              errors.email && (
                  <p className="px-1 text-xs text-red-400 mt-1">{errors.email.message}</p>
              )
          }
        </div>

        <div className='mb-2'>
          <input {...register('password')} className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none text-zinc-700 border ${errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} placeholder={'Password'} />
          {
              errors.password && (
                  <p className="px-1 text-xs text-red-400 mt-1">{errors.password.message}</p>
              )
          }
        </div>

        <button className='w-full py-2 border px-4 text-[14px] rounded-[7px] bg-black text-white'>{isSubmitting ? <span className="loader2"></span> : 'Login'}</button>
    </form>
  )
}

export default LoginFormComponent