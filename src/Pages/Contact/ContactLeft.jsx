import Lottie from 'lottie-react';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import contactUsAnimation from "./Contact.json";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-[815px]  px-4 py-6 md:py-10  rounded-lg flex flex-col gap-8 justify-center bg-gradient-to-r from-[--bg-black-100] to-[--bg-black-900] group hover:bg-gradient-to-b hover:from-[--bg-black-50] hover:to-[--bg-black-900] transition-colors duration-100 group">
      {/* <img
        className="w-full h-80 object-cover rounded-lg mb-2"
        src="https://i.ibb.co/qBGmLfs/contact-Img.png"
        alt="contactImg"
      /> */}
      <Lottie
              className="w-full h-96 object-cover rounded-lg"
              animationData={contactUsAnimation}
            />
          {/* </div> */}
      
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold  text-[--text-black-900]">Shawon Barua</h3>
        <p className="font-semibold contact-text">
          Front-End Developer
        </p>
        <p className="font-semibold contact-text tracking-wide">
          Let's talk about how I can help you grow your business. I appreciate any kind of suggestions or feedback.
        </p>
        <p className="font-semibold contact-text flex items-center gap-2 w-full">
          Phone: <span className="personal-info">+8801868340362</span>
        </p>
        <p className="font-semibold contact-text flex items-center gap-2 ">
          Email: <span className="personal-info">shawonb500@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold contact-text uppercase mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="w-16 h-16 bg-[--text-black-900] text-[--bg-black-100] bg-opacity-2 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[--skin-color] cursor-pointer duration-300">
            <a href="https://www.facebook.com/profile.php?id=100078624861319" target='_blank'><FaFacebookF /></a>
          </span>
          <span className="w-16 h-16 bg-[--text-black-900] text-[--bg-black-100] bg-opacity-2 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[--skin-color] cursor-pointer duration-300">
            <a href="https://twitter.com/_s_h_a_w_o_n_" target='_blank'><FaTwitter /></a>
          </span>
          <span className="w-16 h-16 bg-[--text-black-900] text-[--bg-black-100] bg-opacity-2 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[--skin-color] cursor-pointer duration-300">
            <a href="https://www.linkedin.com/in/shawon-barua-87186023b" target='_blank'><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
