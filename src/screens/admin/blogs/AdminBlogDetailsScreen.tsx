import React from 'react'
import { useParams } from 'react-router-dom'
import AdminAppBar from '../../../components/AdminAppBar';
import BlogCreationFormComponent from './components/BlogCreationFormComponent';
import BlogDetailsFormComponent from './components/BlogDetailsFormComponent';
import BreadcrumbModel from '../../../models/breadcrumb.model';

const AdminBlogDetailsScreen = () => {
  
  const uri = useParams();
  const isCreate = uri.id == "new"; 

  const adminBlogDetailsBreadcrumbs : BreadcrumbModel[] = [
    {
        title: 'Dashboard',
        link: '/admin',
        disabled: false
    },
    {
        title: 'Blogs',
        link: '/admin/blogs',
        disabled: false
    },
    {
        title: `${uri?.id}`,
        link: `/admin/blogs/${uri?.id}`,
        disabled: true
    },
  ]
    
  return (
    <main className='mx-6 mt-4'>
        <AdminAppBar breadcrumbs={adminBlogDetailsBreadcrumbs} />
        <div className='p-8 bg-white rounded-[14px] mt-4'>
        {
            isCreate ? <BlogCreationFormComponent /> : <BlogDetailsFormComponent id={uri.id ? uri.id : ""} />
        }
        </div>
    </main>
  )
}

export default AdminBlogDetailsScreen