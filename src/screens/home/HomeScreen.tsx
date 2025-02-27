import React from 'react'
import HeroComponent from './components/HeroComponent'
import NavBar from '../../components/NavBar'
import FeaturesComponent from './components/FeaturesComponent'
import AdvertisementComponent from './components/AdvertisementComponent'
import PricingComponent from './components/PricingComponent'
import HowItWorksComponent from '../../components/HowItWorksComponent'
import ServiceSatisfactionComponent from '../../components/ServiceSatisfactionComponent'
import VisionMissionAimComponent from '../../components/VisionMissionAimComponent'
import PartnersComponent from '../../components/PartnersComponent'
import AchievementComponent from '../../components/AchievementComponent'
import TestimonialsComponent from '../../components/TestimonialsComponent'
import FAQComponent from '../../components/FAQComponent'
import FooterComponent from '../../components/FooterComponent'
import ChatBot from '../../components/ChatBot'

const HomeScreen: React.FC = () => {
  return (
    <section>
      <NavBar />
      <ChatBot />
      <HeroComponent />
      <FeaturesComponent />
      <AdvertisementComponent />
      <PricingComponent />
      <HowItWorksComponent />
      <ServiceSatisfactionComponent />
      <VisionMissionAimComponent />
      <PartnersComponent />
      <AchievementComponent />
      <TestimonialsComponent />
      <FAQComponent />
      <FooterComponent />
    </section>
  )
}

export default HomeScreen