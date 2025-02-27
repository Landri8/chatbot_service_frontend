import React from 'react'
import Template from '../../../components/Template'

const FilterBarComponent = () => {
  return (
    <Template classes='flex items-center gap-4 mt-20 sticky top-4 z-50'>
        <input type="text" className='flex-1 max-w-[600px] h-[48px] bg-zinc-100 rounded-full px-6 text-[14px] border-none outline-none' placeholder='Search articles' />
        <button title='search' className='w-[48px] h-[48px] bg-zinc-100 rounded-full flex items-center justify-center'>
            <svg width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.79169 11.5L4.79169 3.83333" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            <path d="M18.2083 19.1665L18.2083 17.2498" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            <path d="M4.79169 19.1665L4.79169 15.3332" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            <path d="M18.2083 11.5L18.2083 3.83333" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            <path d="M11.5 6.7085L11.5 3.8335" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            <path d="M11.5 19.1665L11.5 11.4998" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            <circle cx="4.79167" cy="13.4167" r="1.91667" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            <circle cx="11.5" cy="8.62516" r="1.91667" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            <circle cx="18.2084" cy="14.3752" r="1.91667" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            </svg>

        </button>
    </Template>
  )
}

export default FilterBarComponent