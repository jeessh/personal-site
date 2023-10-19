/* eslint-disable no-restricted-globals */
import React from 'react';
import './navbar.css';
import { ImProfile } from 'react-icons/im'
import {Link as LinkS, animateScroll} from 'react-scroll'
import pdf from '../../documents/waterloo_resume_2023_1.pdf'


const Navbar = () => {

    const onResumeClick = () => {
        window.open(pdf);
      }

    const toggleHome = () => {
        animateScroll.scrollToTop();
      }
      
    window.addEventListener('scroll', atNavbar);
    function atNavbar(theDiv) {
        const rect = theDiv.getBoundingClientRect();

        if(rect.top === 0){ //edit this ***
            highlightMenu(theDiv);
        }}

    function highlightMenu(id) { //menu would be the id
        document.querySelector('.active').classList.remove('active');
        id.classList.add('active');
    }

    return (
        <nav className='nav'>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600&display=swap');
            </style>
        <div className='navbarContainer'>
            <div className='navbarLogo' onClick={toggleHome}>JeessH</div>
            <div className='navbarMobileIcon' onClick={onResumeClick}>
                <ImProfile/>
            </div>
            <div className='navbarMenu'>
                <li className='navbarItem'>
                    <LinkS className='navbarLink' to='about' 
                    smooth={true} duration={1000} spy={true} exact='true' offset={-1}>About</LinkS>
                </li>
                <li className='navbarItem'>
                <LinkS className='navbarLink' to='projects' 
                    smooth={true} duration={1000} spy={true} exact='true' offset={-1}>Projects</LinkS>
                </li>
                <li className='navbarItem'>
                <LinkS className='navbarLink' to='timeline' 
                    smooth={true} duration={1000} spy={true} exact='true' offset={-1}>Timeline</LinkS>
                </li>
                <li className='navbarItem'>
                    <div className='navbarResumeIcon' onClick={onResumeClick}>
                        <ImProfile/>
                    </div>
                </li>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;