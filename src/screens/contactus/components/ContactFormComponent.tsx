import React, { useEffect, useRef, useState } from "react";
import Template from "../../../components/Template";
import ContactTypesComponent from "./ContactTypesComponent";
import ContactAddressComponent from "./ContactAddressComponent";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useForm } from "react-hook-form";
import {
  MessageCreationFormData,
  MessageCreationFormSchema,
} from "../schemas/MessageCreationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import ResponseModel from "../../../models/response.model";
import { getVerficationCodeApi, sendMessageApi, verifyEmailApi } from "../../../services/clientService";
import { httpResponseHandler } from "../../../utils/responseHandlerUtil";
import { Modal } from "antd";

const ContactFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
    watch,
    reset
  } = useForm<MessageCreationFormData>({
    resolver: zodResolver(MessageCreationFormSchema),
  });

  const [otpValue, setOtpValue] = useState("");
  const [verified, setVerified] = useState<boolean>(false);
  const [isLoadingOTP, setIsLoadingOTP] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const emailWatcher = watch("email");

  const onSubmit = async (data: MessageCreationFormData) => {
    if (verified) {
      try {
        const {data: responseData} : {data: ResponseModel} = await sendMessageApi(data);
        console.log(responseData);
  
        const sendMessageResponseData = httpResponseHandler(responseData);
        reset();
        setVerified(false);
        handleCancel();
        setValue('phone', '+95 ');
        toast.success(responseData.message);
      } catch (error : Error | any) {
        console.log(error)
        toast.error(error.message);
      }
    } else {
      toast.error("Please verify your email first!");
    }
  };

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
  }

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

  useEffect(() => {
    setVerified(false);
  }, [emailWatcher]);

  return (
    <>
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
      onCancel={handleCancel}>
        <div className="py-4 flex flex-col items-center">
          <h1 className="w-[70%] text-center font-semibold text-zinc-800 text-[20px]">We've just sent a verification code to your email.</h1>
          <p className="w-[70%] text-center mb-6">Please enter the 6 digit code below</p>
          <input onChange={(e) => onChange(e.target.value)} value={otpValue} type="text" className="w-[70%] text-center py-2 px-4 rounded-[7px] outline-none border bg-white border-gray-300" />
          <div className="mt-4 text-[12px]">Don't receive the code? <button className="text-[#f59e0b] cursor-pointer" onClick={handleGetOTPCode}>{isLoadingOTP ? 'Resending' : 'Resend'}</button></div>
        </div>
    </Modal>
    <Template classes="py-[100px]">
      <div className="flex flex-col md:flex-row items-start gap-16 lg:w-[80%] xl:w-[70%] mx-auto">
        <form className="flex-1 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-start gap-4 my-3">
            <div className="w-[50%]">
              <h4 className="text-[14px] mb-2 font-semibold">First name</h4>
              <input
                {...register("firstName")}
                type="text"
                className={`w-full py-2 px-4 rounded-[7px] outline-none border bg-white ${
                  errors.firstName ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="text-xs text-red-400 mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div className="w-[50%]">
              <h4 className="text-[14px] mb-2 font-semibold">Last name</h4>
              <input
                {...register("lastName")}
                type="text"
                className={`w-full py-2 px-4 rounded-[7px] outline-none border bg-white ${
                  errors.lastName ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="text-xs text-red-400 mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="w-[100%] my-3">
            <h4 className="text-[14px] mb-2 font-semibold">Email</h4>
            <div className="relative">
              <input
                {...register("email")}
                type="text"
                className={`w-full py-2 px-4 rounded-[7px] outline-none border bg-white ${
                  errors.email ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
                placeholder="abc@example.com"
              />
              {
                !verified 
                ?
                (emailWatcher !== '' && emailWatcher != null) ?
                <button disabled={isLoadingOTP} type="button" onClick={handleGetOTPCode} className="text-[11px] disabled:cursor-not-allowed disabled:opacity-50 py-1 px-3 rounded-[5px] cursor-pointer bg-red-100 absolute top-1/2 right-4 -translate-y-1/2">{isLoadingOTP ? 'Verifying' : 'Verify'}</button>
                :
                null
                :
                <div className="text-[11px] py-1 px-3 rounded-[5px] bg-green-400 text-white absolute top-1/2 right-4 -translate-y-1/2">Verified</div>
              }
            </div>
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="w-[100%] my-3">
            <h4 className="text-[14px] mb-2 font-semibold">Phone (Whatsapp)</h4>
            <PhoneInput
              {...register("phone")}
              className={`w-full px-4 py-[2px] bg-white rounded-[7px] border outline-none ${
                errors.phone ? "border-red-300 bg-red-50" : "border-gray-200"
              }`}
              defaultCountry="mm"
              value={""}
              onChange={() => {}}
            />
            {errors.phone && (
              <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex items-start gap-4 my-3">
            <div className="w-[50%]">
              <h4 className="text-[14px] mb-2 font-semibold">Company Name</h4>
              <input
                {...register("companyName")}
                type="text"
                className={`w-full py-2 px-4 rounded-[7px] outline-none border bg-white ${
                  errors.companyName ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
              />
              {errors.companyName && (
                <p className="text-xs text-red-400 mt-1">{errors.companyName.message}</p>
              )}
            </div>

            <div className="w-[50%]">
              <h4 className="text-[14px] mb-2 font-semibold">Country</h4>
              <input
                {...register("country")}
                type="text"
                className={`w-full py-2 px-4 rounded-[7px] outline-none border bg-white ${
                  errors.country ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
              />
              {errors.country && (
                <p className="text-xs text-red-400 mt-1">{errors.country.message}</p>
              )}
            </div>
          </div>

          <div className="w-[100%] my-3">
            <h4 className="text-[14px] mb-2 font-semibold">Job Title</h4>
            <input
              {...register("jobTitle")}
              type="text"
              className={`w-full py-2 px-4 rounded-[7px] outline-none border bg-white ${
                errors.jobTitle ? "border-red-300 bg-red-50" : "border-gray-200"
              }`}
              placeholder="Enter job title"
            />
            {errors.jobTitle && (
              <p className="text-xs text-red-400 mt-1">{errors.jobTitle.message}</p>
            )}
          </div>

          <div className="w-[100%] my-3">
            <h4 className="text-[14px] mb-2 font-semibold">Job Details</h4>
            <textarea
              {...register("jobDetails")}
              rows={4}
              className={`w-full py-2 px-4 rounded-[7px] outline-none border bg-white ${
                errors.jobDetails ? "border-red-300 bg-red-50" : "border-gray-200"
              }`}
            ></textarea>
            {errors.jobDetails && (
              <p className="text-xs text-red-400 mt-1">{errors.jobDetails.message}</p>
            )}
          </div>

          <button className="py-2 border px-4 rounded-[7px] bg-black text-white">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="w-full md:w-[32%] lg:w-[30%]">
          <ContactTypesComponent />
          <ContactAddressComponent />
        </div>
      </div>
    </Template> 
    </>
  );
};

export default ContactFormComponent;
