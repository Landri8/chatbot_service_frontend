import React from 'react'
import Template from '../../../components/Template'
import HeadingTextComponent from '../../home/components/HeadingTextComponent'

const PricingComparisonComponent = () => {
  return (
    <Template classes='text-center py-[100px]'>
        <HeadingTextComponent content='Compare features across plans' />

        <div className='mt-16'>
            <PlanMobile plan='Free Plan' features={[
            { feature: 'Requests/ Month', fact: '1,000' },
            { feature: 'Message Limit', fact: '50 words' },
            { feature: 'Customization', fact: 'Yes' },
            { feature: 'AI Knowledge Assistant', fact: 'No' },
            { feature: 'Personalized Tones', fact: 'No' },
            { feature: 'Chat History', fact: 'No' },
            { feature: 'Training with Images/Videos', fact: 'No' },
            { feature: 'AI Model', fact: 'Mini' }
            ]} 
            />

            <PlanMobile plan='Basic Plan' features={[
            { feature: 'Requests/ Month', fact: '20,000' },
            { feature: 'Message Limit', fact: '200 words' },
            { feature: 'Customization', fact: 'Yes' },
            { feature: 'AI Knowledge Assistant', fact: 'Yes' },
            { feature: 'Personalized Tones', fact: 'Yes' },
            { feature: 'Chat History', fact: 'No' },
            { feature: 'Training with Images/Videos', fact: 'No' },
            { feature: 'AI Model', fact: 'Mini' }
            ]} 
            />

            <PlanMobile plan='Business Plan' features={[
            { feature: 'Requests/ Month', fact: '100,000' },
            { feature: 'Message Limit', fact: '10,000 words' },
            { feature: 'Customization', fact: 'Yes' },
            { feature: 'AI Knowledge Assistant', fact: 'Yes' },
            { feature: 'Personalized Tones', fact: 'Yes' },
            { feature: 'Chat History', fact: 'Yes' },
            { feature: 'Training with Images/Videos', fact: 'Yes' },
            { feature: 'AI Model', fact: 'Mini + vR6' }
            ]} 
            />

            <PlanDesktop /> 
        </div>
    </Template>
  )
}

type PlanProps = {
    plan: string,
    features: {
        feature: string,
        fact: string
    }[]
}

const PlanMobile: React.FC<PlanProps> = ({plan, features}) => {
    return (
        <div className='lg:hidden w-full my-10'>
            <h2 className='py-4 bg-zinc-200 rounded-[8px]'>{plan}</h2>
            <table border={1} className='w-full'>
                <tbody>
                    {features.map((feature, index) => (
                        <FeatureMobile key={index} feature={feature.feature} fact={feature.fact} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const PlanDesktop: React.FC = () => {

    const pricingData = [
        { feature: "Requests/Month", free: "1,000", basic: "20,000", business: "100,000" },
        { feature: "Message Limit", free: "50 words", basic: "200 words", business: "10,000 words" },
        { feature: "Customization", free: "Yes", basic: "Yes", business: "Yes" },
        { feature: "AI Knowledge Assistant", free: "No", basic: "Yes", business: "Yes" },
        { feature: "Personalized Tones", free: "No", basic: "Yes", business: "Yes" },
        { feature: "Chat History", free: "No", basic: "No", business: "Yes" },
        { feature: "Training with Images/Videos", free: "No", basic: "No", business: "Yes" },
        { feature: "AI Model", free: "Mini", basic: "Mini", business: "Mini + vR6" },
    ];

    return (
        <div className='hidden lg:block w-full md:w-full md:mx-auto my-10'>
            <table className="w-full">
                <thead>
                <tr className="text-left border border-l-0 border-r-0 border-t-0 border-gray-300">
                    <th className="p-4">Feature</th>
                    <th className="p-4">Free Plan</th>
                    <th className="p-4">Basic Plan</th>
                    <th className="p-4">Business Plan</th>
                </tr>
                </thead>
                <tbody>
                {pricingData.map((row, index) => (
                    <tr key={index} className="text-left p-4">
                        <td className="p-4 ">{row.feature}</td>
                        <td className="p-4 ">{row.free}</td>
                        <td className="p-4 ">{row.basic}</td>
                        <td className="p-4 ">{row.business}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

type FeatureProps = {
    feature: string,
    fact: string
}

const FeatureMobile: React.FC<FeatureProps> = ({feature, fact}) => {
    return (
        <tr className='border-b border-l-0 border-r-0 border-t-0 border-[0.5px] border-zinc-400'>
            <td className='w-1/2 text-start px-4 py-2'>{feature}</td>
            <td className='w-1/2 text-start px-4 py-2'>{fact}</td>
        </tr>
    );
}

export default PricingComparisonComponent