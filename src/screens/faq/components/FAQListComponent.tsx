import React, { useEffect } from 'react'
import { useFAQStore } from '../../../store/faqStore';
import { httpResponseHandler } from '../../../utils/responseHandlerUtil';
import { getFAQListApi } from '../../../services/faqService';
import ResponseModel from '../../../models/response.model';
import toast from 'react-hot-toast';
import AdminSearchAndFilter from '../../../components/AdminSearchAndFilter';
import FAQTableComponent from './FAQTableComponent';
import { FAQModel } from '../../../models/faqInfo.model';

const FAQListComponent = () => {

    const faqStore = useFAQStore(state => state);
    const [filteredFAQList, setFilteredFAQList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = (value: string) => {
        console.log(faqStore.faqList)
        setFilteredFAQList(faqStore.faqList.filter((faq: FAQModel) => faq.question.toLowerCase().includes(value.toLowerCase())));
    }

    useEffect(() => {
        setIsLoading(true);
        getFAQListApi().then(
        ({data}: {data: ResponseModel}) => {

            const getUserListResponseData = httpResponseHandler(data);
            faqStore.updateFAQList(getUserListResponseData);
            setFilteredFAQList(getUserListResponseData);

        }
        ).catch((error) => toast.error("Fetching FAQ list failed"))
        .finally(() => setIsLoading(false));
    }, [])

    return (
        <>
            <AdminSearchAndFilter placeholder='Search questions' handleChange={handleChange} />
            <FAQTableComponent faqList={filteredFAQList} isLoading={isLoading} />
        </>
    )
}

export default FAQListComponent