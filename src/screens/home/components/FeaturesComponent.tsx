import React from 'react'
import HeadingTextComponent from './HeadingTextComponent'
import Template from '../../../components/Template'

const FeaturesComponent: React.FC = () => {
  return (
    <Template classes='text-center py-[90px] lg:py-[160px]'>
        <HeadingTextComponent content='Introducing our newest model' />
        <div className='mt-20'>
          <h2 className='text-[clamp(1.5rem,3.3vw,3.2rem)] font-bold'>BlownMind vR6</h2>
          <p className='text-[12px] lg:text-[18px] w-full md:w-2/3 mx-auto mt-8 mb-5'>
            Deliver human-like responses and advanced conversational intelligence
            with low latency, exclusively available with the Business Plan
          </p>
          <div className='flex items-center justify-center gap-4'>
            <button className='px-6 py-2 md:px-12 md:py-3 border border-zinc-900 rounded-full text-[12px] md:text-[16px]'>Learn More</button>
            <button className='px-6 py-2 md:px-12 md:py-3 border border-zinc-900 rounded-full text-[12px] md:text-[16px] bg-zinc-900 text-white'>Buy Bussiness Plan</button>
          </div>
        </div>
    </Template>
  )
}

export default FeaturesComponent