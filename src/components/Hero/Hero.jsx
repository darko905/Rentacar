import React from 'react'
import BgCar from '../../images/hero/hero-bg.png'
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Hero = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
      <div className='home__conent'>
        <div className='home__data'>
                  <h3 className='home__subtitle'>Plan your trip now</h3>
                  <h1 className='home__title'>Save big with our <br/> car rental</h1>
                  <p className='home__description'>Rent the car of your dreams. Unbeatable prices, unlimited miles,<br/> flexible pick-up options and much more.</p>
                  
                  <div className='home__buttons'>
                      <button className='button button--flex home__button-ride'>Book ride <AiFillCheckCircle className='button-icons'/> </button>
                      <button className='button button--flex home__button-more'>Learn more <MdKeyboardArrowRight className='button-icons'/> </button>
                  </div>
              </div>
              
        </div>
        <div className='home__images'>
                  <img src={BgCar} alt="Car" className="home__img" />
                  <div className="home__triangle home__triangle-3"></div>
                  <div className="home__triangle home__triangle-2"></div>
                  <div className="home__triangle home__triangle-1"></div>
        </div> 
    </div>
</section>
  )
}

export default Hero
