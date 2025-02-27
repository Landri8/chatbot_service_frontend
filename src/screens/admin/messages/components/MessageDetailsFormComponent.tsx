import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import MessageInfoModel from '../../../../models/messageInfo.model';
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil';
import ResponseModel from '../../../../models/response.model';
import { deleteMessageApi, getMessageDetailsApi, updateMessageToMarkReadApi } from '../../../../services/messageService';
import { Modal } from 'antd';
import { useAuthStore } from '../../../../store/authStore';
import { TbCopy } from 'react-icons/tb';
import { MdOutlineDelete } from 'react-icons/md';
import { formatJoinedDate } from '../../../../utils/commonUtil';
import { LuReply } from "react-icons/lu";
import { BiEnvelopeOpen } from 'react-icons/bi';
import { FaFilePdf } from 'react-icons/fa6';
import { exportPDF } from '../../../../utils/pdfPrinterUtil';

const MessageDetailsFormComponent = ({id}: {id: string}) => {

    const authInfo = useAuthStore(state => state.authInfo);

    const [message, setMessage] = useState<MessageInfoModel | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [isLoading, setIsLoading] = useState(true);
    const [isPrinting, setIsPrinting] = React.useState(false);

    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(message?.id ?? '');
        toast.success("Copied to clipboard");
    }

    const handleDeleteMessage = async () => {
        try {
          const {data: responseData} : {data: ResponseModel} = await deleteMessageApi({
            id
          });
    
          const deleteResponseData = httpResponseHandler(responseData);
          toast.success(responseData.message);
          navigate('/admin/faqs');
        } catch(error) {
          toast.error("Error deleting message");
          setIsModalOpen(false);
        }
    }

    const handleMarkAsRead = async() => {
        try {
            const {data: responseData} : {data: ResponseModel} = await updateMessageToMarkReadApi({id});
            const markedMessageResponseData = httpResponseHandler(responseData);

            toast.success("Marked as read successfully");
            setMessage(markedMessageResponseData);

        } catch (e) {
            toast.error("Failed updating message")
            console.log(e);
        }
    }

    const handlePrintPdf = async () => {
        setIsPrinting(true);
        try {
            const {data: responseData}: {data: ResponseModel} = await getMessageDetailsApi(id);
            const messageDetailsResponseData = httpResponseHandler(responseData);

            await exportPDF(id, messageDetailsResponseData);
        } catch (e) {
            toast.error("Failed exporting PDF");
        } finally {
            setIsPrinting(false);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getMessageDetailsApi(id).then(
          ({data}: {data: ResponseModel}) => {
    
            const getMessageInfoResponseData = httpResponseHandler(data);
            setMessage(getMessageInfoResponseData);
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
        onOk={handleDeleteMessage} 
        okButtonProps={{
            style: {
            backgroundColor: '#f59e0b'
            }
        }}
        onCancel={handleCancel}>
            <p>Are you sure you want to delete this message?</p>
        </Modal>
        {isPrinting && <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center'><span className='loader2'></span></div>}
        {isLoading 
        ?
        <p className='text-center my-10'>Loading message details...</p>
        :
        (message != null && message != undefined) 
        ? 
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <p className='text-zinc-400 text-[14px]'>{message.id}</p>
                    <button onClick={copyToClipboard} title='Copy' className='cursor-pointer'><TbCopy className='text-zinc-400 text-[14px]' /></button>
                </div>
                <div className='flex items-center gap-2'>
                    <button disabled={message.read} onClick={handleMarkAsRead} title='Mark as read' className='w-8 h-8 hover:text-zinc-900 text-zinc-600 rounded-full hover:bg-zinc-100 cursor-pointer flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none'><BiEnvelopeOpen className='w-5 h-5' /></button>
                    <button onClick={handlePrintPdf} title='Download pdf' className='w-8 h-8 hover:text-zinc-900 text-zinc-600 rounded-full hover:bg-zinc-100 cursor-pointer flex items-center justify-center'><FaFilePdf className='w-4 h-4' /></button>
                    {authInfo?.user.role == "1" && <button title='Delete' onClick={showModal} className='h-8 w-8 rounded-full hover:bg-zinc-100 cursor-pointer'><MdOutlineDelete className='text-red-400 w-[22px] h-[22px] mx-auto' /></button>}
                </div>
            </div>
            
            <div className='w-full mt-4 max-w-[900px] flex items-start gap-4 py-6'>
                <div className='w-1/3 bg-zinc-100 p-8 rounded-[14px] sticky top-6'>
                    <div className='mb-4'>
                        <label className='text-[13px] text-zinc-400 font-semibold mb-1 block'>Full Name</label>
                        <p className='text-zinc-800 font-medium text-[14px]'>{message.firstName + " " + message.lastName}</p>
                    </div>

                    <div className='mb-4'>
                        <label className='text-[13px] text-zinc-400 font-semibold mb-1 block'>Email</label>
                        <p className='text-zinc-800 font-medium text-[14px]'>{message.email}</p>
                    </div>

                    <div className='mb-4'>
                        <label className='text-[13px] text-zinc-400 font-semibold mb-1 block'>Contact Number</label>
                        <p className='text-zinc-800 font-medium text-[14px]'>{message.phone}</p>
                    </div>

                    <div className='mb-4'>
                        <label className='text-[13px] text-zinc-400 font-semibold mb-1 block'>Company Name</label>
                        <p className='text-zinc-800 font-medium text-[14px]'>{message.companyName}</p>
                    </div>

                    <div className='mb-4'>
                        <label className='text-[13px] text-zinc-400 font-semibold mb-1 block'>Country</label>
                        <p className='text-zinc-800 font-medium text-[14px]'>{message.country}</p>
                    </div>

                    <div className=''>
                        <label className='text-[13px] text-zinc-400 font-semibold mb-1 block'>Send At</label>
                        <p className='text-zinc-800 font-medium text-[14px]'>{formatJoinedDate(message.createdAt)}</p>
                    </div>
                </div>

                <div className='grow-1 p-4'>
                    <div className='mb-6'>
                        <h1 className='text-zinc-800 font-semibold text-[24px]'>{message.jobTitle}</h1>
                    </div>

                    <div className=''>
                        <p className='text-zinc-800 font-medium text-[14px] whitespace-pre-line'>{message.jobDetails}</p>
                    </div>

                    <div className='my-6 w-full h-[0.6px] bg-zinc-200'></div>

                    <div className='flex items-center gap-2'>
                        <a href={`mailto:${message.email}`} className="h-[36px] border px-4 text-[13px] rounded-[7px] bg-black text-white flex items-center">
                            <LuReply className='w-4 h-4 mr-2' />
                            Reply
                        </a>
                    </div>
                </div>
            </div>
        </div> 
        : 
        <p className='text-center my-10'>Message not found</p>
        }
        </>
    )
}

export default MessageDetailsFormComponent