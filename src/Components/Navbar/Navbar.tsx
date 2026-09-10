import React from 'react';
import Logo from "../../assets/logo-text.png"

const Navbar = () => {
    return (
        <nav className="bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
            <img src={Logo} alt="logo image" className='h-10'/>
            
            
            <ul className="flex gap-4 text-[#475569]">
            
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                
                    
            </ul>

            <div className="flex items-center gap-4">
                <p className='px-6 py-2 text-[#475569]'>SignIn</p>
                <button className="bg-[#D91B7E] px-6 py-2 rounded-full text-center items-center text-white">SignUp</button>
            </div>
            </div>
            </nav>
        
    );
};

export default Navbar;