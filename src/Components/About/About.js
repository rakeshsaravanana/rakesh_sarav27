import React, { useEffect } from 'react';
import './about.css';
import Aos from 'aos';
// import Moreaboutme from './Moreaboutme';


const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className='about-container'  id='about' >
       <div className='abt-content' data-aos="fade-up"> 
          <p className='abt-text'>"Welcome to <span className='highlight'>Rakesh's digital domain</span>, where creativity meets functionality, and innovation intertwines with design. As a Frontend Web developer dedicated to crafting meaningful and captivating digital experiences, I invite you to explore my portfolio, a curated collection of my passion and expertise. Join me on a journey through pixels and code, where each project is a testament to my commitment to delivering not just websites, but immersive and memorable online narratives. Let's transform ideas into interactive realities – together."
          </p>
       </div>

       <div className='button' data-aos="flip-right">
        <a href='#portfolio' className='btnlink'><button className='btn'>View My work</button> </a>
       </div>
    </div>
  )
}

export default About;
