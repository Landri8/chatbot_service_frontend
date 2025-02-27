import React from 'react'
import AdminAppBar from '../../../components/AdminAppBar'
import BreadcrumbModel from '../../../models/breadcrumb.model'
import MessageListComponent from './components/MessageListComponent'

const messageListBreadcrumbs : BreadcrumbModel[] = [
    {
        title: 'Dashboard',
        link: '/admin',
        disabled: false
    },
    {
        title: 'Messages',
        link: '/admin/messages',
        disabled: true
    },
]

const MessageListScreen = () => {
    return (
        <main className='mx-6 mt-4'>
            <AdminAppBar breadcrumbs={messageListBreadcrumbs} />
            <MessageListComponent />
        </main>
    )
}

export default MessageListScreen