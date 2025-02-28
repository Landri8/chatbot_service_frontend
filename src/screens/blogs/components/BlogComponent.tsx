import React from 'react'
import Template from '../../../components/Template'
import BlogThumbnailComponent from './BlogThumbnailComponent'
import { BlogModel } from '../../../models/bloginfo.model'

const BlogComponent : React.FC<{blogList: BlogModel[]}> = ({blogList}) => {
  return (
    <Template classes='py-[80px]'>
        <h2 className='text-[18px] lg:text-[24px] mb-4 mx-auto font-medium'>Trending</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              blogList.map(blog => <BlogThumbnailComponent key={blog.id} id={blog.id} imgUrl={blog.coverImage} title={blog.title} date={blog.date} />)
            }
        </div>
    </Template>
  )
}

export default BlogComponent