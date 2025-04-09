import React from 'react'
import Banner from '../components/banner';
import Topsellers from '../components/topsellers';
import Recomended from '../components/recomended';
import News from '../components/news';

const Home = () => {
  return (
    <div>
        <Banner/>
        <Topsellers/>
        <Recomended/>
        <News/>
    </div>
  )
}

export default Home;