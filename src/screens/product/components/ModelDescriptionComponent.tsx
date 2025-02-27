import React from 'react'

const ModelDescriptionComponent = ({desc} : {desc: string}) => {
  return (
    <p className='text-[20px] md:text-[24px] lg:text-[32px] md:w-[70%] lg:w-[50%] mx-auto'>
        {desc}
    </p>
  )
}

export default ModelDescriptionComponent