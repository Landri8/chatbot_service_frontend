import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
    name: string,
    description: string
}

const ModelOverviewComponent: React.FC<Props> = ({name, description}) => {

  const navigator = useNavigate();
  const handleGoToPayment = () => {
    navigator('/payment')
  }

  return (
    <div className='pt-[140px] pb-[60px] md:py-[140px]'>
        <h1 className='text-[clamp(1.5rem,3.3vw,3.6rem)] font-bold'>{name}</h1>
        <p className='text-[12px] md:text-[14px] lg:text-[16px] w-full md:w-2/3 lg:w-1/3 mx-auto mt-2 mb-8'>{description}</p>
        <button type='button' className='px-6 py-2 md:px-12 md:py-3 border border-zinc-900 rounded-full text-[12px] md:text-[16px]' onClick={handleGoToPayment}>Try it now</button>
    </div>
  )
}

export default ModelOverviewComponent