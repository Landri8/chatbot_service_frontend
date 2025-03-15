import React, { useEffect, useState } from 'react'
import BlogDetailsComponent from './components/BlogDetailsComponent'
import FooterComponent from '../../components/FooterComponent'
import NavBar from '../../components/NavBar'
import RelatedBlogsComponent from './components/RelatedBlogsComponent'
import ChatBot from '../../components/ChatBot'
import { httpResponseHandler } from '../../utils/responseHandlerUtil'
import ResponseModel from '../../models/response.model'
import { getBlogDetailsApi } from '../../services/clientService'
import toast from 'react-hot-toast'
import BlogInfoModel from '../../models/bloginfo.model'
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetailsScreen: React.FC = () => {

  const id = useParams().id;

  
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [blog, setBlog] = useState<BlogInfoModel | null>(null);

  const navigate = useNavigate();

  if (!id) navigate("/");

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    getBlogDetailsApi(id as string).then(
      ({data}: {data: ResponseModel}) => {

        const getBlogDetailsResponseData = httpResponseHandler(data);
        setBlog(getBlogDetailsResponseData);        
      }
    ).catch((error: any) => {
      console.log(error);
      toast.error("Fetching blog failed")
    })
    .finally(() => setIsLoading(false));
  }, [])


  return (
    <section>
        <NavBar />
        
        {
          isLoading 
          ? 
          <div className='w-full h-screen flex items-center justify-center'>
            <span className='loader'></span>
          </div>
          :
          <>
          <ChatBot />
          <BlogDetailsComponent 
            title={blog?.title || ""}
            content={blog?.content || ""}
            date={blog?.date || ""}
            imageUrl={blog?.coverImage || ""}
          />
          </>
        }
        <FooterComponent />
    </section>
  )
}

export default BlogDetailsScreen