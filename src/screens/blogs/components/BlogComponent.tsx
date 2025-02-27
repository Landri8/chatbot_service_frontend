import React from 'react'
import Template from '../../../components/Template'
import BlogThumbnailComponent from './BlogThumbnailComponent'

const BlogComponent : React.FC = () => {
  return (
    <Template classes='py-[80px]'>
        <h2 className='text-[18px] lg:text-[24px] mb-4 mx-auto font-medium'>Trending</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <BlogThumbnailComponent imgUrl="/assets/images/blogimg.png" title="ChatGPT creator denies sister's childhood rape claim" date="16 January 2025" content="ChatGPT creator Sam Altman's sister, Ann Altman, has filed a lawsuit alleging that he regularly sexually abused her between 1997 and 2006." />
            <BlogThumbnailComponent imgUrl="/assets/images/blogimg.png" title="ChatGPT creator denies sister's childhood rape claim" date="16 January 2025" content="ChatGPT creator Sam Altman's sister, Ann Altman, has filed a lawsuit alleging that he regularly sexually abused her between 1997 and 2006." />
            <BlogThumbnailComponent imgUrl="/assets/images/blogimg.png" title="ChatGPT creator denies sister's childhood rape claim" date="16 January 2025" content="ChatGPT creator Sam Altman's sister, Ann Altman, has filed a lawsuit alleging that he regularly sexually abused her between 1997 and 2006." />
            <BlogThumbnailComponent imgUrl="/assets/images/blogimg.png" title="ChatGPT creator denies sister's childhood rape claim" date="16 January 2025" content="ChatGPT creator Sam Altman's sister, Ann Altman, has filed a lawsuit alleging that he regularly sexually abused her between 1997 and 2006." />
            <BlogThumbnailComponent imgUrl="/assets/images/blogimg.png" title="ChatGPT creator denies sister's childhood rape claim" date="16 January 2025" content="ChatGPT creator Sam Altman's sister, Ann Altman, has filed a lawsuit alleging that he regularly sexually abused her between 1997 and 2006." />
            <BlogThumbnailComponent imgUrl="/assets/images/blogimg.png" title="ChatGPT creator denies sister's childhood rape claim" date="16 January 2025" content="ChatGPT creator Sam Altman's sister, Ann Altman, has filed a lawsuit alleging that he regularly sexually abused her between 1997 and 2006." />
        </div>
    </Template>
  )
}

export default BlogComponent