import React from 'react';
import '../assest/intro.css'
function Intro() {
   return (
      <div className="introbox">
         <div className='introSubBox'>
            <p className='greetText'>Hi my name is,</p>
            <h1 className="introName">Siddharth Kashyap</h1>
            <p className="roleIntro">I build things for the web</p>
            <p className='roleDes'>I am a Pre-final Year student at IIT Guwahati and a</p>
            <p className='roleDes'>Full Stack Developer with a passion for creating innovative and user-friendly web applications.</p>
            <a className='resumeButton' href='https://drive.google.com/file/d/1_jYFmm3ziCUiFEQbkisHuTqAwyh8x1m_/view?usp=drive_link' target='_blank'>Resume</a>
         </div>

      </div>
   )
}

export default Intro;