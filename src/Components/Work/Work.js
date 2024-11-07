import React, { useEffect } from 'react';
import "./Work.css";
import Aos from 'aos';
import Images from './skillimg';

const Work = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='work-container' id='work'>
        <div className='work'>
           <h3 className='head' data-aos="fade-up" 
           >Hey! Here's Where I worked & <br/>My skills</h3>
        </div>
        <div className='workdetails' >
          <h3 className='companyname' data-aos="fade-up" >Syncfusion<span className='pipe2'>| </span>Software Engineer<span className='pipe2'>| </span>2months</h3>
        </div>
        <div className='workpoints'>
          <p className='points' data-aos="fade-up" >I had the opportunity to enhance my skills in C# development, progressing from fundamental to advanced concepts.<br/>
Explored Searching and Sorting Algorithms, as well as foundational Object-Oriented Programming (OOP)
concepts, including List, Stack, Queue, and Dictionary, along with their respective methods.<br/>
In terms of advanced OOP concepts, delved into Inheritance, polymorphism, Abstraction, and
encapsulation. <br/>
Additionally, gained practical experience by working on real-time console application projects such as College
Admission, E-commerce, Online Course Enrollment, and Online Library Management.
         </p>
        </div>
        <div className='workdetails' >
          <h3 className='companyname' data-aos="fade-up" >Avasoft<span className='pipe2'>| </span>Trainee Software Engineer<span className='pipe2'>| </span>5months</h3>
        </div>
        <div className='workpoints'>
          <p className='points' data-aos="fade-up" >Possessing expertise in Frontend development.<br/>
          Acquired skills in HTML, CSS, and JavaScript through practical usecases. Acquired knowledge in designing
          and executing validations using JavaScript.<br/>
         </p>
          <p>Proficiency in:</p>
        </div>

        <div className='myskills'>
          <img src={Images.html}  alt='' className='skill-logos'  data-aos="flip-up" />
          <img src={Images.css}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.javascript}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.react}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.nodejs}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.python}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.mysql}  alt='' className='skill-logos' data-aos="flip-up"/>
          <img src={Images.Csharp}  alt='' className='skill-logos' data-aos="flip-up"/>

        </div>
        
    </div>
  )
}

export default Work;