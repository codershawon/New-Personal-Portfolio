import React from 'react';

const About = () => {
    return (
        <div id='about' className="container">
            <div className="row">
                <div className="section-title text-2xl font-bold">
                    <h3>About Me</h3>
                </div>
            </div>
            <div className="row">
                <div className="about-content">
                    <div className="row">
                        <div className="about-text padd-15">
                            <p>I'm Shawon Barua, a front-end developer passionate about creating amazing web experiences. I focus on designing user-friendly websites with clean and organized code. Proficient in HTML, CSS, and JavaScript, I bring ideas to life by blending technical skills with creativity. Whether it's crafting attractive interfaces or optimizing performance, I pay great attention to detail for a flawless end result. Collaboration is key for me as I work closely with designers and stakeholders to turn concepts into functional and captivating websites. By staying up-to-date with the latest trends and technologies, I strive to deliver cutting-edge solutions. Let's collaborate and build a captivating online presence that leaves a lasting impact.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="personal-info padd-15">
                            <div className="row w-full">
                                <div className="info-item padd-15">
                                    <p>Name: <span>Shawon Barua</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Date Of Birth: <span>28th September, 2001</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Age: <span>22</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Address: <span>Nasirabad, Chittagong, Bangladesh</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Email: <span>shawonb500@gmail.com</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Education: <span>Diploma In Computer Engineering</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Institute: <span>Chittagong Polytechnic Institute</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Phone: <span>+8801868340362</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Nationality: <span>Bangladeshi</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Languages: <span>Bangla, English</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="buttons padd-15">
                            <a href="https://drive.google.com/file/d/1XLb_4gSmxqca1rk-JPOrhJfreaVOlkpx/view?usp=sharing" className="btn" target='_blank'>Download Resume</a>
                            <a href="#contact" className="btn hire-me">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
