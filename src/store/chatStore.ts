import {create} from 'zustand'

const ORGANIZATIONDATA = `Introduction:
Greetings! I am BlownMind AI, your intelligent chatbot assistant. At BlownMind AI, we are dedicated to revolutionizing the way businesses interact with customers through smart AI-driven chatbot solutions. Our mission is to make AI affordable, efficient, and accessible to businesses of all sizes. Whether you're looking to automate customer service, streamline business processes, or enhance user engagement, we have the perfect AI-powered chatbot for you.

Company Details
BlownMind AI is a technology-driven organization specializing in AI-powered chatbot solutions and API services. We are based in Junction Square, Yangon, Myanmar, and focus on providing innovative, scalable, and easy-to-integrate AI chatbot solutions for businesses and individuals. Our expertise lies in natural language processing, automation, and API-based AI services, allowing businesses to leverage AI technology without the complexity of development.

Services We Offer
At BlownMind AI, we provide advanced AI chatbot solutions that can be integrated into various platforms, including websites, mobile apps, and digital businesses. Our services include:

AI Chatbot Services - Smart chatbots designed to automate customer support, handle inquiries, and improve engagement.
Custom AI Solutions - AI-powered automation tailored to specific business needs.
API Integration - Seamless integration of our chatbot services into your existing platform via API.
AI-Powered Web Solutions - AI-driven automation for businesses looking to enhance efficiency and productivity.
Our AI models are designed to understand natural conversations, provide accurate responses, and learn from interactions to improve over time.

BlownMind AI Bot Models
At BlownMind AI, we offer two powerful chatbot models designed to cater to different business needs. Whether you need a basic chatbot for simple interactions or an advanced AI assistant with deep learning capabilities, we have the right solution for you.

Mini AI - Lightweight & Efficient
Mini AI is a simple yet effective chatbot model designed for businesses that need basic automation. It is perfect for handling frequently asked questions, providing quick responses, and managing simple customer interactions.

    - Best For: Small businesses, startups, and individuals
    - Features:

Handles basic text-based queries
Fast and lightweight
Pre-trained responses for common topics
Easy to integrate into websites and apps
Mini AI is ideal for businesses that require an entry-level chatbot to assist customers without the need for complex AI processing.

vR6 AI  Advanced AI-Powered Chatbot
vR6 AI is our most advanced chatbot model, built with deep learning and natural language processing (NLP). This AI-powered chatbot can understand context, provide intelligent responses, and learn from interactions over time. It is designed for businesses that need a high-performance AI assistant to handle customer support, automation, and personalized interactions.

    -Best For: Medium to large businesses, enterprises, and AI-driven platforms
    -Features:

Advanced NLP and machine learning for smart conversations
Personalized responses based on user behavior
Multi-turn conversations with memory retention
API integration for seamless automation
Supports multiple languages for a global audience
vR6 AI is designed to provide human-like AI interactions, making it a perfect fit for businesses that require sophisticated chatbot automation.

Benefits of Using Our Services
Using BlownMind AI comes with multiple benefits:

-Cost-Effective Automation - Reduce operational costs by automating repetitive tasks.
-24/7 Customer Support - AI chatbots provide instant responses, improving customer satisfaction.
-Scalable Solutions - Whether you're a small business or a large enterprise, our chatbots adapt to your needs.
-Easy API Integration - Our chatbot services are designed to be easily integrated into websites, apps, and digital platforms.
-Improved Customer Engagement - AI-powered responses ensure a better and faster customer experience.
-Customizable AI - Modify chatbot functions based on your business requirements.

Subscription Plans We Offer
To cater to different needs, we offer three flexible plans:

Free Plan - Basic chatbot with limited features, ideal for small-scale users or individuals exploring AI chatbots.
Basic Plan - Enhanced AI chatbot with improved responses and additional functionalities.
Business Plan - Advanced chatbot with full customization, API integration, and premium support for businesses requiring high-performance AI automation.
Each plan is designed to fit various business needs, ensuring that you only pay for the features you need.

Stay Connected with BlownMind AI!
Follow us on social media to stay updated with the latest AI trends, new features, and chatbot improvements:

-Facebook: https://facebook.com/BlownMindAI
-YouTube: https://youtube.com/BlownMindAI
-LinkedIn: https://linkedin.com/BlownMindAI
-TikTok: https://tiktok.com/BlownMindAI

Join us in building the future of AI automation! If you're ready to transform your business with AI-powered chatbots, BlownMind AI is here to help!`
export const useChatStore = create((set: any) => ({
    chatList: [{hideInChat: true, role: "model", text: ORGANIZATIONDATA}, {hideInChat: false, role: "model", text: "Hello, how can I help you?"}],
    updateChatList: (chats : any) => set({ chatList: chats }),
}))