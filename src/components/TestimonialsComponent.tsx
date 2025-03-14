import React from 'react'
import Template from './Template'
import HeadingTextComponent from '../screens/home/components/HeadingTextComponent'

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { HashNavigation, Navigation } from 'swiper/modules';


const TestimonialsComponent = () => {
  return (
    <Template classes='text-center py-[80px]'>
        <HeadingTextComponent content='What our clients say' />

        <div className='w-full mt-20'>

          <Swiper
              slidesPerView={2}
              spaceBetween={20}
              navigation={true}
              hashNavigation={{
                watchState: true,
              }}
              modules={[Navigation, HashNavigation]}
              breakpoints={{
                320: { slidesPerView: 1 },  // Mobile
                640: { slidesPerView: 2 },  // Tablets
              }}
              className="w-full h-[350px]"
          >
              <SwiperSlide className='w-[60%] h-full bg-zinc-100 rounded-[24px] text-center py-10 px-13 swiperSliderTestimonial flex-col items-center'>
                <img className='w-[80px] aspect-square bg-zinc-200 rounded-full mx-auto object-cover' src="/assets/images/jeny.jpg" alt="" />
                <p className='text-[13px] lg:text-[16px] mb-8 mt-8'>“AI Solution's API allowed us to build a chatbot that perfectly integrates into our existing platform. It's like it was made just for us!”</p>

                <small className='mt-auto'>- John D., CTO at InnovateTech</small>
              </SwiperSlide>
              <SwiperSlide className='w-[60%] h-full bg-zinc-100 rounded-[24px] text-center py-10 px-13 swiperSliderTestimonial flex-col items-center'>
              <img className='w-[80px] aspect-square bg-zinc-200 rounded-full mx-auto object-cover' src="/assets/images/jeny.jpg" alt="" />
                <p className='text-[13px] lg:text-[16px] mb-8 mt-8'>“AI Solution's API allowed us to build a chatbot that perfectly integrates into our existing platform. It's like it was made just for us!”</p>

                <small className='mt-auto'>- John D., CTO at InnovateTech</small>
              </SwiperSlide>
              <SwiperSlide className='w-[60%] h-full bg-zinc-100 rounded-[24px] text-center py-10 px-13 swiperSliderTestimonial flex-col items-center'>
                <img className='w-[80px] aspect-square bg-zinc-200 rounded-full mx-auto object-cover' src="/assets/images/jeny.jpg" alt="" />
                <p className='text-[13px] lg:text-[16px] mb-8 mt-8'>“AI Solution's API allowed us to build a chatbot that perfectly integrates into our existing platform. It's like it was made just for us!”</p>

                <small className='mt-auto'>- John D., CTO at InnovateTech</small>
              </SwiperSlide>
              <SwiperSlide className='w-[60%] h-full bg-zinc-100 rounded-[24px] text-center py-10 px-13 swiperSliderTestimonial flex-col items-center'>
                <img className='w-[80px] aspect-square bg-zinc-200 rounded-full mx-auto object-cover' src="/assets/images/jeny.jpg" alt="" />
                <p className='text-[13px] lg:text-[16px] mb-8 mt-8'>“AI Solution's API allowed us to build a chatbot that perfectly integrates into our existing platform. It's like it was made just for us!”</p>

                <small className='mt-auto'>- John D., CTO at InnovateTech</small>
              </SwiperSlide>
          </Swiper>
        </div>
    </Template>
  )
}

export default TestimonialsComponent