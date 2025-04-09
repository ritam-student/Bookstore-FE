import React, { useState , useEffect} from 'react'
import NewsCard from './newscard'




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';






const News = () => {

  const [news , setNews] = useState([]);


  useEffect(() => {
    fetch('news.json')
      .then(res => {
          return res.json()
      })
      .then((data) => {
          setNews(data)
      })
      .catch((e) => {
          console.log("error is : " , e);
      })
  } , [])





  return (
    <div className='py-16 px-4'>
      <h1 className='text-3xl font-semibold mb-16'>News</h1>
      <div>


      <Swiper 
            
            slidesPerView={1} 
            spaceBetween={30} 
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1180: {
                    slidesPerView: 2,
                    spaceBetween: 70,
                },
            }}
            modules={[ Navigation]}
            className="mySwiper"
            >
                {
                    news.length > 0 && news.map((item) => (
                        <SwiperSlide><NewsCard  key={item.id}  news={item} /></SwiperSlide>
                    ))
                }
                
            </Swiper>
      </div>
    </div>
  )
}

export default News