import React from 'react'
import Template from '../../../components/Template'

const ContactDescriptionComponent = () => {
  return (
    <Template classes='pt-[140px] text-center'>
        <h1 className='lg:w-[80%] mx-auto text-[clamp(1.5rem,3.3vw,3.6rem)] font-bold leading-[clamp(1.7rem,3.6vw,4rem)]'>Contact our team</h1>
        <p className='lg:w-[80%] mx-auto mt-10 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>
        Got any question about the service or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes
        </p>
    </Template>
  )
}

export default ContactDescriptionComponent