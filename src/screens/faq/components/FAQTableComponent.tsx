import React from 'react'
import { FAQModel } from '../../../models/faqInfo.model'
import { useNavigate } from 'react-router-dom'
import { formatJoinedDate } from '../../../utils/commonUtil'

type Props = {
    faqList: FAQModel[],
    isLoading: boolean
}

const FAQTableComponent: React.FC<Props> = ({faqList, isLoading}) => {
    const navigator = useNavigate();

    const handleClickDetails = (id: string) => {
        if (id == null || id == "") return;

        navigator(`/admin/faqs/${id}`);
    }
    
    return (
        <div className='bg-white rounded-[14px] px-8 py-6'>
            <table className='w-full'>
                <thead>
                    <tr className='border-b border-b-zinc-300'>
                        <th className='py-3 px-2 text-[14px] font-medium text-end w-1/12'>No.</th>
                        <th className='py-3 px-2 text-[14px] font-medium text-end w-3/12'>FAQ ID</th>
                        <th className='py-3 px-2 text-[14px] font-medium w-6/12 text-start'>Question</th>
                        <th className='py-3 px-2 text-[14px] font-medium text-end w-2/12'>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (isLoading) ?
                        <tr>
                            <td colSpan={6} className='py-3 text-center'><span className='loader'></span></td>
                        </tr>
                        :
                        (faqList.length > 0)
                        ?
                        faqList.map((faq, index) => (
                            <tr onClick={() => handleClickDetails(faq.id)} className={`${index != faqList.length - 1 && 'border-b'} border-b-zinc-300 cursor-pointer hover:bg-amber-50 hover:underline`} key={index}>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 text-end w-1/12'>{index + 1}</td>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 text-end w-2/12'>{faq.id}</td>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 w-1/12 truncate'>{faq.question}</td>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 w-3/12 text-end'>{formatJoinedDate(faq.createdAt)}</td>
                            </tr>
                        ))
                        :
                        <tr className=''>
                            <td className='py-3 text-[14px] text-zinc-600 text-center' colSpan={6}>No question data.</td>
                        </tr>
                    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FAQTableComponent