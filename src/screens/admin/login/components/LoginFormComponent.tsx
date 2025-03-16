import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../../store/authStore';
import { LoginFormData, loginFormSchema } from '../schemas/loginFormSchema';
import ResponseModel from '../../../../models/response.model';
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil';
import { loginApi } from '../../../../services/authService';
import { getVerficationCodeApi, verifyEmailApi } from '../../../../services/clientService';
import { Modal } from 'antd';

const LoginFormComponent: React.FC = () => {
  // State for password visibility toggle
  const [showPassword, setShowPassword] = useState(false);
  
  // States for email verification
  const [otpValue, setOtpValue] = useState("");
  const [verified, setVerified] = useState<boolean>(false);
  const [isLoadingOTP, setIsLoadingOTP] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form handling
  const {
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  
  const emailWatcher = watch("email");
  
  const authStore = useAuthStore(state => state);
  const navigator = useNavigate();

  // Reset verification when email changes
  useEffect(() => {
    setVerified(false);
  }, [emailWatcher]);

  // Submit form with verification check
  const onSubmit = async (data: LoginFormData) => {
    if (!verified) {
      toast.error("Please verify your email first!");
      return;
    }
    
    try {
      const {data: responseData}: {data: ResponseModel} = await loginApi(data);
      const loginResponseData = httpResponseHandler(responseData);
      
      // Update auth store with login response
      authStore.updateAuthInfo(loginResponseData);
      
      // Show success message
      toast.success(responseData.message || 'Login successful');
      
      // Navigate to admin dashboard
      navigator('/admin');
    } catch (error: Error | any) {
      // Show error message
      toast.error(error.message || 'Login failed');
    } finally {
      reset();
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Get OTP code for verification
  const handleGetOTPCode = async () => {
    setOtpValue('');
    setIsLoadingOTP(true);
    try {
      const {data: responseData} : {data: ResponseModel} = await getVerficationCodeApi({email: emailWatcher});
      const getVerficationCodeResponseData = httpResponseHandler(responseData);

      showModal();
      toast.success("Verification code sent to your email");
      setIsLoadingOTP(false);
    } catch (e : Error | any) {
      console.log(e);
      setIsLoadingOTP(false);
      toast.error(e.message || "Failed getting verification code");
    }
  };

  // Verify OTP code
  const handleVerifyOTP = async () => {
    try {
      const {data: responseData} : {data: ResponseModel} = await verifyEmailApi({email: emailWatcher, otp: otpValue});
      const verifyEmailResponseData = httpResponseHandler(responseData);

      toast.success("Email verified successfully");
      handleCancel();
      setVerified(true);

    } catch (e : Error | any) {
      console.log(e);
      setOtpValue('');
      toast.error(e.message || "Wrong OTP code");
    }
  };

  // Modal functions
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setOtpValue('');
    setTimeout(() => {
      setIsModalOpen(false);
      setIsLoadingOTP(false);
    }, 100);
  };

  const onChange = (text: string) => {
    setOtpValue(text); 
  };

  return (
    <>
      {/* OTP Verification Modal */}
      <Modal
        title="" 
        maskClosable={false}
        open={isModalOpen} 
        onOk={handleVerifyOTP} 
        okButtonProps={{
          style: {
            backgroundColor: '#f59e0b'
          }
        }}
        onCancel={handleCancel}
      >
        <div className="py-4 flex flex-col items-center">
          <h1 className="w-[70%] text-center font-semibold text-zinc-800 text-[20px]">We've just sent a verification code to your email.</h1>
          <p className="w-[70%] text-center mb-6">Please enter the 6 digit code below</p>
          <input 
            onChange={(e) => onChange(e.target.value)} 
            value={otpValue} 
            type="text" 
            className="w-[70%] text-center py-2 px-4 rounded-[7px] outline-none border bg-white border-gray-300" 
          />
          <div className="mt-4 text-[12px]">
            Don't receive the code? 
            <button 
              className="text-[#f59e0b] cursor-pointer ml-1" 
              onClick={handleGetOTPCode}
            >
              {isLoadingOTP ? 'Resending' : 'Resend'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-2'>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <input 
              id="email"
              type="email"
              {...register('email')} 
              className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none text-zinc-700 border ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
              }`} 
              placeholder="Email" 
            />
            {!verified ? 
              (emailWatcher !== '' && emailWatcher != null && !errors.email) ?
                <button 
                  disabled={isLoadingOTP} 
                  type="button" 
                  onClick={handleGetOTPCode} 
                  className="text-[11px] disabled:cursor-not-allowed disabled:opacity-50 py-1 px-3 rounded-[5px] cursor-pointer bg-red-100 absolute top-1/2 right-4 -translate-y-1/2"
                >
                  {isLoadingOTP ? 'Verifying' : 'Verify'}
                </button>
              : null
            : 
              <div className="text-[11px] py-1 px-3 rounded-[5px] bg-green-400 text-white absolute top-1/2 right-4 -translate-y-1/2">
                Verified
              </div>
            }
          </div>
          {errors.email && (
            <p className="px-1 text-xs text-red-400 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className='mb-2'>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input 
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')} 
              className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none text-zinc-700 border ${
                errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200'
              }`} 
              placeholder="Password" 
            />
            <button 
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="px-1 text-xs text-red-400 mt-1">{errors.password.message}</p>
          )}
        </div>

        <button 
          type="submit"
          disabled={isSubmitting || !verified}
          className="w-full py-2 border px-4 text-[14px] rounded-[7px] bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? <span className="loader2"></span> : 'Login'}
        </button>
        
        {!verified && (
          <p className="text-xs text-amber-600 mt-2 text-center">
            Please verify your email before logging in.
          </p>
        )}
      </form>
    </>
  );
};

export default LoginFormComponent;