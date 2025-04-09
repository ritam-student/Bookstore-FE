import React, { useEffect, useState } from 'react'
import BookCard from './bookcard';





// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';





const Recomended = () => {

    const[books , setBooks] = useState([]);

    useEffect(()=> {
        fetch('/books.json')
        .then((res) => {
            console.log("res is : " , res);
            return res.json()
        })
        .then((data) => {
            console.log("data is : ",data)
            setBooks(data)
        }).catch((e)=> {
            console.log("error is : " , e);
        })
    }, [])

    


  return (
    <div className='py-16 px-4 '>
        <div >
            <h1 className='text-3xl font-semibold mb-6'>Recomended for you</h1>
        </div>
        <div>
            {


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
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                }}
                modules={[ Navigation]}
                className="mySwiper">
                    {
                        books.length > 0 && books.splice(5,7).map((item) => (
                            <SwiperSlide><BookCard  key={item._id}  book={item} /></SwiperSlide>
                        ))
                    }
    
                </Swiper>
            }
        </div>
    </div>
  )
}

export default Recomended