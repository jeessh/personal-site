import React, { useState, useEffect} from 'react';
import './intro.css';
import image1 from '../../images/introimg1.svg'
import image2 from '../../images/introimg2.svg'
import simpleParallax from 'simple-parallax-js';
import { IoChevronDown } from 'react-icons/io5'

const Intro = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='introContainer' id='intro'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap');
                </style>
                <img className='movingImage1 parallax' src={image1} style={{transform: `translateX(${offsetY * -0.5}px) translateY(${offsetY * 0.15}px)`}} alt='img1'/>
                <img className='movingImage2' src={image2} style={{transform: `translateX(${offsetY * 0.5}px) translateY(${offsetY * -0.15}px)`}} alt='img2'/>    
            <div className='introTextboxBG'>
                <div className='introTextbox'>
                    <h1>Jesse Huang</h1>
                    <div className='dashTextbox'>
                        <h1> </h1>
                    </div>
                    <p className='textboxp'>UW CS '27</p>
                </div>
            </div>
            <div className='indContainer'>
                <li className='indItem'>
                    <p1 className='indp bounce'>Scroll Down!</p1>
                </li>
                <li className='indItem'>
                    <IoChevronDown className='indIcon bounce2'/>
                </li>
            </div>
        </div>

    )


}

export default Intro;