import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    isSpecial: boolean,
    title: string,
    planDetailsList: string[],
    planPrice: string,
    planDesc: string
}

const ServicePlan: React.FC<Props> = ({isSpecial, title, planDetailsList, planPrice, planDesc}) => {

    const navigator = useNavigate();

    const handleGoToPayment = () => {
        navigator('/payment')
    }

    return (
        <div className={`w-full min-h-[560px] lg:min-h-[680px] rounded-[20px] lg:rounded-[32px] flex flex-col align-center py-10 lg:py-12 xl:py-16 px-4 ${isSpecial ? 'bg-sky-50 border-2 min-h-[600px] lg:min-h-[780px] border-sky-400' : 'border-none bg-zinc-100'}`}>
            <h1 className='font-semibold text-xl lg:text-2xl'>{title}</h1>
            {isSpecial && <h2 className='text-[11px] text-sky-400'>Customers' choice</h2>}
            <p className='text-[14px] lg:text-[16px] w-2/3 mx-auto mb-4 mt-4'>{planDesc}</p>
            <p className='text-[28px] xl:text-[38px] font-bold'>${planPrice}<span className='text-[16px]'>/m</span></p>
            <hr className='my-4 w-5/6 mx-auto' />
            <ul className='w-2/3 mx-auto text-start flex-1'>
            {
                planDetailsList.map((item, index) => {
                    return (
                        <li key={index} className='text-[14px] xl:text-[16px] mb-1 list-image-[url(/assets/images/done_mark.svg)]'>{item}</li>
                    )
                })
            }
            </ul>
            <button className='w-4/6 lg:w-5/6 mx-auto mt-4 py-2 md:py-3 border border-zinc-900 rounded-full text-[12px] lg:text-[14px] xl:text-[16px]' onClick={handleGoToPayment}>Try it now</button>
        </div>
    )
}

export default ServicePlan