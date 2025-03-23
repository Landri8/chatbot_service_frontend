import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/home/HomeScreen'
import AboutUsScreen from './screens/aboutus/AboutUsScreen'
import ContactUsScreen from './screens/contactus/ContactUsScreen'
import BlogScreen from './screens/blogs/BlogScreen'
import BlogDetailsScreen from './screens/blogs/BlogDetailsScreen'
import ProductOverviewScreen from './screens/product/ProductOverviewScreen'
import ProductDetailsScreen from './screens/product/ProductDetailsScreen'
import PromotionEventScreen from './screens/promotionevent/PromotionEventScreen'
import AuthMiddleware from './middlewares/AuthMiddleware'
import GuestMiddleware from './middlewares/GuestMiddleware'
import LoginScreen from './screens/admin/login/LoginScreen'
import WelcomeScreen from './screens/admin/welcome/WelcomeScreen'
import UserListScreen from './screens/admin/users/UserListScreen'
import UserDetailsScreen from './screens/admin/users/UserDetailsScreen'
import BlogListScreen from './screens/admin/blogs/BlogListScreen'
import AdminBlogDetailsScreen from './screens/admin/blogs/AdminBlogDetailsScreen'
import MessageListScreen from './screens/admin/messages/MessageListScreen'
import MessageDetailsScreen from './screens/admin/messages/MessageDetailsScreen'
import FAQListScreen from './screens/faq/FAQListScreen'
import FAQDetailsScreen from './screens/faq/FAQDetailsScreen'
import PaymentScreen from './screens/payment/PaymentScreen'
import SolutionsScreen from './screens/solutions/SolutionsScreen'
import DashboardScreen from './screens/admin/dashboard/DashboardScreen'

const Router: React.FC = () => {
  return (
    <Routes>
        <Route path='/' Component={HomeScreen} />
        <Route path='/blogs' Component={BlogScreen} />
        <Route path='/blogs/:id' Component={BlogDetailsScreen} />
        <Route path='/products' Component={ProductOverviewScreen} />
        <Route path='/products/:id' Component={ProductDetailsScreen} />
        <Route path='/aboutus' Component={AboutUsScreen} />
        <Route path='/contactus' Component={ContactUsScreen} />
        <Route path='/event' Component={PromotionEventScreen} />
        <Route path='/payment' Component={PaymentScreen} />
        <Route path='/solutions' Component={SolutionsScreen} />

        <Route path='/admin' >
          <Route Component={GuestMiddleware} >
            <Route path="login" element={<LoginScreen />} />
          </Route>

          <Route Component={AuthMiddleware} >
            <Route index element={<WelcomeScreen />} />
            <Route path="dashboard" element={<DashboardScreen />} />
            <Route path="users" element={<UserListScreen />} />
            <Route path="users/:id" element={<UserDetailsScreen />} />
            <Route path='blogs' element={<BlogListScreen />} />
            <Route path='blogs/:id' element={<AdminBlogDetailsScreen />} />
            <Route path='messages' element={<MessageListScreen />} />
            <Route path='messages/:id' element={<MessageDetailsScreen />} />
            <Route path='faqs' element={<FAQListScreen />} />
            <Route path='faqs/:id' element={<FAQDetailsScreen />} />
          </Route>
        </Route>
    </Routes>
  )
}

export default Router