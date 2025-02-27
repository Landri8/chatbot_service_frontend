import React from 'react'

type HowitWorksStepProps = {
    step: number
    stepTitle: string
    stepContent: string
}

const HowitWorksStep: React.FC<HowitWorksStepProps> = ({step, stepTitle, stepContent}) => {
  return (
    <div className='flex flex-col lg:flex-row lg:w-[70%] lg:mx-auto items-center lg:items-start justify-center gap-4 lg:gap-10 text-center lg:text-left'>
        <p className='w-[60px] aspect-square bg-zinc-100 rounded-full flex items-center justify-center text-[18px]'>{step}</p>
        <div className='flex-1'>
            <h2 className='font-semibold text-[18px] lg:text-[20px] mb-2'>{stepTitle}</h2>
            <p className='text-[12px] md:text-[14px] lg:text-[16px]'>{stepContent}</p>
        </div>
    </div>
  )
}

export default HowitWorksStep