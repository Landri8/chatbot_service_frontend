import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    link: string
    title: string
    description: string
}

const ProductModel: React.FC<Props> = ({link, title, description}) => {
  return (
    <div className='w-full rounded-[16px] lg:rounded-[24px] bg-zinc-100 p-8 text-center'>
        <img src="/assets/images/ai.svg" alt="" className='w-8 h-8 mx-auto' />
        <h2 className='text-[18px] lg:text-[24px] font-semibold mt-4 mb-4'>{title}</h2>
        <p className='text-[13px] lg:text-[16px] text-zinc-600 mb-6'>{description}</p>
        <Link to={link} className='text-sky-500'>Learn More</Link>
    </div>
  )
}

export default ProductModel