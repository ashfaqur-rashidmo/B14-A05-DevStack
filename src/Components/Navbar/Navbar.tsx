
import React from 'react';
import Logo from "../../assets/logo-text.png";
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">

                
                <div className="lg:hidden grid grid-cols-[auto_1fr_auto] items-center">

                   
                    <div className="flex justify-start">
                        <button
                            type="button"
                            className="text-xl sm:text-2xl text-[#475569] p-1"
                        >
                            <HiMenu />
                        </button>
                    </div>

                    
                    <div className="flex justify-center min-w-0">
                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className="h-7 xs:h-8 sm:h-10 w-auto object-contain"
                        />
                    </div>

                    
                    <div className="flex justify-end items-center gap-1 sm:gap-2">

                        <button
                            type="button"
                            className="text-[11px] sm:text-sm text-[#475569] whitespace-nowrap px-1 sm:px-2"
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            className="bg-[#D91B7E] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-sm text-white whitespace-nowrap"
                        >
                            Sign Up
                        </button>

                    </div>
                </div>


                
                <div className="hidden lg:flex items-center justify-between">

                    
                    <div className="flex-shrink-0">
                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className="h-10 w-auto"
                        />
                    </div>

                    
                    <ul className="flex items-center gap-5 xl:gap-6 text-[#475569]">

                        <li className="cursor-pointer text-[#D91B7E]">
                            Home
                        </li>

                        <li className="cursor-pointer hover:text-[#D91B7E] transition-colors">
                            Technologies
                        </li>

                        <li className="cursor-pointer hover:text-[#D91B7E] transition-colors">
                            Projects
                        </li>

                        <li className="cursor-pointer hover:text-[#D91B7E] transition-colors">
                            About
                        </li>

                        <li className="cursor-pointer hover:text-[#D91B7E] transition-colors">
                            Contact
                        </li>

                    </ul>

                   
                    <div className="flex items-center gap-2 xl:gap-4 flex-shrink-0">

                        <button
                            type="button"
                            className="px-3 xl:px-4 py-2 text-[#475569] whitespace-nowrap"
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            className="bg-[#D91B7E] px-4 xl:px-6 py-2 rounded-full text-white whitespace-nowrap"
                        >
                            Sign Up
                        </button>

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;