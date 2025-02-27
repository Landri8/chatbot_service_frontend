import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ResponseModel from '../../../../models/response.model';
import { UserModel } from '../../../../models/userinfo.model';
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil';
import { TbCopy } from "react-icons/tb";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { UserUpdateFormData, userUpdateFormSchema } from '../schemas/UserUpdateFormSchema';
import { MdOutlineDelete } from "react-icons/md";
import { Modal } from 'antd';
import { useAuthStore } from '../../../../store/authStore';
import { deleteUserApi, getUserDetailsApi, updateUserApi } from '../../../../services/userService';

const UserDetailsFormComponent = ({id}: {id: string}) => {
  const authInfo = useAuthStore(state => state.authInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleDeleteUser = async () => {
    try {
      const {data: responseData} : {data: ResponseModel} = await deleteUserApi({
        id
      });

      const deleteResponseData = httpResponseHandler(responseData);
      toast.success(responseData.message);
      navigate('/admin/users');
    } catch(error) {
      toast.error("Error deleting user");
      setIsModalOpen(false);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [user, setUser] = useState<UserModel | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm({
    resolver: zodResolver(userUpdateFormSchema),
  });

  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data: UserUpdateFormData) => {
    try {
      if (user?.email != data.email) {
        toast.error("Email cannot be changed");
      }

      const {data: responseData} : {data: ResponseModel} = await updateUserApi(data);
      console.log(responseData)
      const createResponseData = httpResponseHandler(responseData);
      toast.success(responseData.message);
      reset();
      navigate('/admin/users');
    } catch (error : Error | any) {
      toast.error(error.message);
    } finally {
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(user?.id ?? '');
    toast.success("Copied to clipboard");
  }

  useEffect(() => {
    setIsLoading(true);
    getUserDetailsApi(id).then(
      ({data}: {data: ResponseModel}) => {

        const getUserDetailsResponseData = httpResponseHandler(data);
        setUser(getUserDetailsResponseData);

        setValue('name', getUserDetailsResponseData.name);
        setValue('email', getUserDetailsResponseData.email);
        setValue('role', getUserDetailsResponseData.role);

      }
    ).catch((error: any) => {
      console.log(error);
      toast.error("Fetching user details failed")
    })
    .finally(() => setIsLoading(false));
  }, [])

  return (
    <>
      <Modal 
      title="Confirmation" 
      open={isModalOpen} 
      onOk={handleDeleteUser} 
      okButtonProps={{
        style: {
          backgroundColor: '#f59e0b'
        }
      }}
      onCancel={handleCancel}>
        <p>Are you sure you want to delete this user?</p>
      </Modal>
      {isLoading 
      ?
      <p className='text-center my-10'>Loading user details...</p>
      :
      (user != null && user != undefined) 
      ? 
      <div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <p className='text-zinc-400 text-[14px]'>{user.id}</p>
            <button onClick={copyToClipboard} title='Copy' className='cursor-pointer'><TbCopy className='text-zinc-400 text-[14px]' /></button>
          </div>
          {authInfo?.user.id != id && <button title='Delete' onClick={showModal} className='h-[40px] w-[40px] rounded-full hover:bg-zinc-100 cursor-pointer'><MdOutlineDelete className='text-red-400 text-[18px] mx-auto' /></button>}
        </div>
        <form className="w-full max-w-[800px] mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex gap-4">
            <div className="w-1/2">
              <label className="text-[13px] font-semibold mb-2 block">
                Full name
              </label>
              <input
                disabled={!editMode}
                {...register("name")}
                className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border disabled:cursor-not-allowed disabled:bg-zinc-100 ${
                  errors.name ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="w-1/2">
                <label className='text-[13px] font-semibold mb-2 block'>Role</label>
                <select disabled={!editMode} {...register('role')} className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border disabled:cursor-not-allowed disabled:bg-zinc-100 ${errors.role ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
                    <option value='' disabled selected>Select role</option>
                    <option value='1'>Admin</option>
                    <option value='2'>Staff</option>
                </select>
                {errors.role && <p className="text-xs text-red-400 mt-1">{errors.role.message}</p>}
            </div>
          </div>

          <div className="mb-6">
            <label className="text-[13px] font-semibold mb-2 block">Email</label>
            <input
              disabled
              {...register("email")}
              className={`w-full h-[36px] px-4 text-[13px] rounded-[7px] outline-none border disabled:cursor-not-allowed disabled:bg-zinc-100 ${
                errors.email ? "border-red-300 bg-red-50" : "border-gray-200"
              }`}
              placeholder="abcd@gmail.com"
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
            )}
          </div>
          {
            !editMode && <button type='button' onClick={() => setEditMode(true)} className='h-[36px] px-4 text-[13px] rounded-[7px] bg-amber-200 text-black cursor-pointer'>Edit User Info</button>
          }
          {
            editMode && (
              <button className="h-[36px] border px-4 text-[13px] rounded-[7px] bg-black text-white">
                {isSubmitting ? <span className="loader2"></span> : "Confirm"}
              </button>
            )
          }
        </form>
      </div> 
      : 
      <p className='text-center my-10'>User not found</p>
    }
    </>
  )
}

export default UserDetailsFormComponent