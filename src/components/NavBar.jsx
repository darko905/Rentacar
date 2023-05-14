import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Logo from '../images/logo/logo.png';


const NavBar = () => {
    window.addEventListener('scroll', function(){
        const header = this.document.querySelector('.header');

        if(this.scrollY >= 80) {
            header.classList.add('scroll-header')
        }
        else{
            header.classList.remove('scroll-header');
        }
    })

    const [Toogle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');
  return (
    <header className='header'>
            <nav className='nav container'>
                <a href='#home' className='nav__logo'>
                    <img src={Logo} alt="Logo" className='nav__logo-img'/>
                </a>

                <div className={Toogle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className='nav__list '>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <Link to='/' onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                Home 
                            </Link>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <Link to='/about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                About
                            </Link>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <Link to='/models' onClick={() => setActiveNav('#models')} className={activeNav === "#models" ? "nav__link active-link" : "nav__link"}>
                                Vehicle Models
                            </Link>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#testominials' onClick={() => setActiveNav('#testominials')} className={activeNav === "#testominials" ? "nav__link active-link" : "nav__link"}>
                                Testominials
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#team' onClick={() => setActiveNav('#team')} className={activeNav === "#team" ? "nav__link active-link" : "nav__link"}>
                                Our Team
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                Contact
                            </a>
                        </li>
                    </ul>

                    
                    
                    <MdClose className="nav__close" onClick={()=> showMenu(!Toogle)}/>
                    
                </div>
                <div className={Toogle ? "nav__menu": "nav__menu"}>
                    <button className='button nav__button__sign-in'>Sing In</button>
                    <button className='button nav__button__register'>Register</button>
                </div>

                <div className='nav__toggle' onClick={()=> showMenu(!Toogle)}>
                    <FaBars/>
                </div>
            </nav>
        </header>
  )
}

export default NavBar
