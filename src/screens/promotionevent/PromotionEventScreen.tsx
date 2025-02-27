import React from 'react'
import NavBar from '../../components/NavBar'
import FooterComponent from '../../components/FooterComponent'
import UpcomingEventComponent from './components/UpcomingEventComponent'
import RecentEventsComponent from './components/RecentEventsComponent'

const recentEvents = [
    {
        id: 1,
        year: 2025,
        events: [
            {
                title: "AI Chatbot Revolution 2025",
                timeline: "📅 March 15, 2025 | 📍 Yangon, Myanmar | 🕒 10:00 AM - 3:00 PM",
                img: "/assets/images/event1.png",
            },
            {
                title: "Future of AI-Powered Businesses",
                timeline: "📅 March 15, 2025 | 📍 Yangon, Myanmar | 🕒 10:00 AM - 3:00 PM",
                img: "/assets/images/event2.png",
            },
        ]
    },
    {
        id: 2,
        year: 2024,
        events: [
            {
                title: "High-Tech Expo 2025",
                timeline: "📅 March 15, 2025 | 📍 Yangon, Myanmar | 🕒 10:00 AM - 3:00 PM",
                img: "/assets/images/event3.png",
            },
            {
                title: "Technology Innovation Booth Autumn 2024",
                timeline: "📅 March 15, 2025 | 📍 Yangon, Myanmar | 🕒 10:00 AM - 3:00 PM",
                img: "/assets/images/event4.png",
            },
        ]
    },
    {
        id: 3,
        year: 2023,
        events: [
            {
                title: "Big Data Conference 2023",
                timeline: "📅 March 15, 2025 | 📍 Yangon, Myanmar | 🕒 10:00 AM - 3:00 PM",
                img: "/assets/images/event5.png",
            },
            {
                title: "Artificial Intelligence Summit 2023",
                timeline: "📅 March 15, 2025 | 📍 Yangon, Myanmar | 🕒 10:00 AM - 3:00 PM",
                img: "/assets/images/event6.png",
            },
        ]
    }
]

const PromotionEventScreen = () => {

    return (
        <section>
            <NavBar />
            <UpcomingEventComponent />
            <RecentEventsComponent events={recentEvents} />
            <FooterComponent />
        </section>
    )
}

export default PromotionEventScreen