import React from 'react'
import Template from '../../../components/Template'

const FilterBarComponent = ({handleChange} : {handleChange: (value: string) => void}) => {
  return (
    <Template classes='flex items-center gap-4 mt-20 sticky top-4 z-50'>
        <input onChange={(e) => handleChange(e.target.value)} type="text" className='flex-1 max-w-[600px] h-[48px] bg-zinc-100 rounded-full px-6 text-[14px] border-none outline-none' placeholder='Search articles' />
    </Template>
  )
}

export default FilterBarComponent