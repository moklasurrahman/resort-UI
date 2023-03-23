import React from 'react'
import Carousels from '../../components/carousel/Carousel'
import Footer from '../../components/footer\'/Footer';
import HeroSection from '../../components/heroSection/HeroSection'
import Main from '../../components/main/Main'
import Comment from './../../components/customerFeedback/comment';


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Main/>
        <Carousels/>
        <Comment/>
        <Footer/>
    </div>
  )
}

export default Home