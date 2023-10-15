import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder",
      "Front-End Developer",
      "Web Developer",
      "Front-End React Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="home-section" id='home'>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 -ml-5">
            <h3 className="title-1 font-semibold">
              Hello, My name is <span className="name">Shawon Barua</span>
            </h3>
            <h3 className="title-2 font-semibold ">I'm  a <span className='animation-text'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="--text-black-900: #302e4d;"
          /></h3>
            <p className="description">Passionate front-end developer skilled in HTML, CSS, and JavaScript, specializing in creating captivating and responsive websites. Meticulous attention to detail ensures pixel-perfect designs, while a problem-solving mindset allows for innovative solutions. Stay up-to-date with the latest trends and technologies to deliver modern and cutting-edge web experiences. Let's collaborate to bring your ideas to life with creativity and expertise.</p>
            <a href="#about" className="btn hire-me">More About Me</a>
          </div>
          <div className="home-img padd-15">
            <img src="https://i.ibb.co/rcmqCLB/1688405365772.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
