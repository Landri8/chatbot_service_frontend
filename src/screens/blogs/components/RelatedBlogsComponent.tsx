import React from 'react'
import Template from '../../../components/Template'
import BlogThumbnailComponent from './BlogThumbnailComponent'

const RelatedBlogsComponent: React.FC = () => {
  return (
    <Template classes='mt-12 mb-20'>
        <div className='w-full h-[0.5px] mb-10 bg-zinc-600'></div>
        <h2 className='text-[18px] lg:text-[24px] mb-4 mx-auto font-medium'>Related articles</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <BlogThumbnailComponent
                imgUrl="/assets/images/blogimg.png"
                title="Plans for £2bn AI centre and 750 jobs."
                date="16 January 2025"
                content="Plans for £2bn AI centre and 750 jobs." 
            />

            <BlogThumbnailComponent imgUrl="/assets/images/blogimg.png" title="ChatGPT creator denies sister's childhood rape claim" date="16 January 2025" content="ChatGPT creator Sam Altman's sister, Ann Altman, has filed a lawsuit alleging that he regularly sexually abused her between 1997 and 2006." />
            
        </div>
    </Template>
  )
}

export default RelatedBlogsComponent