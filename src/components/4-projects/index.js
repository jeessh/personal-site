import React from 'react';
import test from '../../documents/Beach.jpg'
import './projects.css';

const Projects = () => {
    return (
    <div className='projectsContainer' id='projects'>
        <h1 className='projectsTitle'>My Portfolio</h1>
        <div className='projectContainer'>
            <div className='projectText'>
                    <h3 className='projectTextHeader'>Image Classifier – CIFAR-10</h3>
                    <h4 className='projectTextSubheader'>January 2023</h4>
                    <p className='projectTextDescription'>Lorem IpsumLASKDJLAKSDKJAH ALSJDLAKSJDLAKJSDL  AKJSDLAKSJDLASKJDLAKSJDLASK JDLAKSJDLAKSDJAL 
                    SKDJALSKDJLkjLHKA KSJHALKSJHLAK JSHLAKJ SHLKAJSHLAKJSHLKAJHSLKJA HSLKAJHSLAKJHS</p>
                    <div className='projectButtonWrapper'>
                        <button className='projectButton'>View Code</button>
                        <button className='projectButton'>View Demo</button>
                    </div>
            </div>
            <div className='verticalLine'/>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                <h3 className='projectTextHeader'>Credictor</h3>
                <h4 className='projectTextSubheader'>December 2022</h4>
                <p className='projectTextDescription'>Lorem IpsumLASKDJLAKSDKJAHSKDjh</p>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                <h3 className='projectTextHeader'>Troki</h3>
                <h4 className='projectTextSubheader'>September 2021</h4>
                <p className='projectTextDescription'>Lorem IpsumLASKDJLAKSDKJAHSKDjh</p>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                <h3 className='projectTextHeader'>Google Form Raffle</h3>
                <h4 className='projectTextSubheader'>September 2021</h4>
                <p className='projectTextDescription'>Lorem IpsumLASKDJLAKSDKJAHSKDjh</p>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                <h3 className='projectTextHeader'>Stones</h3>
                <h4 className='projectTextSubheader'>July 2021</h4>
                <p className='projectTextDescription'>Lorem IpsumLASKDJLAKSDKJAHSKDjh</p>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                <h3 className='projectTextHeader'>Infinite Recharge</h3>
                <h4 className='projectTextSubheader'>March 2020</h4>
                <p className='projectTextDescription'>Lorem IpsumLASKDJLAKSDKJAHSKDjh</p>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                <h3 className='projectTextHeader'>VEX Robot</h3>
                <h4 className='projectTextSubheader'>January 2020</h4>
                <p className='projectTextDescription'>Lorem IpsumLASKDJLAKSDKJAHSKDjh</p>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                <h3 className='projectTextHeader'>Rock-Paper-Scissors!</h3>
                <h4 className='projectTextSubheader'>December 2019</h4>
                <p className='projectTextDescription'>Lorem IpsumLASKDJLAKSDKJAHSKDjh</p>
            </div>
         </div>
        <div className='transitionSegment'/>
    </div>
    )
}

export default Projects;