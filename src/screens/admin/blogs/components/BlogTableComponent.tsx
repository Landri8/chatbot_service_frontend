import React from 'react'
import { BlogModel } from '../../../../models/bloginfo.model'
import { useNavigate } from 'react-router-dom'

type Props = {
    blogList: BlogModel[],
    isLoading: boolean
}

const BlogTableComponent: React.FC<Props> = ({blogList, isLoading}) => {

    const navigator = useNavigate();

    const handleClickDetails = (id: string) => {
        if (id == null || id == "") return;

        navigator(`/admin/blogs/${id}`);
    }

    return (
        <div className=''>
            {
                isLoading
                ?
                <div className='flex items-center justify-center'><span className='loader'></span></div>
                :
                blogList.length
                ?
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        blogList.map(blog => (
                            <div onClick={() => handleClickDetails(blog.id)} className='rounded-[13px] overflow-hidden bg-white shadow-sm cursor-pointer'>
                                <img className='h-[60px] w-full object-cover' src={blog.coverImage} alt="" />
                                <div className='p-4'>
                                    <p className='text-[12px] text-zinc-400'>{blog.id}</p>

                                    <h4 className='text-[18px] text-zinc-900 font-medium'>{blog.title}</h4>
                                    <p className='text-[10px] text-zinc-400'>{blog.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                :
                <p className='text-center text-[14px] text-zinc-400'>No blog found</p>
            }
        </div>
    )
}

export default BlogTableComponent