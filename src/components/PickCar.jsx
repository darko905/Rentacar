import React from 'react'
import CarBox from './CarBox'

const PickCar = () => {
  return (
    <section className="section pick" id="pick">
        <h2 className="section__title">Vehicle Models</h2>
        <span className="section__subtitle">Our rental fleet</span>
        
        <CarBox/>
    </section>
  )
}

export default PickCar
