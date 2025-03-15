import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import FooterComponent from "../../components/FooterComponent";
import ChatBot from "../../components/ChatBot";

interface TestimonialProps {
  logoSrc: string;
  altText: string;
  description: string;
  brandLogoSrc?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  logoSrc,
  altText,
  description,
  brandLogoSrc,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-6 mb-12">
      {/* Logo/Image card */}
      <div className="w-1/2 aspect-square flex items-center justify-center rounded-lg overflow-hidden">
        <img
          src={logoSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-1/2 flex flex-col flex-1 item-center">
        <h1 className="mb-4 font-semibold text-2xl">{altText}</h1>
        <p className="text-base md:text-lg text-gray-800">{description}</p>
      </div>
    </div>
  );
};

const SolutionsScreen: React.FC = () => {
  const testimonials = [
    {
      logoSrc: "/assets/images/coursera.png",
      altText: "Coursera",
      description:
        "Coursera enhances student support with our AI chatbot, providing instant course recommendations and academic assistance. Available 24/7, it ensures seamless communication, reduces wait times, and improves student satisfaction, leading to higher engagement and course completion rates.",
      brandLogoSrc: "/assets/images/coursera_logo.png",
    },
    {
      logoSrc: "/assets/images/who_org.png",
      altText: "World Health Organization",
      description:
        "WHO utilizes our AI chatbot to deliver real-time health information and combat misinformation. It provides instant, accurate responses in multiple languages, improving accessibility and public engagement. ",
      brandLogoSrc: "/assets/images/who_logo.png",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 pt-24 pb-12 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">
          How Our Customers Are Using Our Solutions
        </h2>

        <div className="max-w-[800px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              logoSrc={testimonial.logoSrc}
              altText={testimonial.altText}
              description={testimonial.description}
              brandLogoSrc={testimonial.brandLogoSrc}
            />
          ))}
        </div>

        {/* Chat button - positioned bottom right */}
        <ChatBot />
      </div>
      <FooterComponent />
    </>
  );
};

export default SolutionsScreen;
