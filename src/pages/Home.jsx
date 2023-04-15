import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Testimonials from '../components/Testimonial'
import BannerCTA from '../components/BannerCTA'
import Facilities from '../components/Facilities'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <div>
         {/* <Navbar /> */}
      <Banner />
      <Features/>
      
<Facilities />
      <Testimonials />
      <BannerCTA />
      <NewsLetter />
    </div>
  )
}

export default Home