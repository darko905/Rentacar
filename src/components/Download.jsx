import React from 'react'
import Img1 from '../images/download/googleapp.svg';
import Img2 from '../images/download/appstore.svg';
import Bg from '../images/download/bg.png';

const Download = () => {
  return (
    <section className='section download container'>
        <div className="download__content">
        
            <div className="download__left">
                <div className="download__text">
                    <h2>Download our app to get most out of it</h2>
                    <p>
                    Thrown shy denote ten ladies though ask saw. Or by to he going
                    think order event music. Incommode so intention defective at
                    convinced. Led income months itself and houses you.
                    </p>
                <div className="download__btns">
                    <img alt="download_img" src={Img2} />
                    <img alt="download_img" src={Img1} />
                </div>
            </div>
            </div>
            <div className="download__right">
                <img src={Bg} alt="Phone" />
            </div>
        </div>
      

    </section>
  )
}

export default Download
