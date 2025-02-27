import React from 'react'
import { IoChatboxOutline } from 'react-icons/io5'
import Template from '../../../components/Template'

const AboutHeroComponent = () => {
  return (
    <div className='w-full h-dvh h-screen min-h-[500px] relative'>
        <video src="/assets/videos/aboutus.mp4" className='w-full h-full absolute top-0 left-0 object-cover -z-10' autoPlay muted loop></video>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75'></div>
        

        <Template classes='text-white absolute bottom-10 left-1/2 -translate-x-1/2'>
            <h1 className='text-[clamp(1.2rem,5vw,3rem)] md:mb-16 leading-[clamp(2rem,5.2vw,4rem)]'>We are Helping Businesses <br /> Grow with Smart AI Chatbot <br />Technology</h1>
            <div className='hidden md:flex items-center gap-10 text-white text-[13px] md:text-[14px] lg:text-[16px] font-normal'>
                <div>
                    <h4>LOCATION</h4>
                    <p>YANGON, MYANMAR</p>
                </div>
                <div>
                    <h4>EMAIL</h4>
                    <p>INFO@BM.COM.MM</p>
                </div>
                <div>
                    <h4>PHONE</h4>
                    <p>+95 9123 4123 12</p>
                </div>
            </div>
        </Template>

        <button type='button' title='Chat' className='w-[60px] aspect-square bg-white rounded-full flex items-center justify-center absolute bottom-10 right-5 text-xl'><IoChatboxOutline /></button>
    </div>
  )
}

export default AboutHeroComponent