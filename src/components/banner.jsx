import React from 'react'
import BannerImg from "../assets/banner.png"

const Banner = () => {
  return (
    <>
        <div className='sm:flex md:flex-row-reverse py-16 px-4 justify-between gap-12 items-center'>

            {/**   for images at right side    */}
            <div className='md:w-1/2 w-full flex items-center md:justify-end' >
                <img src={BannerImg}></img>
            </div>

            {/**     for text at left side   */}
            <div className='md:w-1/2 w-full my-4'>
                <h1 className='text-2xl md:text-5xl font-medium mb-7'>New Releases This Week</h1>
                <p className='mb-10 '>It's time to upgrade your reading list with some of the latest & greatest releases in the literary world.</p>
                <button className='btn-primary'>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default Banner;

