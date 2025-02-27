import React from 'react'
import { UserModel } from '../../../../models/userinfo.model'
import { useNavigate } from 'react-router-dom'
import { formatJoinedDate } from '../../../../utils/commonUtil'

type Props = {
    userList: UserModel[],
    isLoading: boolean
}

const UserTableComponent: React.FC<Props> = ({userList, isLoading}) => {

    const navigator = useNavigate();

    const handleClickDetails = (id: string) => {
        if (id == null || id == "") return;

        navigator(`/admin/users/${id}`);
    }
    
    return (
        <div className='bg-white rounded-[14px] px-8 py-6'>
            <table className='w-full'>
                <thead>
                    <tr className='border-b border-b-zinc-300'>
                        <th className='py-3 px-2 text-[14px] font-medium text-end w-1/12'>No.</th>
                        <th className='py-3 px-2 text-[14px] font-medium text-end w-2/12'>User ID</th>
                        <th className='py-3 px-2 text-[14px] font-medium w-1/12 text-start'>Role</th>
                        <th className='py-3 px-2 text-[14px] font-medium w-3/12 text-start'>Name</th>
                        <th className='py-3 px-2 text-[14px] font-medium w-3/12 text-start'>Email</th>
                        <th className='py-3 px-2 text-[14px] font-medium text-end w-2/12'>Join Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (isLoading) ?
                        <tr>
                            <td colSpan={6} className='py-3 text-center'><span className='loader'></span></td>
                        </tr>
                        :
                        (userList.length > 0)
                        ?
                        userList.map((user, index) => (
                            <tr onClick={() => handleClickDetails(user.id)} className={`${index != userList.length - 1 && 'border-b'} border-b-zinc-300 cursor-pointer hover:bg-amber-50 hover:underline`} key={index}>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 text-end w-1/12'>{index + 1}</td>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 text-end w-2/12'>{user.id}</td>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 w-1/12'>{(user.role == "1") ? "Admin": (user.role == "2") ? "Staff": "N/A"}</td>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 w-3/12'>{user.name}</td>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 w-3/12'>{user.email}</td>
                                <td className='py-3 px-2 text-[14px] text-zinc-600 text-end w-2/12'>{formatJoinedDate(user.createdAt)}</td>
                            </tr>
                        ))
                        :
                        <tr className=''>
                            <td className='py-3 text-[14px] text-zinc-600 text-center' colSpan={6}>No user data.</td>
                        </tr>
                    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTableComponent