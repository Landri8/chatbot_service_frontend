import React from 'react'
import Template from './Template'
import HeadingTextComponent from '../screens/home/components/HeadingTextComponent'

const AchievementComponent = () => {
  return (
    <Template classes="text-center py-[100px]">
        <HeadingTextComponent content="We've gained" />
        <div className='mt-12 lg:mt-20 mb-24 flex flex-col md:flex-row items-center justify-center gap-10'>
            <div className='w-[70%] lg:w-[20%]'>
                <h2 className='text-[clamp(1.2rem,2vw,1.8rem)] mb-2 font-bold'>95%</h2>
                <p>Customer satisfaction rate</p>
            </div>
            <div className='w-[70%] lg:w-[20%]'>
                <h2 className='text-[clamp(1.2rem,2vw,1.8rem)] mb-2 font-bold'>10,000+</h2>
                <p>Customer queries are handled monthly</p>
            </div>
        </div>
        <p className='w-full md:w-1/2 md:max-w-[380px] lg:text-[20px] text-start'>
        Our commitment to quality and support has earned us high praise 
        from our clients
        </p>

        <video src="/assets/videos/commit.mp4" className='w-full h-full object-cover rounded-[28px] my-10' autoPlay muted loop></video>

        <p className='w-full md:w-1/2 md:max-w-[380px] lg:text-[20px] text-end ms-auto'>
        Trusted by businesses worldwide, our API chatbots consistently exceed expectations
        </p>
    </Template>
  )
}

export default AchievementComponent