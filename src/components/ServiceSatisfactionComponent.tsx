import React from 'react'
import Template from './Template'
import HeadingTextComponent from '../screens/home/components/HeadingTextComponent'

const ServiceSatisfactionComponent: React.FC = () => {
    const serviceList: string[] = [
        'Respond to customers 24/7 without delay',
        "Personalize responses to match your brand’s tone",
        'Engage customers in their preferred language',
        'Easily connect with your website, app, or CRM'
    ]

  return (
    <Template classes='flex flex-col justify-center items-center text-center py-[50px] lg:py-[100px]'>
        <HeadingTextComponent content='We satisfied our customers with' />
        <div className="text-start mt-12 lg:mt-20">
            {
                serviceList.map((item, index) => {
                    return (
                        <div key={index} className='w-full text-[14px] lg:text-[20px] mb-1 flex gap-2 items-start my-2'><img className='mt-1 w-[20px]' src="/assets/images/check_mark.svg" alt="" /> <span className=''>{item} and some longer text</span></div>
                    )
                })
            }
        </div>
    </Template>
  )
}

export default ServiceSatisfactionComponent