import React from 'react'
import Template from '../../../components/Template'
import HeadingTextComponent from '../../home/components/HeadingTextComponent'
import ProductModel from './ProductModel'

const ProductModelsComponent = () => {
  return (
    <Template classes='text-center pt-[140px] pb-[60px]'>
        <HeadingTextComponent content='Our AI Models' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-[80%] lg:mx-auto mt-12'>
            <ProductModel link='1' title='AI Solution mini' description='A lightweight chatbot model for basic, efficient interactions, included in Free and Basic plans.' />
            <ProductModel link='2' title='AI Solution vR6' description='An advanced AI model with human-like responses, exclusively available in the Business plan.' />
        </div>
    </Template>
  )
}

export default ProductModelsComponent