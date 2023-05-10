import React, { useEffect, useState } from 'react'
import {carData} from './data'; 
import {carNav} from './data';
import CarBoxItem from './CarBoxItem';

const CarBox = () => {
    const [item, setItem] = useState({name:'golf6'});
    const [cars, setCars] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(()=>{
        const newCars = carData.filter((car)=>{
            return car.category.toLowerCase() === item.name
        })
        setCars(newCars);
    },[item])

    const handleClick = (e, index) =>{
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(index);
    }
    
  return (


    <div className='car'>
        <div className='car__filters container'>
            {carNav.map((item,index)=>{
                return (
                    <span onClick={(e)=>{
                        handleClick(e,index)
                    }} className={`${active === index ? 'active-car': ''} car__item`} key={index}>{item.name}</span>
                )
            })}
        </div>

        <div className='car__container container grid'>
            {cars.map((item)=>{
                return(
                    <CarBoxItem item={item} key={item.id}/>
                )
            })}
        </div>
    </div>
  )
}

export default CarBox
