import React from 'react'
import Template from '../../../components/Template'
import { useNavigate } from 'react-router-dom';

const AdvertisementComponent: React.FC = () => {
  
  const navigator = useNavigate();
  const handleGoToPayment = () => {
    navigator('/payment')
  }

  return (
    <Template classes='text-center py-[50px] lg:py-[100px]'>
        <h1 className='lg:w-[80%] mx-auto text-[clamp(1.5rem,3.5vw,3.8rem)] font-bold leading-[clamp(1.7rem,3.6vw,4rem)]'>
        Revolutionize Your Customer Engagement with Our API-Driven AI Chatbots
        </h1>
        <p className='text-[12px] lg:text-[18px] w-2/3 md:w-1/2 mx-auto mt-8 mb-5'>
        Seamless AI-powered chatbots that help businesses
        connect with customers 24/7
        </p>
        <button className='px-6 py-2 md:px-12 md:py-3 border border-zinc-900 rounded-full text-[12px] md:text-[16px]' onClick={handleGoToPayment}>Try it now</button>
    </Template>
  )
}

export default AdvertisementComponent