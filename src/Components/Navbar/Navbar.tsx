import React from 'react';
import Logo from "../../assets/logo-text.png";
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-2">


                <div className="md:hidden grid grid-cols-3 justify-center items-center">

                    
                    <div className="flex justify-start">
                        <button className="text-2xl text-[#475569]">
                            <HiMenu />
                        </button>
                    </div>

                    
                    <div className="flex justify-center">
                        <img
                            src={Logo}
                            alt="logo"
                            className="h-10"
                        />
                    </div>

                    
                    <div className="flex justify-end items-center gap-1 sm:gap-2">
                        <button className="text-xs sm:text-sm text-[#475569] whitespace-nowrap px-1">
                            Sign In
                        </button>

                        <button className="bg-[#D91B7E] px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm text-white whitespace-nowrap">
                            Sign Up
                        </button>
                    </div>

                </div>


                
                <div className="hidden md:flex items-center justify-between">

                    
                    <div>
                        <img
                            src={Logo}
                            alt="logo"
                            className="h-10"
                        />
                    </div>

                 
                    <ul className="flex gap-6 text-[#475569]">
                        <li className="cursor-pointer hover:text-[#D91B7E]">
                            Home
                        </li>

                        <li className="cursor-pointer hover:text-[#D91B7E]">
                            Technologies
                        </li>

                        <li className="cursor-pointer hover:text-[#D91B7E]">
                            Projects
                        </li>

                        <li className="cursor-pointer hover:text-[#D91B7E]">
                            About
                        </li>

                        <li className="cursor-pointer hover:text-[#D91B7E]">
                            Contact
                        </li>
                    </ul>

                    
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 text-[#475569]">
                            Sign In
                        </button>

                        <button className="bg-[#D91B7E] px-6 py-2 rounded-full text-white">
                            Sign Up
                        </button>
                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;

