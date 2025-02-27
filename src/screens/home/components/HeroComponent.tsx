import React from 'react'

const HeroComponent: React.FC = () => {
  return (
    <div className='w-full h-dvh h-screen min-h-[500px] relative'>
        <video src="/assets/videos/hero_bg.mp4" className='w-full h-full absolute top-0 left-0 object-cover -z-10' autoPlay muted loop></video>
        <h1 className='text-[8vw] leading-[8vw] font-semibold text-white absolute bottom-10 left-[4vw]'>{import.meta.env.VITE_APP_NAME}</h1>
    </div>
  )
}

export default HeroComponent