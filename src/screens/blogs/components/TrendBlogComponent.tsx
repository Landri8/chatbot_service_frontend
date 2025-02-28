import React from 'react'
import Template from '../../../components/Template'
import { BlogModel } from '../../../models/bloginfo.model'
import { formatJoinedDate } from '../../../utils/commonUtil'
import { Link } from 'react-router-dom'

const TrendBlogComponent : React.FC<{blog: BlogModel}> = ({blog}: {blog: BlogModel}) => {
  return (
    <Template classes='mt-8 mb-4'>
        <div className='overflow-hidden rounded-[16px] h-[320px] md:h-[490px] lg:rounded-[32px] relative'>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75'></div>
            <img className='w-full h-full object-cover' src={blog.coverImage} alt={blog.title} />
            <div className='absolute bottom-4 lg:bottom-10 left-0 px-4 lg:px-10 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between'>
                <div className='flex-1'>
                    <p className='text-zinc-400 text-[11px] lg:text-[13px]'>{formatJoinedDate(blog.date)}</p>
                    <p className='text-white text-[clamp(1rem,2vw,1.8rem)] font-medium overflow-ellipsis line-clamp-2'>{blog.title}</p>
                </div>

                <Link to={`/blogs/${blog.id}`} className='px-6 py-2 md:px-12 md:py-3 border bg-white rounded-full text-[12px] md:text-[16px]'>Read</Link>
            </div>
        </div>
    </Template>
  )
}

export default TrendBlogComponent