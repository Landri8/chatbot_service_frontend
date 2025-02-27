import React from 'react'
import Template from './Template'

const PartnersComponent: React.FC = () => {
  return (
    <Template classes='text-center py-[80px]'>
        <p className='mb-10 text-[12px] lg:text-[16px]'>Empowering <span className='font-bold'>hundreds</span> of companies.</p>
        <img className='lg:w-[80%] mx-auto' src="/assets/images/partner.svg" alt="" />
    </Template>
  )
}

export default PartnersComponent