import React from 'react'

type Props = {
    title: string;
    content: string;
}

const Aim: React.FC<Props> = ({title, content}) => {
  return (
    <div className='w-full py-16 bg-zinc-100 text-center px-[10%] rounded-[20px]'>
        <h1 className='text-[18px] lg:text-[24px] font-medium'>{title}</h1>
        <p className='text-[13px] lg:text-[16px]'>{content}</p>
    </div>
  )
}

export default Aim