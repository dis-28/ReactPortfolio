import React from 'react';
import '../assest/portfolio.css'

function PortfolioItem({ title, imgUrl, stack, link, dis }) {
   return (
      <a className='projectItem' href={link}>
         <div className='projectTitleGroup'>
            <div className='projectTitle'>{title}</div>
            <img src={imgUrl} className='projectIcon'></img>
         </div>
         <div className='projectDis'>{dis}</div>
         <div className='projectStacks'>
            {stack && stack.map((items) => (<span className='techStack'>{items}</span>))}
            {/* {stack} */}
         </div>


      </a>

   )
}

export default PortfolioItem;