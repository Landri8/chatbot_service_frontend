import React from 'react'
import BlogDetailsComponent from './components/BlogDetailsComponent'
import FooterComponent from '../../components/FooterComponent'
import NavBar from '../../components/NavBar'
import RelatedBlogsComponent from './components/RelatedBlogsComponent'

const BlogDetailsScreen: React.FC = () => {
  return (
    <section>
        <NavBar />
        <BlogDetailsComponent 
        title='Plans for £2bn AI centre and 750 jobs'
        content={`
        Work to construct the UK's largest artificial intelligence (AI) data centre could create up to 750 jobs in a town, it has been claimed.

        Nscale pledged £2bn to build and open the pioneering facility in Loughton, Essex, by 2026.
        It came after the government announced plans to become a world leader in AI, using it to boost growth and deliver services more efficiently.

        Councillor Stephen Murray hailed the announcement as an "important opportunity" for the town.
        The data centre was due to be built in Langston Road and would become the first facility of its kind in Essex.

        Murray, an Independent on Epping Forest District Council, said: "Keeping Loughton at the forefront of AI plans is important for all our futures."
        However, he urged "very careful and detailed consideration" by authorities in the region.    
        `}
        date='16 January 2025'
        imageUrl="/assets/images/blogimg.png"
        />

        <RelatedBlogsComponent />

        <FooterComponent />
    </section>
  )
}

export default BlogDetailsScreen