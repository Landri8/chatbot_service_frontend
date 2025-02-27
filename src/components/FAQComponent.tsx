import React from 'react'
import Template from './Template'
import HeadingTextComponent from '../screens/home/components/HeadingTextComponent'
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import AccordionItem from './AccordionItem';

const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{"lorem ip"}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{"lorem ip"}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{"lorem ip"}</p>,
    },
];

const FAQComponent : React.FC = () => {
  return (
    <Template classes='text-center py-[100px]'>
        <HeadingTextComponent content='Frequently Asked Questions' />

        <div className="mt-12 text-start w-full mx-auto md:w-1/2 space-y-3">
            <AccordionItem title="What is BlownMind?" content="BlownMind is an AI API provider for chatbot solutions." />
            <AccordionItem title="How does it integrate?" content="You can use our API endpoints to integrate AI-powered chatbots." />
            <AccordionItem title="Is it affordable?" content="Yes! We provide flexible pricing for all types of businesses." />
            <AccordionItem title="Does it support multiple languages?" content="Yes! We support multiple languages, including English, Spanish, and French." />
        </div>
    </Template>
  )
}

export default FAQComponent