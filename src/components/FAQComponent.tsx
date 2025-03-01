import React, { useEffect } from 'react'
import Template from './Template'
import HeadingTextComponent from '../screens/home/components/HeadingTextComponent'
import AccordionItem from './AccordionItem';
import { getFAQsApi } from '../services/clientService';
import { httpResponseHandler } from '../utils/responseHandlerUtil';
import toast from 'react-hot-toast';
import ResponseModel from '../models/response.model';
import FAQInfoModel from '../models/faqInfo.model';

const FAQComponent : React.FC = () => {

  const [faqList, setFaqList] = React.useState<FAQInfoModel[]>([]);

  useEffect(() => {
    getFAQsApi().then(({data}: {data: ResponseModel}) => {
      const faqResponseData = httpResponseHandler(data);
      setFaqList(faqResponseData);
    }).catch((e) => {
      console.log(e)
      toast.error(e.message || "Failed getting FAQs");
    });
  }, [])

  return (
    <Template classes='text-center py-[100px]'>
        <HeadingTextComponent content='Frequently Asked Questions' />

        <div className="mt-12 text-start w-full mx-auto md:w-1/2 space-y-3">
            {faqList.map((faq: any) => <AccordionItem key={faq.id} title={faq.question} content={faq.answer} />)}
        </div>
    </Template>
  )
}

export default FAQComponent