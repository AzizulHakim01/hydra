// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { data } from '../../data';

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className=''><img src="/1.png" alt="" className='object-cover w-full h-[600px]'/><p className='absolute text-8xl top-12 left-40 text-white'>Hello World</p></SwiperSlide>
      <SwiperSlide><img src="/2.png" alt="" className='object-cover w-full h-[600px]'/></SwiperSlide>
      <SwiperSlide><img src="/3.png" alt="" className='object-cover w-full h-[600px]'/></SwiperSlide>
      <SwiperSlide><img src="/4.png" alt="" className='object-cover w-full h-[600px]'/></SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
