import React from 'react'
import Template from './Template'
import HeadingTextComponent from '../screens/home/components/HeadingTextComponent'
import Aim from './Aim'

const VisionMissionAimComponent: React.FC = () => {
  return (
    <Template classes='text-center py-[80px] lg:py-[100px]'>
        <HeadingTextComponent content='Our aims and values' />
        <div className='lg:w-[80%] mx-auto'>
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 mb-6 mt-12 lg:mt-20'>
              <Aim title='Mission' content='“We aim to make AI accessible and affordable for businesses of all sizes”' />
              <Aim title='Vision' content='“To revolutionize how businesses interact with customers using AI”' />
          </div>
          <Aim title='Value' content='“We prioritize transparency, security, and user-centric innovation”' />
        </div>
    </Template>
  )
}

export default VisionMissionAimComponent