import React, { useRef, useState } from "react";
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
import { sendMessageApi } from "../../../services/clientService";
import { httpResponseHandler } from "../../../utils/responseHandlerUtil";

const ContactFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
    reset
  } = useForm<MessageCreationFormData>({
    resolver: zodResolver(MessageCreationFormSchema),
  });

  const onSubmit = async (data: MessageCreationFormData) => {
    try {
      const {data: responseData} : {data: ResponseModel} = await sendMessageApi(data);
      console.log(responseData);

      const sendMessageResponseData = httpResponseHandler(responseData);
      reset();
      setValue('phone', '+95 ');
      toast.success(responseData.message);
    } catch (error : Error | any) {
      console.log(error)
      toast.error(error.message);
    }
  };

  return (
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
            <input
              {...register("email")}
              type="text"
              className={`w-full py-2 px-4 rounded-[7px] outline-none border bg-white ${
                errors.email ? "border-red-300 bg-red-50" : "border-gray-200"
              }`}
              placeholder="abc@example.com"
            />
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
  );
};

export default ContactFormComponent;
