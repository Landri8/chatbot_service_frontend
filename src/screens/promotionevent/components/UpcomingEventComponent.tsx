import React from 'react'
import Template from '../../../components/Template'

const UpcomingEventComponent = () => {
  return (
    <div className='w-full h-[560px] relative'>
        <img className='w-full h-full object-cover' src="/assets/images/upcoming_event.png" alt="" />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50'></div>

        <Template classes='absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center'>
            <div className='text-center lg:w-[50%]'>
                <h1 className='text-[clamp(1.5rem,3.3vw,3.8rem)] font-extrabold text-white uppercase'>
                    Tech fair expo 2025
                    Explore the Future of AI
                    on 17th March 2025
                </h1>
                <button className='px-6 py-2 md:px-12 md:py-3 border border-white bg-white text-black rounded-full text-[12px] md:text-[16px] mt-8'>Sign up for free</button>
            </div>
            <div className='absolute bottom-10 left-0 right-0 flex items-end justify-between'>
                <p className='text-[13px] md:text-[15px] lg:text-[20px] text-white'>[UPCOMING EVENT]</p>

                <div className='text-end text-white text-[12px] md:text-[15px] lg:text-[20px]'>
                    <p>11:30 AM - 3:30 PM</p>
                    <p>Novotel Hotel Myanmar, Yangon</p>
                </div>
            </div>

        </Template>
    </div>
  )
}

export default UpcomingEventComponent