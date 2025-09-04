import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function BannerSwiper() {
  return (
    <div style={{ maxWidth: "800px" , margin:"0 auto"}}>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        loop={true}
        style={{height:"500px"}}        
      >
        {
            ["특가이벤트","구독이벤트","할인이벤트","자동롤링해줘","3초마다","2개씩보이게해줘"].map((v, i)=>{
                return <SwiperSlide key={i} className='border'>{v}</SwiperSlide>
            })
        }
    </Swiper>

    </div>
    
  )
}
