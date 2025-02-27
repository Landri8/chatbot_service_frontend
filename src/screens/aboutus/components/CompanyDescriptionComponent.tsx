import React from 'react'
import Template from '../../../components/Template'

const CompanyDescriptionComponent: React.FC = () => {
  return (
    <Template classes='py-[80px] lg:py-[120px]'>
        <p className='text-center mx-auto w-full md:w-[90%] lg:w-[80%] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium'>
            An AI solution company dedicated to revolutionizing customer engagement through innovative chatbot technology. Our platform offers powerful, easy-to-use API-driven chatbots that help businesses improve communication, increase efficiency, and enhance customer satisfaction
        </p>
    </Template>
  )
}

export default CompanyDescriptionComponent