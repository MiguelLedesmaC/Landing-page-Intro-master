import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import hamburguer from '../assets/images/icon-hamburger.svg';
import hamburguerClose from '../assets/images/icon-close.svg';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Functions
    const openMenu = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false);  
    }
  return (
    <header className='w-full p-8 text-gray mb-11  '>
        
        <div className='flex items-center justify-between w-full mb-12 '>
           <img src= {logo} alt="logo" />
           <img onClick={openMenu} className='cursor-pointer lg:hidden' src={`${isOpen ? hamburguerClose : hamburguer  }`} alt="image hamburguer" />
           <nav className='hidden lg:flex gap-7 items-center w-full uppercase font-bold '>
                <ul className='flex justify-end gap-6 text-VeryDarkBlue w-full '>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
                <span className='w-[.5rem] h-2 bg-LightGrayishBlue rounded-full' ></span>
                <button className='text-GrayishBlue border-GrayishBlue font-bold btn-login'>
                    Login
                </button>
            </nav> 
           <nav className={`${!isOpen ? 'hidden': 'block'} lg:hidden absolute top-24 bg-white ml-[5%] w-[80%] p-7 text-center shadow-lg shadow-DarkGrayishBlue-500/50`} >
            <ul className='flex flex-col items-center gap-6  uppercase font-bold text-VeryDarkBlue text-xl'>
                <li><a href="#product">product</a></li>
                <li><a href="#features">features</a></li>
                <li><a href="#pricing"> pricing</a></li>
                <hr className='text-GrayishBlue w-full' />
                <button className='text-GrayishBlue border-GrayishBlue font-bold btn-login'>
                    Login
                </button>
            </ul>
            </nav>
            
        </div>
       

       
        
    </header>
  )
}

export default Header