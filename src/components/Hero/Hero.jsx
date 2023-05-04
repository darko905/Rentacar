import React from 'react'
import BgCar from '../../images/hero/hero-bg.png'


const Hero = () => {
  return (
    <section className='home section' id='home'>
    <div className='home__container container '>
        <div className='home__content '>
        
            <div className='home__data'>
                
                <h1 className='home__title'>Save big with our car rental</h1>
                <h3 className='home__subtitle'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</h3>
                
        
                <a href="#book"><button className='button button-flex'>Book ride</button></a>
                <a href="#more"><button className='button button-flex'>Learn more</button></a>
            </div>
            <div className='home__images'>
                <img src={BgCar} alt="Car" className="home__img" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero
