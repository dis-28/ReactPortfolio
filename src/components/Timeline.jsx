import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';
import '../assest/timeline.css'


function Timeline() {
   return (
      <div className="timlineMain">
         <div className="w-full md:w-7/12">
            <Title>Timeline</Title>
            {timeline.map(item => (
               <TimelineItem
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;