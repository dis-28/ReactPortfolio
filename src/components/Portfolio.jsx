import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import '../assest/portfolio.css'



function Portfolio() {
   return (
      <div className="portfolioBox">
         <div className='projectsIntro'>Some of my key projects...</div>
         <div className="projectsBox">
            {portfolio.map(project => (
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

export default Portfolio;