import React, { useEffect } from 'react'
import AdminSearchAndFilter from '../../../../components/AdminSearchAndFilter'
import UserTableComponent from './UserTableComponent'
import ResponseModel from '../../../../models/response.model'
import toast from 'react-hot-toast'
import { useUserStore } from '../../../../store/userStore'
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil'
import { UserModel } from '../../../../models/userinfo.model'
import { getUserListApi } from '../../../../services/userService'

const UserListComponent = () => {

  const userStore = useUserStore(state => state);
  const [filteredUserList, setFilteredUserList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (value: string) => {
    console.log(userStore.userList)
    setFilteredUserList(userStore.userList.filter((user: UserModel) => user.name.toLowerCase().includes(value.toLowerCase())));
  }

  useEffect(() => {
    setIsLoading(true);
    getUserListApi().then(
      ({data}: {data: ResponseModel}) => {

        const getUserListResponseData = httpResponseHandler(data);
        userStore.updateUserList(getUserListResponseData);
        setFilteredUserList(getUserListResponseData);

      }
    ).catch((error) => toast.error("Fetching user list failed"))
    .finally(() => setIsLoading(false));
  }, [])
  
  return (
    <>
        <AdminSearchAndFilter placeholder='Search users' handleChange={handleChange} />
        <UserTableComponent userList={filteredUserList} isLoading={isLoading} />
    </>
  )
}

export default UserListComponent