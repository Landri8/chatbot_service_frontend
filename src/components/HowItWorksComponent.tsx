import React from 'react'
import Template from './Template'
import HeadingTextComponent from '../screens/home/components/HeadingTextComponent'
import HowitWorksStep from './HowitWorksStep'

const HowItWorksComponent: React.FC = () => {
  return (
    <Template classes='text-center py-[80px] lg:py-[120px]'>
        <HeadingTextComponent content='How it works' />
        <div className='mt-12 lg:mt-20 flex flex-col gap-16'>
            <HowitWorksStep 
            step={1} 
            stepTitle='Create account and purchase  a plan' 
            stepContent='First, you have to make an account on our platform and purchase any of the service plans we offer.'
            />
            <HowitWorksStep 
            step={2} 
            stepTitle='Create new project and set up with your organization data' 
            stepContent={`After signing up, you will be redirected to the project dashboard. To start a new project, click "Create New Project" and provide details such as your app's name, a brief description of its purpose, and the app's domain.`}
            />
             <HowitWorksStep 
            step={3} 
            stepTitle='Get API key and implement it in your application' 
            stepContent={`After completing steps one and two, you will receive the project API key, which serves as the access key to our APIs. Be sure to review our documentation thoroughly and integrate the desired functionalities into your application.`}
            />
        </div>
    </Template>
  )
}

export default HowItWorksComponent