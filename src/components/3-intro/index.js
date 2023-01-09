import React from 'react';
import './intro.css';
import image1 from '../../images/introimg1.svg'
import image2 from '../../images/introimg2.svg'
import SimpleParallax from 'simple-parallax-js';

const Intro = () => {
    const img1 = document.getElementsByClassName('movingImage1');
    new SimpleParallax(img1, {
        orientation: 'left',
        scale: 2,
        overflow: true,
        delay: 1
    });
    const img2 = document.getElementsByClassName('movingImage2');
    new SimpleParallax(img2, {
        orientation: 'right',
        scale: 2,
        overflow: true,
        delay: 1
    });

    return (
        <div className='introContainer' id='intro'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap');
                </style>
                <img className='movingImage1' src={image1} alt='img1'/>
                <img className='movingImage2' src={image2} alt='img2'/>    
            <div className='introTextboxBG'>
                <div className='introTextbox'>
                    <h1>Jesse Huang</h1>
                    <div className='dashTextbox'>
                        <h1> </h1>
                    </div>
                    <p>UW CS '27</p>
                </div>
            </div>
        </div>

    )


}

export default Intro;