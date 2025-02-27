import React from 'react'
import { CiSearch } from "react-icons/ci";

type Props = {
    placeholder: string
    handleChange: (value: string) => void
}

const AdminSearchAndFilter : React.FC<Props> = ({placeholder, handleChange}) => {

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleChange(value);
  }

  return (
    <div className='my-4'>
        <div className='relative w-1/3'>
            <input onChange={handleSearch} type="text" className='w-full py-2 px-4 text-[14px] rounded-[7px] outline-none text-zinc-700 border border-gray-200 bg-white' placeholder={placeholder} />
            <CiSearch className='text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-xl' />
        </div>
    </div>
  )
}

export default AdminSearchAndFilter