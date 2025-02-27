import React from 'react'
import BreadcrumbModel from '../models/breadcrumb.model'
import { Link } from 'react-router-dom'
import { FiUserPlus } from "react-icons/fi";
import { IoBookOutline } from 'react-icons/io5';
import { FaPlus } from "react-icons/fa6";

type AdminAppBarProps = {
    breadcrumbs: BreadcrumbModel[],
    action?: string
}

const AdminAppBar : React.FC<AdminAppBarProps> = ({breadcrumbs, action}) => {
    const appBarAction = () => {
        switch (action) {
            case 'user':
                return (
                    <Link to={'/admin/users/new'} className='flex items-center text-zinc-800 text-[14px]'>
                        <FiUserPlus className='mr-2 w-5 h-5' />
                        New User
                    </Link>
                )
            case 'blog':
                return (
                    <Link to={'/admin/blogs/new'} className='flex items-center text-zinc-800 text-[14px]'>
                        <IoBookOutline className="mr-2 w-5 h-5" />
                        New Blog
                    </Link>
                )
            case 'faq':
                return (
                    <Link to={'/admin/faqs/new'} className='flex items-center text-zinc-800 text-[14px]'>
                        <FaPlus  className="w-5 h-5 mr-2" />
                        New Question
                    </Link>
                )
            default:
                return (
                    <Link to={'/admin/products/new'} className='flex items-center text-zinc-800 text-[14px]'>
                        <FaPlus  className="w-5 h-5 mr-2" />
                        New
                    </Link>
                )
        }
    }

    return (
        <div className='flex items-center justify-between'>
            <div>
                {breadcrumbs.map((breadcrumb, index) => (
                    (breadcrumb.disabled)
                    ?
                    <span key={index} className='text-zinc-400 text-[14px] font-semibold'>{breadcrumb.title}</span>
                    :
                    <span key={index}>
                        <Link to={breadcrumb.link} className='text-zinc-800 text-[14px] hover:underline'>{breadcrumb.title}</Link>
                        <span className='text-zinc-400 ms-2 mr-1 text-[14px]'>/</span>
                    </span>
                ))}

            </div>
            {action && appBarAction()}
        </div>
    )
}

export default AdminAppBar