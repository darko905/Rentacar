import React from 'react'

const CarBoxItem = ({item}) => {
  return (
    <div className='car__card container' key={item.id}>
    <img src={item.img} alt={item.title} className='car__img'/>

    <div className="pick-description">
            <div className="pick-description__price">
              <span>${item.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{item.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Mark</span>
                <span>{item.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Year</span>
                <span>{item.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Doors</span>
                <span>{item.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>AC</span>
                <span>{item.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Transmission</span>
                <span>{item.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Fuel</span>
                <span>{item.fuel}</span>
              </div>
            </div>
            
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>

</div>
  )
}

export default CarBoxItem
