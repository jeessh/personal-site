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
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Tech Course</h3>
                    <h4 className='timelineItemSubtitle'>TEJ2O1</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'October 2019 - June 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First STEM Club</h3>
                    <h4 className='timelineItemSubtitle'>FRC Robotics - Team 7735</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'October 2019 - April 2020'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Project - Roblox</h3>
                    <h4 className='timelineItemSubtitle'>Port Royal UI & GFX</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'December 2019'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Tech Assignment</h3>
                    <h4 className='timelineItemSubtitle'>Arduino Rock-Paper-Scissors</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'April 2020 - Present'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Beginning to Skip Rope</h3>
                    <h4 className='timelineItemSubtitle'>...And beginning to COVID</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'September 2020 - June 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Began Creating Roblox GFX Art</h3>
                    <p className='timelineItemDescription'>My art career was not done just yet! 
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'April 2021 - June 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Appointed into Student Council</h3>
                    <h4 className='timelineItemSubtitle'>MMHS SAC</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'July 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First CS Course</h3>
                    <h4 className='timelineItemSubtitle'>ICS3U</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'July 15, 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Created GitHub Account</h3>
                    <h4 className='timelineItemSubtitle'>github.com/jeessh</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'August 20 - 22, 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Hackathon</h3>
                    <h4 className='timelineItemSubtitle'>Hack The 6ix 2021</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= ' August 25 - October 29, 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Enrolled in Python Course - MITx</h3>
                    <h4 className='timelineItemSubtitle'>Introduction to Computer Science and Programming Using Python</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'September 17 - 19, 2021'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Another Hackathon!</h3>
                    <h4 className='timelineItemSubtitle'>Hack The North 2021</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'March 19th, 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Public Script</h3>
                    <h4 className='timelineItemSubtitle'>Student Council Club Fair</h4>
                    <p className='timelineItemDescription'>cum
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'April 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Received first offer from U of Waterloo!</h3>
                    <h4 className='timelineItemSubtitle'>Honours Software Engineering</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'July, 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Began My First Website</h3>
                    <h4 className='timelineItemSubtitle'>Not this one though!</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'September 2nd, 2022'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>First Day at Waterloo</h3>
                    <h4 className='timelineItemSubtitle'>Spoopy</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'September 22, 2022 - Present'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Joined First Tech Group</h3>
                    <h4 className='timelineItemSubtitle'>Waterloo Aerial Robotics Group</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'December 2022 - Present'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Found My Main Coding Partners</h3>
                    <h4 className='timelineItemSubtitle'>From friends to partners-in-crime</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'January 14, 2023'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Finished My Website 2.0</h3>
                    <h4 className='timelineItemSubtitle'>This one!</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(197, 164, 86)', color: 'rgb(245,245,245)' }}
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