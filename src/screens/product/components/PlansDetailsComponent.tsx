import React from 'react'
import Template from '../../../components/Template'

const PlansDetailsComponent = () => {
  return (
    <Template>
        <PlanDetails title="Free Plan" description={`
        Our Free Plan is ideal for individuals or small businesses exploring AI chatbot solutions. With 1,000 requests per month, you can customize the chatbot with your company information to reflect your brand. It supports messages of up to 50 words, making it a great starting point to test the capabilities of our API. Best of all, it’s completely free, allowing you to experience the basics of AI-powered customer engagement without any commitment.

        This plan is perfect for those who want to experiment with chatbot integration or handle light customer interactions. Whether you’re running a small website or a side project, our Free Plan gives you a glimpse into how AI can transform communication.
        `} />

        <PlanDetails title="Basic Plan" description={`
        The Basic Plan is crafted for growing businesses that require more advanced capabilities. With 20,000 requests per month, you can handle a higher volume of interactions while enjoying the benefits of personalized tones and responses. It supports messages of up to 200 words and includes an AI knowledge assistant to enhance user experience. You can also fully customize the chatbot with your company’s branding to maintain consistency.

        This plan provides a balance between affordability and functionality, making it ideal for businesses looking to scale their customer support. Whether you need to answer complex queries or provide tailored responses, the Basic Plan gives you the tools to improve customer satisfaction and efficiency.
        `} />

        <PlanDetails title="Business Plan" description={`
        The Business Plan is our most comprehensive offering, designed for enterprises and organizations with high-volume demands. With 100,000 requests per month, you can manage large-scale interactions seamlessly. This plan allows messages of up to 10,000 words, enabling detailed conversations, and includes advanced features like chat history and training with images and videos. Additionally, you’ll have access to an AI knowledge assistant and full customization options to tailor the chatbot to your exact requirements.

        Ideal for large businesses or customer-centric enterprises, this plan offers unparalleled scalability and flexibility. Whether you're automating support, streamlining workflows, or enhancing customer engagement, the Business Plan equips you with the tools and features to deliver outstanding results at scale.
        `} />
    </Template>
  )
}

type PlanProps = {
    title: string,
    description: string
}

const PlanDetails: React.FC<PlanProps> = ({title, description}) => {
    return (
        <div className='w-full mb-10'>
            <h1 className='text-[18px] lg:text-[24px] font-semibold mb-4'>{title}</h1>
            <p className='text-[16px] lg:text-[18px] whitespace-pre-line'>{description}</p>
        </div>
    )
}

export default PlansDetailsComponent