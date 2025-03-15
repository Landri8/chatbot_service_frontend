import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar'
import FooterComponent from '../../components/FooterComponent'
import ContactDescriptionComponent from './components/ContactDescriptionComponent'
import ContactFormComponent from './components/ContactFormComponent'
import OverlayComponent from './components/OverlayComponent'
import ChatBot from '../../components/ChatBot'

const ContactUsScreen: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <NavBar />
      <ChatBot />
      <OverlayComponent />
      <ContactDescriptionComponent />
      <ContactFormComponent />
      <FooterComponent />
    </section>
  )
}

export default ContactUsScreen