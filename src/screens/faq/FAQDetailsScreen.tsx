import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BreadcrumbModel from '../../models/breadcrumb.model';
import AdminAppBar from '../../components/AdminAppBar';
import FAQCreationFormComponent from './components/FAQCreationFormComponent';
import FAQDetailsFormComponent from './components/FAQDetailsFormComponent';

const FAQDetailsScreen = () => {
    
    const uri = useParams();
    const isCreate = uri.id == "new";

    const faqDetailsBreadcrumbs : BreadcrumbModel[] = [
        {
            title: 'Dashboard',
            link: '/admin',
            disabled: false
        },
        {
            title: 'FAQs',
            link: '/admin/faqs',
            disabled: false
        },
        {
            title: `${uri?.id}`,
            link: `/admin/faqs/${uri?.id}`,
            disabled: true
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className='mx-6 mt-4'>
            <AdminAppBar breadcrumbs={faqDetailsBreadcrumbs} />
            <div className='p-8 bg-white rounded-[14px] mt-4'>
            {
                isCreate ? <FAQCreationFormComponent /> : <FAQDetailsFormComponent id={uri.id ? uri.id : ""} />
            }
            </div>
        </main>
    )
}

export default FAQDetailsScreen