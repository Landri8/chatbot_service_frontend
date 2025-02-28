import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  id: string,
  imgUrl: string,
  title: string,
  date: string,
}

const BlogThumbnailComponent: React.FC<Props> = ({id, imgUrl, title, date}) => {
  return (
    <Link to={`/blogs/${id}`} className='w-full rounded-[12px] lg:rounded-[20px] overflow-hidden bg-zinc-200'>
        <img className='h-[200px] w-full object-cover rounded-[4px]' src={imgUrl} alt="" />
        <div className='p-5'>
            <small className='text-[12px] text-zinc-600'>{date}</small>
            <h3 className='font-semibold mb-2 overflow-ellipsis line-clamp-2'>{title}</h3>
        </div>
    </Link>
  )
}

export default BlogThumbnailComponent