import React from 'react'
import BreadcrumbModel from '../../../models/breadcrumb.model'
import AdminAppBar from '../../../components/AdminAppBar'
import BlogListComponent from './components/BlogListComponent'

const blogListBreadcrumbs : BreadcrumbModel[] = [
    {
        title: 'Dashboard',
        link: '/admin',
        disabled: false
    },
    {
        title: 'Blogs',
        link: '/admin/blogs',
        disabled: true
    },
]

const BlogListScreen = () => {
    return (
        <main className='mx-6 mt-4'>
            <AdminAppBar breadcrumbs={blogListBreadcrumbs} action={'blog'} />
            <BlogListComponent />
        </main>
    )
}

export default BlogListScreen