import React from 'react'

const HeadingTextComponent = ({content} : {content: string}) => {
  return (
    <h1 className='text-[clamp(1.2rem,2vw,1.8rem)] w-2/3 mx-auto font-medium'>{content}</h1>
  )
}

export default HeadingTextComponent