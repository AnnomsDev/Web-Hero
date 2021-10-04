import './Hero.css'
import React from 'react';
import programmingImg from '../../img/programming.jpg'
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero d-flex ">
            <div className="left w-50 d-flex flex-column justify-content-center my-5">
                <h2>Start your Journey to become a Propessional Web Developer</h2>
                <p>Learn web development in professional way from our great web developers from all over the world.</p>
                <div className='my-3'>
                <NavLink className='hero-btn-primary fw-bold w-100' to='/sign-up'>Get Started</NavLink>
                </div>
            </div>
            <div className="right w-50 d-flex flex-column justify-content-center">
                <div>
                    <img src={programmingImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;