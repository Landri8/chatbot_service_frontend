import React from 'react'
import NavBar from '../../components/NavBar'
import FilterBarComponent from './components/FilterBarComponent'
import TrendBlogComponent from './components/TrendBlogComponent'
import BlogComponent from './components/BlogComponent'
import FooterComponent from '../../components/FooterComponent'

const BlogScreen: React.FC = () => {
  return (
    <section>
        <NavBar />
        <FilterBarComponent />
        <TrendBlogComponent />
        <BlogComponent />
        <FooterComponent />
    </section>
  )
}

export default BlogScreen