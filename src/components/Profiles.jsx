import React from 'react';
import profiles from '../data/profiles';
import PortfolioItem from './PortfolioItem';
import '../assest/profiles.css'



function Profiles() {
    return (
        <div className="profileBox">
            <div className='projectsIntro'>My Profiles</div>
            <div className="projectsBox">
                {profiles.map(project => (
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        dis={project.dis}
                    />
                ))}
            </div>
        </div>
    )
}

export default Profiles;