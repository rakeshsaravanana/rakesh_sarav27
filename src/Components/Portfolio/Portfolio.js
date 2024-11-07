import React, { useEffect } from 'react';
import './portfolio.css';
import sample from '../../assets/sample.png'
import Aos from 'aos';
const Portfolio = () => {
useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div className='portfolio-container' >
        <div className='port-img' id='portfolio'>
           
            <a href="https://rakeshsaravanana.github.io/vinayakaflourmill.../"><img src={sample} alt='sample' className='imgs'/></a>
        </div>
        <div className='port-content'>
            <p className='para'  data-aos="fade-down" data-aos-delay="100" >I created this website for my dad's business so that people can check out the prices of products, find the shop's location, and even leave reviews.<br/>
                I employed React.js, utilizing its Hook state and Hook effect concepts, to
                develop a concise website for my father's business.<br/>
                This website facilitates CRUD operations, ensuring smooth data
                management. Moreover, I implemented GitHub Actions to automate the
                synchronization of highlights whenever updates are made.
                The website is fully responsive and compatible with all devices.
            </p>
        </div>
    </div>
  )
}

export default Portfolio;