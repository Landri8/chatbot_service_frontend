import React, { useEffect } from 'react'
import AdminSearchAndFilter from '../../../../components/AdminSearchAndFilter'
import { useBlogStore } from '../../../../store/blogStore';
import { BlogModel } from '../../../../models/bloginfo.model';
import BlogTableComponent from './BlogTableComponent';
import ResponseModel from '../../../../models/response.model';
import { httpResponseHandler } from '../../../../utils/responseHandlerUtil';
import toast from 'react-hot-toast';
import { getBlogListApi } from '../../../../services/blogService';

const BlogListComponent = () => {

    const blogStore = useBlogStore(state => state);
    const [filteredBlogList, setFilteredBlogList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = (value: string) => {
        console.log(blogStore.blogList)
        setFilteredBlogList(blogStore.blogList.filter((blog: BlogModel) => blog.title.toLowerCase().includes(value.toLowerCase())));
    }

    useEffect(() => {
        setIsLoading(true);
        getBlogListApi().then(
          ({data}: {data: ResponseModel}) => {
    
            const getBlogListResponseData = httpResponseHandler(data);
            blogStore.updateBlogList(getBlogListResponseData);
            setFilteredBlogList(getBlogListResponseData);
    
          }
        ).catch((error: any) => toast.error("Fetching blog list failed"))
        .finally(() => setIsLoading(false));
    }, [])

    return (
        <>
            <AdminSearchAndFilter placeholder='Search blog' handleChange={handleChange} />
            <BlogTableComponent blogList={filteredBlogList} isLoading={isLoading} />
        </>
    )
}

export default BlogListComponent