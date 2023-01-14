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
                date= 'October 2019 - January 2020'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Port Royal UI & GFX</h3>
                    <h4 className='timelineItemSubtitle'>First project - Roblox</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'Lorem ipsum dolor sit amet'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Lorem ipsum dolor sit amet</h3>
                    <h4 className='timelineItemSubtitle'>Lorem ipsum dolor sit amet</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'Lorem ipsum dolor sit amet'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Lorem ipsum dolor sit amet</h3>
                    <h4 className='timelineItemSubtitle'>Lorem ipsum dolor sit amet</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'Lorem ipsum dolor sit amet'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Lorem ipsum dolor sit amet</h3>
                    <h4 className='timelineItemSubtitle'>Lorem ipsum dolor sit amet</h4>
                    <p className='timelineItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris elit. Nullam vel nulla pretium, feugiat lacus eget, porttitor leo. In vehicula maximus convallis. 
                    Aliquam erat volutpat. Nunc turpis neque, elementum vitae euismod nec, eleifend sit amet mi. Aliquam aliquam, dui a dignissim lobortis, lacus ligula lacinia sem, sed.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='timelineItem'
                contentStyle={{background: 'rgb(244, 236, 218)', color: 'rgb(244, 236, 218)', boxShadow: '0 -1vh 0 rgb(219, 194, 148)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(244, 236, 218)' }}
                dateClassName='timelineItemDate'
                date= 'Lorem ipsum dolor sit amet'
                iconStyle={{ background: 'rgb(211, 176, 94)', color: 'rgb(245,245,245)' }}
                icon={<SiRoblox />}
                >
                    <h3 className='timelineItemTitle'>Lorem ipsum dolor sit amet</h3>
                    <h4 className='timelineItemSubtitle'>Lorem ipsum dolor sit amet</h4>
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