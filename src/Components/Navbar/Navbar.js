import React from 'react';
import { Component } from 'react';
import './navbar.css';
import resume from '../../assets/rakesh.resume.pdf';




class Navbar extends Component{
  state={clicked:false};
  handleclick=()=>{
  this.setState({clicked:!this.state.clicked})
  }
  render(){
    
    return (
      <>
      <nav>
          <a href='#home' id='logo' data-aos="fade-right" >S R K .</a> 
  
          <ul id='navbar' className={this.state.clicked ? '#navbar active' :'#navbar'}>
              <li><a href='#home' className='active icon'>Home</a></li>
              <li><a href='#about' className='icon'>About</a></li>
              <li><a href='#work' className='icon'>Work</a></li>
              <li><a href='#portfolio' className='icon'>Portfolio</a></li>
              <li><a href='#contact' className='icon'>Contact</a></li>

             <a href={resume} className='resume' >Resume</a>
         </ul>
         <div id='mobile' onClick={this.handleclick}>
          <i id='bar' className={this.state.clicked?"fas fa-times" : "fas fa-bars"}></i>
        </div>
       </nav>
  </>
    )

  }
  
}

export default Navbar;