import React from 'react';
import Title from './Title';
import '../assest/contact.css'

function Contact() {
   return (
      <div className="contactMain">
         <div className='contactHeader'>
            <div className='above'>What's next?</div>
            <div className='below'>Let's Connect</div>
         </div>
         <div className="formsGroup">
            <form
               action="https://formspree.io/f/xvojggrq"
               method="POST"
               className="formBox"
            >
               <div className='inputGroup'>
                  <input
                     type="text"
                     name="name"
                     placeholder="Name"
                     className="nameInput"
                     id='name'
                     required
                  />
               </div>


               <div className='inputGroup'>
                  <input
                     type="text"
                     name="email"
                     placeholder="Email"
                     className="emailInput"
                     id='email'
                     required
                  />
               </div>
               <div className='inputGroup'>
                  <textarea
                     name="message"
                     placeholder="Message"
                     rows="10"
                     className="textInput"
                     id='text'
                     required
                  />
               </div>

               <button className="buttonInput">
                  Submit
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;