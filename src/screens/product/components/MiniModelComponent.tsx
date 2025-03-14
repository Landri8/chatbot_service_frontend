import React from 'react'
import Template from '../../../components/Template'
import ModelOverviewComponent from './ModelOverviewComponent'
import ModelDescriptionComponent from './ModelDescriptionComponent'
import ModelFeaturesComponent from './ModelFeaturesComponent'

const MiniModelComponent = () => {

  const features = [
    {
      title: 'Simple Query Handling',
      content: 'Provides direct and straightforward answers to basic customer inquiries.'
    },
    {
      title: 'Predefined Knowledge Base',
      content: 'Operates with a fixed set of responses tailored to general use cases.'
    },
    {
      title: 'Basic Analytics',
      content: 'Provides simple insights into interactions, such as message count and user feedback.'
    }
  ]

  return (
    <Template classes='text-center'>
        <ModelOverviewComponent name='AI Solution Mini' description='Our standard AI model, designed for efficient and straightforward interactions' />
        <ModelDescriptionComponent desc='lightweight model ideal for basic customer interactions, offering fast and reliable responses' />
        <ModelFeaturesComponent features={features} />
    </Template>
  )
}

export default MiniModelComponent