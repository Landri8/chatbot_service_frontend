import React, { useState, useEffect } from "react";
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
import { getVerficationCodeApi, verifyEmailApi } from "../../../../services/clientService";
import { Modal } from "antd";

const UserCreationFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm<UserCreationFormData>({
    resolver: zodResolver(UserCreationFormSchema),
  });

  const navigator = useNavigate();
  
  // Email verification states
  const [otpValue, setOtpValue] = useState("");
  const [verified, setVerified] = useState<boolean>(false);
  const [isLoadingOTP, setIsLoadingOTP] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Watch email for changes
  const emailWatcher = watch("email");

  // Reset verification when email changes
  useEffect(() => {
    setVerified(false);
  }, [emailWatcher]);

  const onSubmit = async (data: UserCreationFormData) => {
    if (verified) {
      try {
        const {data: responseData} : {data: ResponseModel} = await createUserApi(data);
        console.log(responseData);
        const createResponseData = httpResponseHandler(responseData);
        toast.success(responseData.message);
        reset();
        navigator('/admin/users');
      } catch (error : Error | any) {
        toast.error(error.message);
      }
    } else {
      toast.error("Please verify the email first!");
    }
  };

  // Get OTP code
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

  // Modal handlers
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

    {/* User Creation Form */}
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
          <select 
            {...register('role')} 
            className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border ${
              errors.role ? 'border-red-300 bg-red-50' : 'border-gray-200'
            }`}
          >
            <option value='' disabled>Select role</option>
            <option value='1'>Admin</option>
            <option value='2'>Staff</option>
          </select>
          {errors.role && 
            <p className="text-xs text-red-400 mt-1">{errors.role.message}</p>
          }
        </div>
      </div>

      <div className="mb-6">
        <label className="text-[13px] font-semibold mb-2 block">Email</label>
        <div className="relative">
          <input
            {...register("email")}
            className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border ${
              errors.email ? "border-red-300 bg-red-50" : "border-gray-200"
            }`}
            placeholder="abcd@gmail.com"
          />
          {!verified ? 
            (emailWatcher !== '' && emailWatcher != null) ?
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
          <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="text-[13px] font-semibold mb-2 block">Password</label>
        <input
          type="password"
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

      <button 
        className="h-[36px] border px-4 text-[13px] rounded-[7px] bg-black text-white"
        disabled={isSubmitting || !verified}
      >
        {isSubmitting ? <span className="loader"></span> : "Create"}
      </button>
      {!verified && (
        <p className="text-xs text-amber-600 mt-2">
          Please verify the email address before creating the user.
        </p>
      )}
    </form>
    </>
  );
};

export default UserCreationFormComponent;