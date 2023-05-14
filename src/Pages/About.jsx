import React from 'react'
import HeroPages from '../components/HeroPages'
import AboutMain from '../images/about/about-bg.jpg';
import Plan from '../components/Plan';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { FaCarSide } from 'react-icons/fa';
import { GiHomeGarage } from 'react-icons/gi';
import { MdGarage } from 'react-icons/md';


const About = () => {
  return (
    <section className='section about' id='about'>
      <HeroPages name="About"/>
      <div className="container">
        <h2 className='section__title-text'>About Company</h2>

        <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              
              <div className="about-main__text__icons">

                  <div className="about-main__text__icons__box">
                    <FaCarSide className='icon'/>
                    <span>
                      <h4>15</h4>
                      <p>Car Types</p>
                    </span>
                  </div>
  
                  <div className="about-main__text__icons__box">
                    <MdGarage className='icon'/>
                    <span>
                      <h4>70</h4>
                      <p>Rental Outlets</p>
                    </span>
                  </div>
                  <div className="about-main__text__icons__box">
                    <GiHomeGarage className='icon'/>
                    <span>
                      <h4>50</h4>
                      <p>Repair Shop</p>
                    </span>
                  </div>

              </div>
            </div>
          </div>
      </div>

      <Plan/>
      <Banner/>
      <Footer/>
      
    </section>
  )
}

export default About
