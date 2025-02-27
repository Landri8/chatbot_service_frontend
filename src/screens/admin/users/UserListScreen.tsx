import React from 'react'
import AdminAppBar from '../../../components/AdminAppBar'
import UserListComponent from './components/UserListComponent'
import BreadcrumbModel from '../../../models/breadcrumb.model'

const userListBreadcrumbs : BreadcrumbModel[] = [
    {
        title: 'Dashboard',
        link: '/admin',
        disabled: false
    },
    {
        title: 'Users',
        link: '/admin/users',
        disabled: true
    },
]

const UserListScreen = () => {
    return (
        <main className='mx-6 mt-4'>
            <AdminAppBar breadcrumbs={userListBreadcrumbs} action={'user'} />
            <UserListComponent />
        </main>
    )
}

export default UserListScreen