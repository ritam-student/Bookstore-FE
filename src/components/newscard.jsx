import React, { useState , useEffect} from 'react'
import {getNewsImg} from '../utils/getNewsImg'
import { Link } from 'react-router-dom'

const NewsCard = ({news}) => {
    

  return (
    <>
        <div className='flex space-x-4 py-4 px-2 flex-col sm:flex-row sm:justify-between items-center gap-12'>
            <div className='py-4 '>
                <Link to={"/"}><h1 className='text-lg font-medium mb-4 hover:text-blue-500'>{news.title}</h1></Link>
                <div className='w-[20%] h-[4px] bg-primary mb-4'></div>
                <p className='text-sm text-gray-500'>{news.description}</p>
            </div>
                    
            <div className='flex-shrink-0'>
                <img src={`${getNewsImg(news.image)}`} className='w-full object-cover '></img>
            </div>
        </div>
    </>
  )
}

export default NewsCard