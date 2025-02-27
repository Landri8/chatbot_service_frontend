import React from 'react'
import { useAuthStore } from '../../../store/authStore';

const WelcomeScreen = () => {
    const authStore = useAuthStore(state => state);

    return (
        <main className='m-6 bg-white rounded-[14px] p-8'>
            <h1 className='text-3xl font-medium mb-4'>Welcome {authStore.authInfo?.user.name}</h1>
            <p className='text-sm text-zinc-500'>This is the Blownmind's dashboard for admins and staffs. You can manage work according to your roles and responsibility. If you are not familiar with the dashboard, feel free to ask via +959 7712 41245 at any time!</p>
        </main>
    )
}

export default WelcomeScreen