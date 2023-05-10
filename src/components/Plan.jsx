import React from 'react'
import { FaCar, FaHeadset, FaCarSide } from "react-icons/fa";
const Plan = () => {
  return (
    <section className='section plan' id='plan'>
            <h2 className='section__title'>Plan your trip now</h2>
            <span className='section__subtitle'>Quick & easy car rental</span>

            <div className='plan__container container grid'>

                <div className='plan__content'>
                    
                        <div className='ico__circle-one'>
                            <FaCar className='plan__icons'/>
                        </div>
                        
                        <h3 className='plan__title'>Select Car</h3>
                    
                    <p className='plan__descritpion'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>

                <div className='plan__content'>
                    
                        <div className='ico__circle-two'>
                            <FaHeadset className='plan__icons'/>
                        </div>
                        
                        <h3 className='plan__title'>Contact Operator</h3>
                    
                    <p className='plan__descritpion'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>

                <div className='plan__content'>
                    
                        <div className='ico__circle-three'>
                            <FaCarSide className='plan__icons'/>
                        </div>
                        
                        <h3 className='plan__title'>Let's Drive</h3>
                    
                    <p className='plan__descritpion'>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>

            </div>
    </section>

  )
}

export default Plan
