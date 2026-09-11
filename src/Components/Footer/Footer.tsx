import React from 'react';

import Logo from "../../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-[#E5E7EB] bg-white">

            
            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">

                    
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">

                        <img
                            src={Logo}
                            alt="DevStack"
                            className="h-8"
                        />

                        <p className="max-w-lg text-[#64748B]">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        
                        <div className="flex gap-5 mt-2">

                            <a href="#" className="text-[#64748B] hover:text-[#D91B7E] transition"
                            >
                                Github
                            </a>

                            <a href="#" className="text-[#64748B] hover:text [#D91B7E] transition"
                            >
                                Twitter
                            </a>

                            <a href="#" className="text-[#64748B] hover:text-[#D91B7E] transition"
                            >
                                LinkedIn
                            </a>

                        </div>

                    </div>


                    
                    <div className="hidden md:block">

                        <h3 className="font-semibold mb-4">
                            Product
                        </h3>

                        <ul className="space-y-3 text-[#64748B]">

                            <li className="hover:text-[#D91B7E] cursor-pointer">
                                Home
                            </li>

                            <li className="hover:text-[#D91B7E] cursor-pointer">
                                Technologies
                            </li>

                            <li className="hover:text-[#D91B7E] cursor-pointer">
                                Projects
                            </li>

                        </ul>

                    </div>


                    
                    <div className="hidden md:block">

                        <h3 className="font-semibold mb-4">
                            Company
                        </h3>

                        <ul className="space-y-3 text-[#64748B]">

                            <li className="hover:text-[#D91B7E] cursor-pointer">
                                About
                            </li>

                            <li className="hover:text-[#D91B7E] cursor-pointer">
                                Contact
                            </li>

                            <li className="hover:text-[#D91B7E]cursor-pointer">
                                Careers
                            </li>

                        </ul>

                    </div>


                    
                    <div className="hidden md:block">

                        <h3 className="font-semibold mb-4">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-[#64748B]">

                            <li className="hover:text-[#D91B7E] cursor-pointer">
                                Privacy Policy
                            </li>

                            <li className="hover:text-[#D91B7E] cursor-pointer">
                                Terms of Services
                            </li>

                        </ul>

                    </div>

                </div>


                
                <div className="border-t border-[#E5E7EB] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#64748B]">

                    <p>
                        © 2026 DevStack. All rights reserved.
                    </p>

                    <div className="flex gap-5">

                        <a
                            href="#"
                            className="hover:text-[#D91B7E] transition"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="hover:text-[#D91B7E] transition"
                        >
                            Terms
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;