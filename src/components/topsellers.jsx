import React, { useEffect, useState } from 'react'
import BookCard from './bookcard';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';










const category = ["Choose a genre" , "Business" , "Fiction" , "Horror" , "Adventure"];

const Topsellers = () => {

    const [books , setBooks] = useState([]);
    const [choosedCategory , setChoosedCategory] = useState("Choose a genre");

    useEffect(() => {
        fetch('books.json')
            .then((res) => {

                if(! res.ok){
                    throw new Error('failed to fetch books.json...');
                }
                return res.json();
            })
            .then((data) => {

                setBooks(data);
            })
            .catch((error) => {
                console.log("error is : " , error);
            });
    } , []);

    const filteredBooks = choosedCategory === "Choose a genre" ? books : books.filter((item) => 
        item.category === choosedCategory.toLowerCase());

    
    

  return (
    <>

        <div className='py-10 px-4 mb-3'>
            <h2 className='text-3xl font-semibold mb-6'>TopSellers</h2>
            {/***   category filtering    */}
            <div className='mb-8 flex items-center'>
                <select name="category" id="category" onChange={(e) => setChoosedCategory(e.target.value)}  className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        category.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>

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
            className="mySwiper"
            >
                {
                    filteredBooks.length > 0 && filteredBooks.map((item) => (
                        <SwiperSlide><BookCard  key={item._id}  book={item} /></SwiperSlide>
                    ))
                }
                
            </Swiper>



            
        </div>
        
    </>
  )
}

export default Topsellers;