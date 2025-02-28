import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import FilterBarComponent from './components/FilterBarComponent'
import TrendBlogComponent from './components/TrendBlogComponent'
import BlogComponent from './components/BlogComponent'
import FooterComponent from '../../components/FooterComponent'
import ChatBot from '../../components/ChatBot'
import { getBlogsApi } from '../../services/clientService'
import ResponseModel from '../../models/response.model'
import { httpResponseHandler } from '../../utils/responseHandlerUtil'
import toast from 'react-hot-toast'
import { BlogModel } from '../../models/bloginfo.model'

const BlogScreen: React.FC = () => {
  const [blogList, setBlogList] = useState<BlogModel[]>([]);
  const [filteredBlogList, setFilteredBlogList] = useState<BlogModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setFilteredBlogList(blogList.filter((blog) =>
      blog.title.toLowerCase().includes(value.toLowerCase())
    ));
  };

  useEffect(() => {
    setIsLoading(true);
    getBlogsApi()
      .then(({ data }: { data: ResponseModel }) => {
        const blogs = httpResponseHandler(data);
        setBlogList(blogs);
        setFilteredBlogList(blogs);
      })
      .catch(() => toast.error("Fetching blog list failed"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section>
      <NavBar />
      
      {isLoading ? (
        <div className='w-full h-screen flex items-center justify-center'>
          <span className='loader'></span>
        </div>
      ) : (
        <>
          <ChatBot />
          <FilterBarComponent handleChange={handleChange} />
          {blogList.length > 0 && <TrendBlogComponent blog={blogList[0]} />}
          <BlogComponent blogList={filteredBlogList} />
        </>
      )}

      <FooterComponent />
    </section>
  );
};

export default BlogScreen;