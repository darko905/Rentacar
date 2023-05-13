import React from 'react'
import Logo from '../images/logo/logo.png';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn} from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='footer section'>
      <div className="container">
        <div className="footer__content">
            <ul className="footer__content-1">
                <li>
                    <img src={Logo} alt="Logo" />
                </li>
                <li>
                    We offers a big range of vehicles for all your driving needs. We
                    have the perfect car to meet your needs.
                </li>
                <li>
                    NEWSLETTER
                </li>
                <li>
                    <p>Subscribe your Email address for latest news & updates.</p>
                </li>
                <li>
                    <input type="email" placeholder="Enter Email Address"/>
                </li>
                <li>
                    <button className="button">Submit</button>
                </li>

            </ul>
            <ul className="footer__content-2">
                <li>
                    Contact Info
                </li>
                <li>
                    Mon - Fri: 9:00AM - 9:00PM
                </li>
                <li>
                    Sat: 9:00AM - 19:00PM
                </li>
                <li>
                    Sun: Closed
                </li>
                <li>
                    <AiFillPhone className='footer__content-2_icons'/> (011) -222-111
                </li>
                <li>
                    <AiOutlineMail className='footer__content-2_icons'/> car@gmail.com
                </li>
                <li>
                    <MdLocationOn className='footer__content-2_icons'/> Street
                </li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
