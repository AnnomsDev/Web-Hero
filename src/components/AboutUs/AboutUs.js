import './AboutUs.css'
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1 className='text-center my-5'>About Us</h1>
            <p>We Teaches thousand of students and help them to become propessional web developer. We teach modern web technology. </p>
            <h2 className='my-5'>Our Instrusctors </h2>
            <div className='d-flex text-center'>
                <div className='w-50 p-3 border rounded'>
                    <img height='150px' className='rounded-circle' src="https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg" alt="" />
                    <h4 className='mt-3'>Maximilian Schwarzmüller</h4>
                    <h5>Professional Web Developer and Instructor</h5>
                    <p>Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.</p>
                </div>
                <div className='w-50 p-3 border rounded'>
                    <img height='150px' className='rounded-circle' src="https://img-c.udemycdn.com/user/200_H/5487312_0554.jpg" alt="" />
                    <h4 className='mt-3'>Stephen Grider</h4>
                    <h5>Engineering Architect</h5>
                    <p>Stephen Grider has been building complex Javascript front ends for top corporations in the San Francisco Bay Area.  With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches on Udemy to share the knowledge he has gained with other software engineers.  Invest in yourself by learning from Stephen's published courses.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;