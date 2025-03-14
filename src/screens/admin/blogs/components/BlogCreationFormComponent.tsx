import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { BlogCreationFormData, BlogCreationFormSchema } from '../schemas/BlogCreationFormSchema';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import ResponseModel from '../../../../models/response.model';
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil';
import { createBlogApi } from '../../../../services/blogService';
import { TbCloudUpload } from 'react-icons/tb';

const BlogCreationFormComponent = () => {

    const navigator = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
        getValues
      } = useForm<BlogCreationFormData>({
        resolver: zodResolver(BlogCreationFormSchema),
    });

    const onSubmit = async (data: BlogCreationFormData) => {
        try {
          const {data: responseData} : {data: ResponseModel} = await createBlogApi(data);
          console.log(responseData)
          const createResponseData = httpResponseHandler(responseData);
          toast.success(responseData.message);
          reset();
          navigator('/admin/blogs');
        } catch (error : Error | any) {
          toast.error(error.message);
        } finally {
        }
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.result) {
                    setValue("coverImage", reader.result.toString(), { shouldValidate: true });
                }
            };
        }
    };

    return (
        <form className='w-full max-w-[800px]' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-6'>
                <p className='text-[13px] font-semibold mb-2 block'>Cover Image</p>
                <div className='flex gap-4'>
                <label htmlFor='image' className='flex-1 h-[240px] bg-sky-50 flex flex-col items-center justify-center rounded-[14px]'>
                    <TbCloudUpload className='text-3xl text-sky-400' />
                    <p className='text-sm text-sky-400'>Click to Upload</p>
                    <input 
                        id='image' 
                        type="file" 
                        className='hidden' 
                        accept="image/*" 
                        onChange={handleImageUpload}
                    />
                </label>
                {
                getValues('coverImage') != null
                ?
                <div className='h-[240px] flex items-center justify-center rounded-[14px] overflow-hidden'>
                    <img alt='' src={getValues('coverImage') as string} className='w-full h-full object-cover' />
                </div>
                :
                null
                }
            </div>
                {errors.coverImage && <p className="text-xs text-red-400 mt-1">{errors.coverImage.message}</p>}
            </div>

            <div className='mb-6'>
                <label className='text-[13px] font-semibold mb-2 block'>Title</label>
                <input {...register('title')} className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border ${errors.title ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} placeholder='Title' />
                {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title.message}</p>}
            </div>

            <div className='mb-6'>
                <label className='text-[13px] font-semibold mb-2 block'>Content</label>
                <textarea {...register('content')} rows={4} className={`w-full py-4 px-4 text-[13px] rounded-[7px] outline-none border ${errors.content ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} placeholder='Write content...'></textarea>
                {errors.content && <p className="text-xs text-red-400 mt-1">{errors.content.message}</p>}
            </div>

            <button className='h-[36px] border px-4 text-[13px] rounded-[7px] bg-black text-white'>{isSubmitting ? <span className="loader2"></span> : 'Create'}</button>
        </form>
    )
}

export default BlogCreationFormComponent