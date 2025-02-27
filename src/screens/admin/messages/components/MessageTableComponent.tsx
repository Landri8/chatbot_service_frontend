import React from 'react'
import { MessageModel } from '../../../../models/messageInfo.model';
import { useNavigate } from 'react-router-dom';
import { formatJoinedDate, formatTimestamp } from '../../../../utils/commonUtil';
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa6";
import toast from 'react-hot-toast';
import ResponseModel from '../../../../models/response.model';
import { getMessageDetailsApi, updateMessageToMarkReadApi } from '../../../../services/messageService';
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil';
import { useMessageStore } from '../../../../store/messageStore';
import { exportPDF } from '../../../../utils/pdfPrinterUtil';

type Props = {
    messageList: MessageModel[],
    setMessageList: React.Dispatch<React.SetStateAction<MessageModel[]>>,
    isLoading: boolean
}

const MessageTableComponent: React.FC<Props> = ({messageList, setMessageList, isLoading}) => {

    const messageStore = useMessageStore(state => state)
    const navigator = useNavigate();

    const [isPrinting, setIsPrinting] = React.useState(false);

    const handleClickDetails = (id: string) => {
        if (id == null || id == "") return;

        navigator(`/admin/messages/${id}`);
    }

    const handleMarkAsRead = async(id: string) => {
        try {
            const {data: responseData} : {data: ResponseModel} = await updateMessageToMarkReadApi({id});
            const markedMessageResponseData = httpResponseHandler(responseData);

            toast.success("Marked as read successfully");

            const updatedMessageList = messageStore.messageList.map((m: MessageModel) => m.id === id ? markedMessageResponseData : m);
            messageStore.updateMessageList(updatedMessageList);

            setMessageList(messageList.map((m: MessageModel) => m.id === id ? markedMessageResponseData : m));
        } catch (e) {
            toast.error("Failed updating message")
            console.log(e);
        }
    }

    const handlePrintPdf = async (id: string) => {
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

    return (
        <div className='bg-white rounded-[14px] px-8 py-6'>
            {isPrinting && <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center'><span className='loader2'></span></div>}
            <table className='w-full'>
                <thead>
                    <tr className='border-b border-b-zinc-300'>
                        <th className='py-3 px-2 text-[14px] font-medium text-end w-1/12'>No.</th>
                        <th className='py-3 px-2 text-[14px] font-medium text-end w-2/12'>ID</th>
                        <th className='py-3 px-2 text-[14px] font-medium w-2/12 text-start'>Company</th>
                        <th className='py-3 px-2 text-[14px] font-medium w-2/12 text-start'>Email</th>
                        <th className='py-3 px-2 text-[14px] font-medium w-2/12 text-start'>Name</th>
                        <th className='py-3 px-2 text-[14px] font-medium text-end w-1/12'>Date</th>
                        <th className='py-3 px-2 w-2/12'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (isLoading) ?
                        <tr>
                            <td colSpan={7} className='py-3 text-center'><span className='loader'></span></td>
                        </tr>
                        :
                        (messageList.length > 0)
                        ?
                        messageList.map((message, index) => (
                            <tr className={`${index != messageList.length - 1 && 'border-b'} border-b-zinc-300`} key={index}>
                                <td className={`py-3 px-2 text-[14px] ${!message.read ? 'font-bold' : 'font-normal'} text-zinc-600 text-end w-1/12`}>{index + 1}</td>
                                <td onClick={() => handleClickDetails(message.id)} className={`py-3 px-2 text-[14px] ${!message.read ? 'font-bold' : 'font-normal'} cursor-pointer text-zinc-600 text-end w-2/12 hover:underline`}>{message.id}</td>
                                <td className={`py-3 px-2 text-[14px] ${!message.read ? 'font-bold' : 'font-normal'} text-zinc-600 w-2/12`}>{message.companyName}</td>
                                <td className={`py-3 px-2 text-[14px] ${!message.read ? 'font-bold' : 'font-normal'} text-zinc-600 w-2/12`}>{message.firstName + " " + message.lastName}</td>
                                <td className={`py-3 px-2 text-[14px] ${!message.read ? 'font-bold' : 'font-normal'} text-zinc-600 w-2/12`}>{message.email}</td>
                                <td className={`py-3 px-2 text-[14px] ${!message.read ? 'font-bold' : 'font-normal'} text-zinc-600 text-end w-1/12`}>{formatJoinedDate(message.createdAt)}</td>
                                <td className={`py-3 px-2 w-2/12`}>
                                    <div className='flex items-center justify-end gap-2'>
                                        <button disabled={message.read} onClick={() => handleMarkAsRead(message.id)} title='Mark as read' className='w-8 h-8 hover:text-zinc-900 text-zinc-600 rounded-full hover:bg-zinc-100 cursor-pointer flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none'><BiEnvelopeOpen className='w-5 h-5' /></button>
                                        <button onClick={() => handlePrintPdf(message.id)} title='Download pdf' className='w-8 h-8 hover:text-zinc-900 text-zinc-600 rounded-full hover:bg-zinc-100 cursor-pointer flex items-center justify-center'><FaFilePdf className='w-4 h-4' /></button>
                                    </div>
                                </td>
                            </tr>
                        ))
                        :
                        <tr className=''>
                            <td className='py-3 text-[14px] text-zinc-600 text-center' colSpan={6}>No message data.</td>
                        </tr>
                    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MessageTableComponent