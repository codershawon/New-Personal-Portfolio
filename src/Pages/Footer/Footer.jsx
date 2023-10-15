import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[--bg-black-900: #f2f2fc;] text-white relative py-8 sm:py-16 rounded" style={{
      backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)",
      backgroundSize: "100% auto", // Adjust the background size
      backgroundRepeat: "repeat-x", // Repeat the image along the x-axis
      backgroundPosition: "bottom", // Position the image at the bottom
    }}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-[--skin-color] mb-4">Shawon Barua</h1>
          <nav className="mb-4 text-[--text-black-900] flex flex-wrap justify-center font-semibold">
            <a href="#about" className="mr-4 mb-2 sm:mb-0">
              About
            </a>
            <a href="#skills" className="mr-4 mb-2 sm:mb-0">
              Skills
            </a>
            <a href="#features" className="mr-4 mb-2 sm:mb-0">
              Features
            </a>
            <a href="#projects" className="mr-4 mb-2 sm:mb-0">
              Projects
            </a>
            <a href="#contact" className="mr-4 mb-2 sm:mb-0">
              Contact
            </a>
          </nav>
          <div className="flex items-center justify-center mb-4">
            <a href="#" target="display" className="mr-4 text-[--text-black-900] hover:text-[--skin-color]">
              <FaFacebook className='h-7 w-7'/>
            </a>
            <a href="#" target="display" className="mr-4 text-[--text-black-900]  hover:text-[--skin-color]">
              <FaTwitter className='h-7 w-7'/>
            </a>
            <a href="#" target="display" className="mr-4 text-[--text-black-900]  hover:text-[--skin-color]">
              <FaLinkedin className='h-7 w-7'/>
            </a>
            <a href="#" target="display" className="mr-4 text-[--text-black-900]  hover:text-[--skin-color]">
              <FaInstagram className='h-7 w-7'/>
            </a>
          </div>
          <p className="text-sm text-[--text-black-700] mt-2 font-medium">&copy; 2023 Shawon Barua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








