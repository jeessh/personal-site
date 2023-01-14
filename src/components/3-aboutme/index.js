import React from 'react';
import './aboutme.css';
import pic from '../../documents/andydog.png'

const About = () => {
    return (
    <div className='aboutContainer' id='about'>
        <h1 className='aboutTitle'>About Me</h1>
        <div className='aboutInfoContainer'>
            <div className='aboutText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor convallis lobortis. Sed pulvinar ipsum non orci blandit cursus. Fusce sed tincidunt nunc, vel ullamcorper mauris.</div>
            <div className='aboutPicContainer'>
                <img className='aboutPic' src={pic} alt='Profile'/>
                <div className='aboutPicBG1'/>
                <div className='aboutPicBG2'/>
            </div>
        </div>
    </div>
    )
}

export default About;