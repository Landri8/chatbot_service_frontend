import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import FAQInfoModel from '../../../models/faqInfo.model';
import { deleteFAQApi, getFAQDetailsApi, updateFAQApi } from '../../../services/faqService';
import ResponseModel from '../../../models/response.model';
import { httpResponseHandler } from '../../../utils/responseHandlerUtil';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdOutlineDelete } from 'react-icons/md';
import { Modal } from 'antd';
import { TbCopy } from 'react-icons/tb';
import { FAQUpdateFormData, FAQUpdateFormSchema } from '../schemas/FAQUpdateFormSchema';

const FAQDetailsFormComponent = ({id}: {id: string}) => {

  const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
      setValue
    } = useForm<FAQUpdateFormData>({
      resolver: zodResolver(FAQUpdateFormSchema),
  });

  const [question, setQuestion] = useState<FAQInfoModel | null>(null);
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
    navigator.clipboard.writeText(question?.id ?? '');
    toast.success("Copied to clipboard");
  }

  const onSubmit = async (data: FAQUpdateFormData) => {
      try {
        const {data: responseData} : {data: ResponseModel} = await updateFAQApi(data);
        console.log(responseData)
        const updateResponseData = httpResponseHandler(responseData);
        toast.success(responseData.message);
        reset();
        navigate('/admin/faqs');
      } catch (error : Error | any) {
        toast.error(error.message);
      } finally {
      }
  };

  const handleDeleteQuestion = async () => {
    try {
      const {data: responseData} : {data: ResponseModel} = await deleteFAQApi({
        id
      });

      const deleteResponseData = httpResponseHandler(responseData);
      toast.success(responseData.message);
      navigate('/admin/faqs');
    } catch(error) {
      toast.error("Error deleting question");
      setIsModalOpen(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getFAQDetailsApi(id).then(
      ({data}: {data: ResponseModel}) => {

        const getFAQDetailsResponseData = httpResponseHandler(data);
        setQuestion(getFAQDetailsResponseData);

        setValue('id', getFAQDetailsResponseData.id);
        setValue('question', getFAQDetailsResponseData.question);
        setValue('answer', getFAQDetailsResponseData.answer);

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
      onOk={handleDeleteQuestion} 
      okButtonProps={{
        style: {
          backgroundColor: '#f59e0b'
        }
      }}
      onCancel={handleCancel}>
        <p>Are you sure you want to delete this question?</p>
      </Modal>
      {isLoading 
      ?
      <p className='text-center my-10'>Loading question details...</p>
      :
      (question != null && question != undefined) 
      ? 
      <div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <p className='text-zinc-400 text-[14px]'>{question?.id}</p>
            <button onClick={copyToClipboard} title='Copy' className='cursor-pointer'><TbCopy className='text-zinc-400 text-[14px]' /></button>
          </div>
          <button title='Delete' onClick={showModal} className='h-[40px] w-[40px] rounded-full hover:bg-zinc-100 cursor-pointer'><MdOutlineDelete className='text-red-400 text-[18px] mx-auto' /></button>
        </div>
        <form className="w-full max-w-[800px] mt-4" onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-6">
                <label className="text-[13px] font-semibold mb-2 block">Question</label>
                <input
                disabled={!editMode}
                {...register("question")}
                className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border disabled:cursor-not-allowed disabled:bg-zinc-100 ${
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
                <textarea disabled={!editMode} {...register('answer')} rows={4} className={`w-full py-4 px-4 text-[13px] rounded-[7px] outline-none border disabled:cursor-not-allowed disabled:bg-zinc-100 ${errors.answer ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} placeholder='Write answer...'></textarea>
                {errors.answer && <p className="text-xs text-red-400 mt-1">{errors.answer.message}</p>}
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
      <p className='text-center my-10'>Question not found</p>
    }
    </>
  )
}

export default FAQDetailsFormComponent