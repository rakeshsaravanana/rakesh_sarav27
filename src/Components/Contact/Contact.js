import React, { useEffect,useRef} from 'react';
import './contact.css';
import Aos from 'aos';
import emailjs from "@emailjs/browser";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ytabl7r', 'template_2ktui16', form.current, {
        publicKey: '9XdaurPoU0IwUIy6j',
      })
      .then(
        (result) => {
          console.log(result.text)
          alert('Email Sent!');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
 
  
    
  
return (
    <div className='contact-container'>
        <div className='page'  data-aos="zoom-in-down" id='contact'>
           <form  className='form' ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder='Your name' className='names' name='name' />
              <input type="email"  placeholder='Your email' className='email' required name='email' />
              <textarea placeholder='Share your thoughts' className='textarea' name='message'></textarea>
              <input type='submit' className='form-btn' value="Submit" />
          </form>
        
        <a href='https://www.linkedin.com/in/rakesh-s-217b441a4' className='linkedin'><FontAwesomeIcon icon={faLinkedin} className='linkedin-icon'/>Let's Connect</a>

        </div>
    </div>
  )
}


export default Contact;