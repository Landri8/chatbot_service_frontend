import React, { useEffect } from 'react'
import AdminAppBar from '../../components/AdminAppBar'
import BreadcrumbModel from '../../models/breadcrumb.model'
import FAQListComponent from './components/FAQListComponent'

const faqListBreadcrumbs : BreadcrumbModel[] = [
    {
        title: 'Dashboard',
        link: '/admin',
        disabled: false
    },
    {
        title: 'FAQs',
        link: '/admin/faqs',
        disabled: true
    },
]

const FAQListScreen = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    return (
        <main className='mx-6 mt-4'>
            <AdminAppBar breadcrumbs={faqListBreadcrumbs} action={'faq'} />
            <FAQListComponent />
        </main>
    )
}

export default FAQListScreen