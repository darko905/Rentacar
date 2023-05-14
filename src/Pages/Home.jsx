import React from 'react'
import Hero from '../components/Hero'
import BookCar from '../components/BookCar'
import Plan from '../components/Plan'
import PickCar from '../components/PickCar'
import Banner from '../components/Banner'
import Choose from '../components/Choose'
import Testominial from '../components/Testominial'
import Faq from '../components/Faq'
import Download from '../components/Download'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <BookCar/>
      <Plan/>
      <PickCar/>
      <Banner/>
      <Choose/>
      <Testominial/>
      <Faq/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default Home
