import React from 'react'

type Props = {
    imgUrl: string,
    title: string,
    date: string,
    content: string
}

const BlogThumbnailComponent: React.FC<Props> = ({imgUrl, title, date, content}) => {
  return (
    <div className='w-full rounded-[12px] lg:rounded-[20px] overflow-hidden bg-zinc-200'>
        <img className='h-[200px] w-full object-cover rounded-[4px]' src={imgUrl} alt="" />
        <div className='p-5'>
            <small className='text-[12px] text-zinc-600'>{date}</small>
            <h3 className='font-semibold mb-2 overflow-ellipsis line-clamp-2'>{title}</h3>
            <p className='text-[13px] text-zinc-800 overflow-ellipsis line-clamp-2'>{content}</p>
        </div>
    </div>
  )
}

export default BlogThumbnailComponent