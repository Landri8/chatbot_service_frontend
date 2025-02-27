import React, { useEffect } from 'react'
import { useMessageStore } from '../../../../store/messageStore';
import { MessageModel } from '../../../../models/messageInfo.model';
import { getMessageListApi } from '../../../../services/messageService';
import ResponseModel from '../../../../models/response.model';
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil';
import toast from 'react-hot-toast';
import MessageTableComponent from './MessageTableComponent';
import { CiSearch } from 'react-icons/ci';
import { BiExport } from "react-icons/bi";
import { formatJoinedDate, formatTimestamp } from '../../../../utils/commonUtil';
import * as XLSX from 'xlsx';

const EXTENSION = '.xlsx';

const MessageListComponent = () => {

    const messageStore = useMessageStore(state => state);
    const [filteredMessageList, setFilteredMessageList] = React.useState<MessageModel[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = (value: string) => {
        console.log(messageStore.messageList)
        setFilteredMessageList(messageStore.messageList.filter((user: MessageModel) => {
            return user.firstName.toLowerCase().includes(value.toLowerCase()) || 
            user.lastName.toLowerCase().includes(value.toLowerCase()) || 
            user.email.toLowerCase().includes(value.toLowerCase()) || 
            user.companyName.toLowerCase().includes(value.toLowerCase()) || 
            user.country.toLowerCase().includes(value.toLowerCase()) || 
            user.phone.toLowerCase().includes(value.toLowerCase());
        }));
    }

    const handleExport = () => {
        const formattedDataForExcel = messageStore.messageList.map((message: MessageModel, index) => ({
            "#": index + 1,
            "Name": message.firstName + " " + message.lastName,
            "Email": message.email,
            "Company Name": message.companyName,
            "Country": message.country,
            "Phone": message.phone,
            "Sent At": formatJoinedDate(message.createdAt)
        }))

        const worksheet = XLSX.utils.json_to_sheet([]);


        const reportTitle = `Customer Inquiries Report (${formatJoinedDate(formatTimestamp())})`;
        XLSX.utils.sheet_add_aoa(worksheet, [[reportTitle]], { origin: "A1" });

        XLSX.utils.sheet_add_json(worksheet, formattedDataForExcel, { origin: "A2", skipHeader: false });

        const colCount = Object.keys(formattedDataForExcel[0]).length;
        worksheet["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: colCount - 1 } }];


        const columnWidths = [
            { wch: 5 },   // "#"
            { wch: 20 },  // "Full Name"
            { wch: 35 },  // "Email"
            { wch: 30 },  // "Company Name"
            { wch: 20 },  // "Country"
            { wch: 20 },  // "Phone"
            { wch: 20 }   // "Sent At"
        ];

        worksheet["!cols"] = columnWidths;

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Messages");

        // Generate file
        XLSX.writeFile(workbook, `${formatTimestamp()}_customer_inquiries${EXTENSION}`);
    }

    useEffect(() => {
        setIsLoading(true);
        getMessageListApi().then(
          ({data}: {data: ResponseModel}) => {
    
            const getMessageListResponse = httpResponseHandler(data);
            messageStore.updateMessageList(getMessageListResponse);
            setFilteredMessageList(getMessageListResponse);
    
          }
        ).catch((error) => toast.error("Fetching message list failed"))
        .finally(() => setIsLoading(false));
    }, [])

    return (
        <>
            <div className='my-4 flex gap-2 justify-between'>
                <div className='relative w-1/3'>
                    <input onChange={(e) => handleChange(e.target.value)} type="text" className='w-full py-2 px-4 text-[14px] rounded-[7px] outline-none text-zinc-700 border border-gray-200 bg-white' placeholder={"Search inquires"} />
                    <CiSearch className='text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-xl' />
                </div>
                <button
                type='button' 
                onClick={handleExport} 
                title='Export' 
                className='bg-zinc-200 outline-none hover:bg-zinc-300 cursor-pointer px-3 text-black rounded-[7px] disabled:opacity-30 disabled:pointer-events-none'
                disabled={isLoading || messageStore.messageList.length === 0}
                >
                    <BiExport className='text-[18px]' />
                </button>
            </div>
            <MessageTableComponent messageList={filteredMessageList} setMessageList={setFilteredMessageList} isLoading={isLoading} />
        </>
    )
}

export default MessageListComponent