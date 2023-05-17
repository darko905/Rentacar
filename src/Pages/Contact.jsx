import React from 'react'
import HeroPage from '../components/HeroPages';
import { AiOutlineMail, AiOutlinePhone, AiOutlineSend } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <section className='section'>
      <HeroPage name="Contact"/>
      <div className='contact__container container'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Need additional information?</h3>
                    <p className='contact__description'>A multifaceted professional skilled in multiple fields  of research, development as well as a learning specialist. Over 15 years of experience.</p>

                    <div className='contact__info'>
                        <div className='contact__card'><i className='bx bx-mail-send '></i>
                            <AiOutlineMail className='contact__card-icon'/>

                            <h3 className='contact__card-title'>E-mail address:</h3>
                            <span className='contact__card-data'>car@gmail.com</span>

                        </div>

                        <div className='contact__card'>
                            <AiOutlinePhone className='contact__card-icon'/>

                            <h3 className='contact__card-title'>Phone number:</h3>
                            <span className='contact__card-data'>(011) -222-111</span>

                        </div>

                        <div className='contact__card'>
                            <HiOutlineLocationMarker className='contact__card-icon'/>

                            <h3 className='contact__card-title'>Postall address:</h3>
                            <span className='contact__card-data'>Street</span>

                        </div>
                    </div>
                </div>
                <div className='contact__content'>
                    <h3 className='contact__title'>Say Hello</h3>

                    <form className='contact__form'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Full Name</label>
                            <input 
                            type="text" 
                            name='name' 
                            className='contact__form-input' 
                            placeholder='E.g: "Lisia Edestaj"'/>
                        </div>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Mail</label>
                            <input 
                            type="email" 
                            name='email' 
                            className='contact__form-input' 
                            placeholder='youremail@gmail.com'/>
                        </div>
                        <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag'>Message</label>
                            <textarea 
                            name='message' 
                            cols="30" 
                            rows="10"
                            className='contact__form-input' 
                            placeholder='Write Here...'
                            ></textarea>
                        </div>
                        <button className='button button-flex'>Send Message <AiOutlineSend/></button>

                    </form>
                </div>
            </div>
    </section>
  )
}

export default Contact
