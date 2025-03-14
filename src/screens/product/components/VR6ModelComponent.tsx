import React from 'react'
import Template from '../../../components/Template'
import ModelOverviewComponent from './ModelOverviewComponent'
import ModelDescriptionComponent from './ModelDescriptionComponent'
import ModelFeaturesComponent from './ModelFeaturesComponent'

const VR6ModelComponent = () => {

  const features = [
    {
      title: 'Advanced Query Handling',
      content: 'Understands complex queries, maintains context, and supports multiple languages.'
    },
    {
      title: 'Extensive Knowledge Base',
      content: 'Continuously learns, integrates with external data, and provides real-time updates.'
    },
    {
      title: 'Advanced Analytics & Insights',
      content: 'Tracks user interactions, generates reports, and offers sentiment analysis.'
    }
  ]

  return (
    <Template classes='text-center'>
        <ModelOverviewComponent name='AI Solution vR6' description='our flagship AI, built to deliver human-like responses and advanced conversational intelligence' />
        <ModelDescriptionComponent desc='Perfect for enterprises seeking to elevate their customer interactions with cutting-edge intelligence and advanced personalization' />
        <ModelFeaturesComponent features={features} />
    </Template>
  )
}

export default VR6ModelComponent