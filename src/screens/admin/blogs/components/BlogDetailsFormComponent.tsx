import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import BlogInfoModel from '../../../../models/bloginfo.model';
import ResponseModel from '../../../../models/response.model';
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil';
import { deleteBlogApi, getBlogDetailsApi, updateBlogApi } from '../../../../services/blogService';
import { useForm } from 'react-hook-form';
import { BlogUpdateFormData, BlogUpdateFormSchema } from '../schemas/BlogUpdateFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TbCloudUpload, TbCopy } from 'react-icons/tb';
import { Modal } from 'antd';
import { MdOutlineDelete } from 'react-icons/md';

const BlogDetailsFormComponent = ({id}: {id: string}) => {

  const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
      setValue,
      getValues
    } = useForm<BlogUpdateFormData>({
      resolver: zodResolver(BlogUpdateFormSchema),
  });

  const [blog, setBlog] = useState<BlogInfoModel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(blog?.id ?? '');
    toast.success("Copied to clipboard");
  }

  const handleDeleteBlog = async () => {
    try {
      const {data: responseData} : {data: ResponseModel} = await deleteBlogApi({
        id
      });

      const deleteResponseData = httpResponseHandler(responseData);
      toast.success(responseData.message);
      navigate('/admin/blogs');
    } catch(error) {
      toast.error("Error deleting blog");
      setIsModalOpen(false);
    }
  }

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

  const onSubmit = async (data: BlogUpdateFormData) => {
      try {
        const {data: responseData} : {data: ResponseModel} = await updateBlogApi(data);
        console.log(responseData)
        const updateResponseData = httpResponseHandler(responseData);
        toast.success(responseData.message);
        reset();
        navigate('/admin/blogs');
      } catch (error : Error | any) {
        toast.error(error.message);
      } finally {
      }
  };

  useEffect(() => {
    setIsLoading(true);
    getBlogDetailsApi(id).then(
      ({data}: {data: ResponseModel}) => {

        const getBlogDetailsResponseData = httpResponseHandler(data);
        setBlog(getBlogDetailsResponseData);

        setValue('id', getBlogDetailsResponseData.id);
        setValue('title', getBlogDetailsResponseData.title);
        setValue('content', getBlogDetailsResponseData.content);
        setValue('coverImage', getBlogDetailsResponseData.coverImage);

      }
    ).catch((error: any) => {
      console.log(error);
      toast.error("Fetching question details failed")
    })
    .finally(() => setIsLoading(false));
  }, [])

  return (
    <>
      <Modal 
      title="Confirmation" 
      open={isModalOpen} 
      onOk={handleDeleteBlog} 
      okButtonProps={{
        style: {
          backgroundColor: '#f59e0b'
        }
      }}
      onCancel={handleCancel}>
        <p>Are you sure you want to delete this blog?</p>
      </Modal>
      {isLoading 
      ?
      <p className='text-center my-10'>Loading blog details...</p>
      :
      (blog != null && blog != undefined) 
      ? 
      <div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <p className='text-zinc-400 text-[14px]'>{blog?.id}</p>
            <button onClick={copyToClipboard} title='Copy' className='cursor-pointer'><TbCopy className='text-zinc-400 text-[14px]' /></button>
          </div>
          <button title='Delete' onClick={showModal} className='h-[40px] w-[40px] rounded-full hover:bg-zinc-100 cursor-pointer'><MdOutlineDelete className='text-red-400 text-[18px] mx-auto' /></button>
        </div>
        <form className='w-full max-w-[800px] mt-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-6'>
              <p className='text-[13px] font-semibold mb-2 block'>Cover Image</p>
              <div className='flex gap-4'>
              <label htmlFor='image' className={`flex-1 h-[240px] ${editMode ? 'cursor-pointer bg-sky-50' : 'cursor-not-allowed bg-zinc-50'} flex flex-col items-center justify-center rounded-[14px]`}>
                  <TbCloudUpload className={`text-3xl ${editMode ? 'text-sky-400 animate-bounce' : 'text-zinc-400'}`} />
                  <p className={`text-sm ${editMode ? 'text-sky-400' : 'text-zinc-400'}`}>Click to Upload</p>
                  <input 
                    disabled={!editMode}
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
                  <input disabled={!editMode} {...register('title')} className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border disabled:cursor-not-allowed disabled:bg-zinc-100 ${errors.title ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} placeholder='Title' />
                  {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title.message}</p>}
          </div>

          <div className='mb-6'>
              <label className='text-[13px] font-semibold mb-2 block'>Content</label>
              <textarea disabled={!editMode} {...register('content')} rows={4} className={`w-full py-4 px-4 text-[13px] rounded-[7px] outline-none border disabled:cursor-not-allowed disabled:bg-zinc-100 ${errors.content ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} placeholder='Write content...'></textarea>
              {errors.content && <p className="text-xs text-red-400 mt-1">{errors.content.message}</p>}
          </div>

          {
            !editMode && <button type='button' onClick={() => setEditMode(true)} className='h-[36px] px-4 text-[13px] rounded-[7px] bg-amber-200 text-black cursor-pointer'>Edit Question Info</button>
          }
          {
            editMode && (
              <button className="h-[36px] border px-4 text-[13px] rounded-[7px] bg-black text-white">
                {isSubmitting ? <span className="loader2"></span> : "Confirm"}
              </button>
            )
          }
        </form>
      </div> 
      : 
      <p className='text-center my-10'>Blog not found</p>
    }
    </>
  )
}

export default BlogDetailsFormComponent