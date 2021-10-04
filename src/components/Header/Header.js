import './Header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const selected={
        fontWeight: 700
    }
    return (
        <div className='Header d-flex my-3 align-items-center'>
            <h3 className='me-auto logo'>WebHero</h3>
            <nav className=''>
                <NavLink activeStyle={selected} to='/home'>Home</NavLink>
                <NavLink activeStyle={selected} to='/services'>Services</NavLink>
                <NavLink activeStyle={selected} to='/about'>About Us</NavLink>
                <NavLink className='hero-btn-secondary' activeStyle={selected} to='/sign-in'>Sign In</NavLink>
                <NavLink className='hero-btn-primary' activeStyle={selected} to='/sign-up'>Sign Up</NavLink>


            </nav>
        </div>
    );
};

export default Header;