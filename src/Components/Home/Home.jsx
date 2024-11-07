import React from 'react';
import './home.css';
import rakimg from '../../assets/rakeshportfolio.png';


const Home = () => {
  return (
    <>
    <div className="container" id='home'>
    <div className="home-img">
        <div className='imgdiv'>
             <img className='rakimg' src={rakimg} alt="rakesh-img" />
        </div>
    </div>

        <div className="home-contents">
            <div className='contents'>
            <h1 className='name'>RAKESH <span className='loader'>. . .</span></h1>
            {/* <h2 className='surname'>SARAVANAN .</h2> */}
            <h3 className='designation'> <span className='pipe'>|</span> Enthusiastic Software Engineer </h3>
            <p className='quotes'>“I thrive in diverse environments, continually learning and adapting to new challenges with a growth mindset."”</p>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Home;