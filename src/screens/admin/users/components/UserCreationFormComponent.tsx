import React from "react";
import { useForm } from "react-hook-form";
import {
  UserCreationFormSchema,
  UserCreationFormData,
} from "../schemas/UserCreationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ResponseModel from "../../../../models/response.model";
import { httpResponseHandler } from "../../../../utils/responseHandlerUtil";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createUserApi } from "../../../../services/userService";

const UserCreationFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<UserCreationFormData>({
    resolver: zodResolver(UserCreationFormSchema),
  });

  const navigator = useNavigate();

  const onSubmit = async (data: UserCreationFormData) => {
    try {
      const {data: responseData} : {data: ResponseModel} = await createUserApi(data);
      console.log(responseData)
      const createResponseData = httpResponseHandler(responseData);
      toast.success(responseData.message);
      reset();
      navigator('/admin/users');
    } catch (error : Error | any) {
      toast.error(error.message);
    } finally {
    }
  };

  return (
    <form className="w-full max-w-[800px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 flex gap-4">
        <div className="w-1/2">
          <label className="text-[13px] font-semibold mb-2 block">
            Full name
          </label>
          <input
            {...register("name")}
            className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border ${
              errors.name ? "border-red-300 bg-red-50" : "border-gray-200"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="w-1/2">
            <label className='text-[13px] font-semibold mb-2 block'>Role</label>
            <select {...register('role')} className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border ${errors.role ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
                <option value='' disabled selected>Select role</option>
                <option value='1'>Admin</option>
                <option value='2'>Staff</option>
            </select>
            {errors.role && <p className="text-xs text-red-400 mt-1">{errors.role.message}</p>}
        </div>
      </div>

      <div className="mb-6">
        <label className="text-[13px] font-semibold mb-2 block">Email</label>
        <input
          {...register("email")}
          className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border ${
            errors.email ? "border-red-300 bg-red-50" : "border-gray-200"
          }`}
          placeholder="abcd@gmail.com"
        />
        {errors.email && (
          <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="text-[13px] font-semibold mb-2 block">Password</label>
        <input
          {...register("password")}
          className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border ${
            errors.password ? "border-red-300 bg-red-50" : "border-gray-200"
          }`}
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>
        )}
      </div>

      <button className="h-[36px] border px-4 text-[13px] rounded-[7px] bg-black text-white">
        {isSubmitting ? <span className="loader"></span> : "Create"}
      </button>
    </form>
  );
};

export default UserCreationFormComponent;
