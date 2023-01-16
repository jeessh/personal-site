import React from 'react';
import './timeline.css';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiRoblox } from 'react-icons/si';
import { FiClock}  from 'react-icons/fi'

const Timeline = () => {
    return (
    <div className='timelineContainer' id='timeline'>
        <h1 className = "timelineTitle">
          <span/>
          My Journey in Programming
          <span/>        
        </h1> 
        <VerticalTimeline lineColor='rgb(244, 236, 218)'>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'September 2019 - January 2020'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Tech Course</h3>
                    <h4 className='timelineItemSubtitle'>TEJ2O1</h4>
                    <p className='timelineItemDescription'>Initially taken as an elective to complete diploma requirements, I found my first love (for technology) here!
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'October 2019 - June 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First STEM Club</h3>
                    <h4 className='timelineItemSubtitle'>FRC Robotics - Team 7735</h4>
                    <p className='timelineItemDescription'>
                        Legos were my favourite toy as a child, so it was only natural to start building robots! I also learned that Java
                        wasn't just the symbol on the Minecraft loading page. <br/> <br/>Who knew Java was a whole new language!
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'October 2019 - April 2020'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Project - Roblox</h3>
                    <h4 className='timelineItemSubtitle'>Port Royal UI & GFX</h4>
                    <p className='timelineItemDescription'>
                        Roblox was always my go-to in elementary, so it was only so long before I would start developing games. <br/> 
                        Pairing up with my online friend, we created an American Revolution roleplay game that gained over 27.1k visitors!
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'December 2019'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Tech Assignment</h3>
                    <h4 className='timelineItemSubtitle'>Arduino Rock-Paper-Scissors</h4>
                    <p className='timelineItemDescription'>
                        With courses come evaluation. It was my first introduction to C++ and although I struggled, I learned the most important fact about learning something new: <br/> <br/>
                        It's alright to ask for help.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'April 2020 - Present'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Beginning to Skip Rope</h3>
                    <h4 className='timelineItemSubtitle'>...And beginning to COVID</h4>
                    <p className='timelineItemDescription'> 
                    Although lockdowns inhibit most, it unlocked my motivation to diversify myself. In learning to skip rope, I not only learned to 
                    value the benefit of perseverance, but now also have a swag way to exercise! 💪
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'September 2020 - June 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Began Creating Roblox GFX Art</h3>
                    <p className='timelineItemDescription'>
                        Although my last sketch was in Gr. 9, my art career was not done just yet! <br/> <br/>

                        Working in Blender, this side career on Roblox helped me develop my creativity, and ability to meet project deadlines.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'July 2021 - July 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First CS Course</h3>
                    <h4 className='timelineItemSubtitle'>ICS3U</h4>
                    <p className='timelineItemDescription'>
                        Being in the IB Programme meant I couldn't take electives past Gr. 10. As such, I took Gr. 11 Computer Science in Summer School,
                        improving my Java proficiency and ending with a 97%.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'July 15, 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Created GitHub Account</h3>
                    <h4 className='timelineItemSubtitle'>github.com/jeessh</h4>
                    <p className='timelineItemDescription'>
                        The start to my portfolio and real start to development!
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'August 20 - 22, 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Hackathon</h3>
                    <h4 className='timelineItemSubtitle'>Hack The 6ix 2021</h4>
                    <p className='timelineItemDescription'>
                        It was time to test my newly acquired skills in Java to compete in a hackathon... <br/> <br/>

                        ...Or not. My group members and I didn't know where to get started and ended up just listening to workshops. At least I learned how to use my GitHub!
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'September 17 - 19, 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Another Hackathon!</h3>
                    <h4 className='timelineItemSubtitle'>Hack The North 2021</h4>
                    <p className='timelineItemDescription'>
                        What better way to handle failure than to try again! <br/><br/>
                        This time going in with random teammates, we decided to use languages and frameworks we never used before. Although we didn't win any prizes,
                        the experience was more than enough (on top of the free swag)!
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'March 19th, 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Public Script</h3>
                    <h4 className='timelineItemSubtitle'>Student Council Club Fair</h4>
                    <p className='timelineItemDescription'>
                        As the social affairs coordinator for my student council, I was tasked with running the fair. Although not my task, I believed in saving paper through online means.
                        <br/> Experimenting with Google Apps Script, I built a raffle system which was to be used by 1000+ attendees!
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'April 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Received first offer from U of Waterloo!</h3>
                    <h4 className='timelineItemSubtitle'>Honours Software Engineering</h4>
                    <p className='timelineItemDescription'> 
                        All of my dedication towards school and software culminated in my first offer to Waterloo! Although I did not accept the offer, I am forever grateful of that day
                        where it felt like my future was being built in front of my eyes.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'September 2nd, 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Day at Waterloo</h3>
                    <p className='timelineItemDescription'>
                        There's something surreal about beginning a new life. Like the start of high school, the first day was filled with joy, sadness, and uncertainty, but there was still always a sense of excitement.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'September 22, 2022 - Present'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Joined First Tech Group</h3>
                    <h4 className='timelineItemSubtitle'>Waterloo Aerial Robotics Group</h4>
                    <p className='timelineItemDescription'>
                        Most of the clubs joined in high school were for the community. As my first club solely dedicated to software development, it was my first experience to the new work environment and world.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'December 2022 - Present'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245, 241, 237)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Found My Main Coding Partners</h3>
                    <h4 className='timelineItemSubtitle'>From friends to partners-in-crime</h4>
                    <p className='timelineItemDescription'>
                        What started as three friends from high school doing a project is now a well-established group of developers harmoniously creating projects. 
                        <br/><br/>However, still friends more than anything!
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(197, 164, 86)', color: 'rgb(245, 241, 237)' }}
                icon={<FiClock />}
                />
        </VerticalTimeline>
        <h1 className = "timelineFooter">
          <span/>
          ...And more to come!
          <span/>        
        </h1> 
    </div>
    )
}

export default Timeline;