import React, { useEffect } from "react";
import AboutHeroComponent from "./components/AboutHeroComponent";
import NavBar from "../../components/NavBar";
import CompanyDescriptionComponent from "./components/CompanyDescriptionComponent";
import ServiceSatisfactionComponent from "../../components/ServiceSatisfactionComponent";
import VisionMissionAimComponent from "../../components/VisionMissionAimComponent";
import PartnersComponent from "../../components/PartnersComponent";
import AchievementComponent from "../../components/AchievementComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent";
import FAQComponent from "../../components/FAQComponent";
import FooterComponent from "../../components/FooterComponent";
import ChatBot from "../../components/ChatBot";

const AboutUsScreen: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <NavBar />
      <ChatBot />
      <AboutHeroComponent />
      <CompanyDescriptionComponent />
      <ServiceSatisfactionComponent />
      <VisionMissionAimComponent />
      <PartnersComponent />
      <AchievementComponent />
      <TestimonialsComponent />
      <FAQComponent />
      <FooterComponent />
    </section>
  );
};

export default AboutUsScreen;
