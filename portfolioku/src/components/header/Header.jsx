import React from 'react';
import { Container } from 'reactstrap';

import './header.css';

const navLinks = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Portfolio',
        url: '#portfolio'
    },
    {
        display: 'Contact',
        url: '#contact'
    },
]

const Header = () => {
  return <header className='header'>
    <Container>
        <div className='navigation d-flex align-items-center justify-content-between'>
            <div className='Logo'>
                <h5>HanArt</h5>
            </div>

            <div className='nav-menu'>
                <ul className='nav-list'>
                {
                    navLinks.map((item,index) => <li className='nav-item' key={index}>
                        {/* Mendapatkan Link Web */}
                        <a href={item.url}>{item.display}</a>   
                    </li>)
                }
                </ul>
            </div>

            <div className='nav-right d-flex align-items-center gap-5'>
                {/* <button className='btn'>Let's Talk</button> */}
                <span className='mobile-menu'><i class="ri-menu-line"></i></span>
            </div>
        </div>
    </Container>
  </header>
}

export default Header;