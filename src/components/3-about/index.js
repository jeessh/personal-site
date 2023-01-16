import React, {useEffect, useState} from 'react';
import './aboutme.css';
import pic from '../../images/PFP3.png'
import RevealFade from 'react-reveal/Fade';

const About = () => {
        const [offsetY, setOffsetY] = useState(0);
        const handleScroll = () => setOffsetY(window.pageYOffset);
    
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
        
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    return (
    <div className='aboutContainer' id='about'>
        <RevealFade top>
        <h1 className='aboutTitle'>About Me</h1>
        </RevealFade>
        <div className='aboutInfoContainer'>
            <div className='column'>
                <h3 className='aboutSubtitle'>Hi-ya! <span className='wave'>👋</span> </h3>
                <p className='aboutText'>
                    My name's Jesse and I'm currently studying at the University of Waterloo for computer science.
                    <br/><br/>
                    Programming to me is poetry; it is open to everyone, but it takes perseverance and passion to make it a work of art.
                </p>
            </div>
            <div className='aboutPicContainer'>
                <img className='aboutPic' src={pic} alt='Profile'/>
                <div className='aboutPicBG1'/>
                <div className='aboutPicBG2'/>
            </div>
        </div>
        <div className='aboutParallaxBG'>
            <div className='aboutQuoteContainer' style={{transform: `translateY(${offsetY * 0.02}rem)`}}>
                <h2 className='aboutQuoteText'>A passion for creativity leads to exploration.</h2>
            </div>
        </div>
    </div>
    )
}

export default About;