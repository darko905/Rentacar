import React from 'react'
import HeroPages from '../components/HeroPages';
import Testominial from '../components/Testominial';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const TestominialPage = () => {
  return (
    <section className='section testominial'>
      <HeroPages name="Testominials"/>
      <div className="container">
        <Testominial/>
      </div>
        <Banner/>
        <Footer/>
    </section>
  )
}

export default TestominialPage
