import React from 'react'
import HeadingTextComponent from './HeadingTextComponent'
import Template from '../../../components/Template'
import ServicePlan from '../../../components/ServicePlan'

const PricingComponent: React.FC = () => {
  return (
    <Template classes='text-center py-[100px]'>
        <HeadingTextComponent content='We offers three service plans for all sizes of business' />
        <div className='flex items-center justify-center gap-6 flex-col lg:flex-row mt-12 lg:mt-20 xl:w-[88%] mx-auto'>
            <ServicePlan isSpecial={false} planDesc='For students and start-up companies' planDetailsList={['1,000 Requests per month', 'Customize with your company information','50 words for a message', 'AI Solution mini']} planPrice='0.00' title='Free Plan' />
            <ServicePlan isSpecial={true} planDesc='For small businesses' planDetailsList={['20,000 Requests per month', 'Customize with your company information', 'Personalize tones and responses', '200 words for a message', 'AI knowledge assistant', 'AI Solution mini']} planPrice='15.99' title='Basic Plan' />
            <ServicePlan isSpecial={false} planDesc='For large organizations' planDetailsList={['100,000 Requests per month', 'Customize with your company information', 'Personalize tones and responses', '10,000 words for a message', 'AI knowledge assistant', 'Chat history', 'Supports training with images and videos', 'AI Solution vR6']} planPrice='39.99' title='Business Plan' />
        </div>
        
    </Template>
  )
}

export default PricingComponent