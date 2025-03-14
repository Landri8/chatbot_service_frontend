import React from 'react'
import Template from '../../../components/Template'
import { formatJoinedDate } from '../../../utils/commonUtil'

type Props = {
    imageUrl: string,
    title: string,
    date: string,
    content: string
}

const BlogDetailsComponent: React.FC<Props> = ({ imageUrl, title, date, content }) => {
  return (
    <Template classes='mt-20 mb-20'>
      <div className='lg:max-w-[1000px] mx-auto'>
        <img className='w-full h-[200px] md:h-[400px] lg:h-[500px] rounded-[18px] md:rounded-[22px] lg:rounded-[28px] object-cover' src={imageUrl} alt="" />

        <h1 className='text-center text-[18px] lg:text-[24px] font-medium mb-2 mt-10'>{title}</h1>
        <p className='text-center text-[12px] lg:text-[16px] mb-6'>{formatJoinedDate(date)}</p>

        <p className='whitespace-pre-line leading-7'>{content}</p>
      </div>
    </Template>
  )
}

export default BlogDetailsComponent