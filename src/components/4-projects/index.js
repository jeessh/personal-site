/* eslint-disable react/jsx-no-target-blank */
import React, {useState, useEffect}from 'react';
import cifar from '../../images/cifar.webp'
import credictor from '../../images/credictor.png'
import googleform from '../../images/googleform.png'
import troki from '../../images/troki.png'
import stones from '../../images/stones.png'
import infRecharge from '../../images/inf-recharge.png'
import vex from '../../images/vex.png'
import rps from '../../images/RPS.png'
import './projects.css';

const Projects = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <div className='projectsContainer' id='projects'>
        <h1 className='projectsTitle'>My Portfolio</h1>
        <div className='projectContainer'>
            <div className='projectText'>
                    <h3 className='projectTextHeader'>Credictor</h3>
                    <h4 className='projectTextSubheader'>Personal Group Project</h4>
                    <p className='projectTextDescription'>
                        Credictor aims to streamline the credit card approval process and improve the overall user experience. Creating a REST API using Flask, I integrated the
                        front-end and back-end.
                    </p>
                    <div className='projectButtonWrapper'>
                        <a href='https://github.com/jeessh/Credictor' target='_blank'>
                            <button className='projectButton'>View Code</button>
                        </a>
                    </div>
            </div>
            <div className='verticalLine'/>
            <div className='projectWrapper'>
                <div className='imageOverlay'>
                    <img className='projectImage' src={credictor} alt='credictor'/>
                </div>
                <h4 className='projectDate'>December 2022 - January 2023</h4>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                    <h3 className='projectTextHeader'>Image Classifier – CIFAR-10</h3>
                    <h4 className='projectTextSubheader'>Waterloo Aerial Robotics Group</h4>
                    <p className='projectTextDescription'>
                        As part of the Computer Vision Bootcamp for WARG, I was tasked with creating a model to classify various images into categories.
                        Creating a CNN using Python and Pytorch, I was able to achieve 81% accuracy with my model.         
                    </p>
                    <div className='projectButtonWrapper'>
                        <a href='https://github.com/jeessh/computer-vision-bootcamp' target="_black">
                            <button className='projectButton'>View Code</button>
                        </a>
                    </div>
            </div>
            <div className='verticalLine'/>
            <div className='projectWrapper'>
                <div className='imageOverlay'>
                    <img className='projectImage' src={cifar} alt='cifar'/>
                </div>
                <h4 className='projectDate'>December 2022 - January 2023</h4>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                <h3 className='projectTextHeader'>Google Form Raffle</h3>
                <h4 className='projectTextSubheader'>Student Council Club Fair</h4>
                <p className='projectTextDescription'>
                    To increase attendees and reduce waste that would be created by regular raffle tickets, I used Google Apps to create a google form script. 
                    For every correct answer that is inputted (answer given by booths), the user obtains a new entry.
                    </p>
                 <div className='projectButtonWrapper'>
                    <a href='https://github.com/jeessh/Google-Form-Raffle-Entries' target='_blank'>
                        <button className='projectButton'>View Code</button>
                    </a>
                </div>
            </div>
            <div className='verticalLine'/>
            <div className='projectWrapper'>
                <div className='imageOverlay'>
                    <img className='projectImage' src={googleform} alt='google form'/>
                </div>
                <h4 className='projectDate'>October 2021</h4>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                    <h3 className='projectTextHeader'>Troki</h3>
                    <h4 className='projectTextSubheader'>Hack The North 2021</h4>
                    <p className='projectTextDescription'>
                        As my first hackathon project, Troki was built as an app-based platform connecting nearby, eager teens with neighbours in need of yard work.
                        Using a MERN stack I focused on establishing a solid back-end for job listings, authentication and distance gauging with Google Maps API, while lightly assisting with front-end.
                    </p>
                    <div className='projectButtonWrapper'>
                        <a href='https://github.com/itsvitaliio/troki' target='_blank'>
                            <button className='projectButton'>View Code</button>
                        </a>                       
                        <a href='https://devpost.com/software/troki' target="_blank">
                            <button className='projectButton'>View Project</button>
                        </a>
                    </div>
            </div>
            <div className='verticalLine'/>
            <div className='projectWrapper'>
                <div className='imageOverlay'>
                    <img className='projectImage' src={troki} alt='troki'/>
                </div>
                <h4 className='projectDate'>September 2021</h4>
            </div> 
  </div>
        <div className='projectContainer'>
            <div className='projectText'>
                    <h3 className='projectTextHeader'>Stones</h3>
                    <h4 className='projectTextSubheader'>ICS3U Culminating Project</h4>
                    <p className='projectTextDescription'>
                        A spin-off of rock-paper-scissors, this game pits two players against each other, with the most strategic one coming out on top. 
                        Built using pure Java, I received a 100 on the project, finishing with a 97 in my UCS3U course. 
                    </p>
                    <div className='projectButtonWrapper'>
                        <a href='https://github.com/jeessh/Stones' target='_blank'>
                            <button className='projectButton'>View Code</button>
                        </a>
                    </div>
            </div>
            <div className='verticalLine'/>
            <div className='projectWrapper'>
                <div className='imageOverlay'>
                    <img className='projectImage' src={stones} alt='stones'/>
                </div>
                <h4 className='projectDate'>July 2021</h4>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                    <h3 className='projectTextHeader'>Infinite Recharge 2020</h3>
                    <h4 className='projectTextSubheader'>FRC - Team 7735</h4>
                    <p className='projectTextDescription'>In preparation of the 2020 FRC competition, I worked on coding my highschool team's robot. Made using Java and FRC Robotics Library, our team eventually reached the quarterfinals of the competition.</p>
                    <div className='projectButtonWrapper'>
                        <a href='https://github.com/jeessh/INFINITE-RECHARGE-2020' target='_blank'>
                            <button className='projectButton'>View Code</button>
                        </a>
                        <a href='https://www.instagram.com/p/B9NY36Ag8RW/' target='_blank'>
                            <button className='projectButton'>View Demo</button>
                        </a>
                    </div>
            </div>
            <div className='verticalLine'/>
            <div className='projectWrapper'>
                <div className='imageOverlay'>
                    <img className='projectImage' src={infRecharge} alt='infinite recharge'/>
                    </div>
                <h4 className='projectDate'>March 2020</h4>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                    <h3 className='projectTextHeader'>VEX Robotics</h3>
                    <h4 className='projectTextSubheader'>TEJ2O1 Culminating Project</h4>
                    <p className='projectTextDescription'>
                        My first tech course culminated in my group building, coding, and testing our own robot through VEX. 
                        Utilizing sensors, motors, touch LEDs, and coded using VEXCode blocks, the robot must gather 3 cubes and place them in designated locations.
                    </p>
                    <div className='projectButtonWrapper'>
                        <a href='https://github.com/jeessh/VEX-Robotics-Project' target='_blank'>
                            <button className='projectButton'>View Code</button>
                        </a>
                        <a href='https://drive.google.com/file/d/1219-0cY95P4yH9oPZZUrALUEfj1e-D9q/view' target='_blank'>
                            <button className='projectButton'>View Demo</button>    
                        </a>
                    </div>
            </div>
            <div className='verticalLine'/>
            <div className='projectWrapper'>
                <div className='imageOverlay'>
                    <img className='projectImage' src={vex} alt='vex'/>
                </div>
                <h4 className='projectDate'>January 2020</h4>
            </div>
        </div>
        <div className='projectContainer'>
            <div className='projectText'>
                    <h3 className='projectTextHeader'>Rock-Paper-Scissors</h3>
                    <h4 className='projectTextSubheader'>TEJ2O1 - Software & Hardware</h4>
                    <p className='projectTextDescription'>
                        Built using an Arduino UNO CPU and scripted using C++, the interactive game includes LEDs, buttons, and an LED screen to enhance the
                        experience of the classic game.
                    </p>
                    <div className='projectButtonWrapper'>
                        <a href='https://github.com/jeessh/Arduino-RockPaperScissors'>
                            <button className='projectButton'>View Code</button>
                        </a>
                        <a href='https://youtu.be/QWMto8dLqMc' target='_blank'>
                            <button className='projectButton'>View Demo</button>
                        </a>
                    </div>
            </div>
            <div className='verticalLine'/>
            <div className='projectWrapper'>
                <div className='imageOverlay'>
                    <img className='projectImage' src={rps} alt='rps'/>
                </div>
                <h4 className='projectDate'>December 2020</h4>
            </div>
        </div>
        <div className='transitionSegment'>
            <h2 className='transitionText' style={{transform: `translateY(${offsetY * 0.0125}rem)`}}>And with every milestone, there lies a story...</h2>
            <div className='transitionTextBorders' style={{transform: `translateY(${offsetY * 0.0175}rem) translateX(${offsetY * 0.005}rem)`}}/>
        </div>
    </div>
    )
}

export default Projects;