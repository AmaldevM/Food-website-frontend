import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/assets/FlaveMe.png'; 

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false); 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
      
        <div className="flex justify-center items-center py-3 sm:py-4 shadow-lg sticky top-0 left-0 bg-black z-10 gap-3">

                <button onClick={toggleMenu} className="sm:hidden text-white">
                    ☰
                </button>

            <div className="container flex justify-between items-center w-[95%]">
                <Link to={"/"}>
                    <div className="logo transition-transform duration-200 ease-in-out hover:scale-[1.10]">
                        <img src={logo} className="w-[80px] sm:w-[100px]" alt="Logo" />
                    </div>
                </Link>

                <ul className={`flex flex-col sm:flex-row ${isOpen ? 'block' : 'hidden'} sm:flex font-semibold gap-10 sm:gap-16 cursor-pointer text-white`}>
                    <Link to={"/restaurant"} aria-label="View Restaurants">
                        <div className='transform duration-200 ease-in-out hover:scale-[1.10]'>Restaurants</div>
                    </Link>
                    <Link to={"/"} aria-label="Why Choose Us?">
                        <div className='transform duration-200 ease-in-out hover:scale-[1.10]'>Why Choose Us?</div>
                    </Link>
                    <Link to={"/contactus"} aria-label="Contact Us">
                        <div className='transform duration-200 ease-in-out hover:scale-[1.10]'>Contact Us</div>
                    </Link>
                </ul>
                
                <Link to="/signup">
                    <button className="inline-flex items-center justify-center rounded-xl bg-amber-500 py-3 px-6 font-dm text-base font-medium text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.15]">
                        Join Us
                    </button>
                </Link>
            </div>
        </div>
    );
}
