import React from 'react'
import { useForm } from 'react-hook-form';
import { FAQCreationFormData, FAQCreationFormSchema } from '../schemas/FAQCreationFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import ResponseModel from '../../../models/response.model';
import { httpResponseHandler } from '../../../utils/responseHandlerUtil';
import toast from 'react-hot-toast';
import { createFAQApi } from '../../../services/faqService';

const FAQCreationFormComponent = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
      } = useForm<FAQCreationFormData>({
        resolver: zodResolver(FAQCreationFormSchema),
    });

    const navigator = useNavigate();

    const onSubmit = async (data: FAQCreationFormData) => {
        try {
          const {data: responseData} : {data: ResponseModel} = await createFAQApi(data);
          console.log(responseData)
          const createResponseData = httpResponseHandler(responseData);
          toast.success(responseData.message);
          reset();
          navigator('/admin/faqs');
        } catch (error : Error | any) {
          toast.error(error.message);
        } finally {
        }
    };
    

    return (
        <form className="w-full max-w-[800px]" onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-6">
                <label className="text-[13px] font-semibold mb-2 block">Question</label>
                <input
                {...register("question")}
                className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border ${
                    errors.question ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
                placeholder="Enter question"
                />
                {errors.question && (
                <p className="text-xs text-red-400 mt-1">{errors.question.message}</p>
                )}
            </div>

            <div className='mb-6'>
                <label className='text-[13px] font-semibold mb-2 block'>Content</label>
                <textarea {...register('answer')} rows={4} className={`w-full py-4 px-4 text-[13px] rounded-[7px] outline-none border ${errors.answer ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} placeholder='Write answer...'></textarea>
                {errors.answer && <p className="text-xs text-red-400 mt-1">{errors.answer.message}</p>}
            </div>

            <button type="submit" className="h-[36px] border px-4 text-[13px] rounded-[7px] bg-black text-white">
                {isSubmitting ? <span className="loader2"></span> : "Create"}
            </button>
        </form>
    )
}

export default FAQCreationFormComponent