import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import Credits from "./Components/Footer/Credits";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Work/> 
      <Portfolio/> 
      <Contact/>
      <Footer/>
      <Credits/>
    </div>
  );
}

export default App;

