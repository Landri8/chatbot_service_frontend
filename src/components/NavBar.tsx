import React from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";

const NavBar: React.FC = () => {
  return (
    <nav className='fixed top-0 left-1/2 -translate-x-1/2 py-6 w-[88%] md:w-11/12 max-w-[1560px] bg-transparent flex items-center justify-between z-40'>
      <Link to='/' className='font-bold'>{import.meta.env.VITE_APP_NAME}</Link>
      <div className='hidden lg:flex gap-10 px-4 py-1 backdrop-blur-[3px] rounded-full'>
        <Link className='text-[14px]' to='/'>Home</Link>
        <Link className='text-[14px]' to='/products'>Pricing</Link>
        <Link className='text-[14px]' to='/aboutus'>About Us</Link>
        <Link className='text-[14px]' to='/contactus'>Contact Us</Link>
        <Link className='text-[14px]' to='/blogs'>Blogs</Link>
      </div>

      <button title='Menu' className='lg:hidden w-[40px] aspect-square flex items-center justify-center text-[20px] backdrop-blur-[3px] rounded-full'><FiMenu /></button>
    </nav>
  )
}

export default NavBar