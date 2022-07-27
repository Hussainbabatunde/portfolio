import React, {useEffect} from "react";
import reactlogo from "./react.png";
import "./sec2.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import movie from "./movie.png";
import music from "./music.png";
import {FiLinkedin} from "react-icons/fi";
import {BsGithub} from "react-icons/bs";


const Section3= () => {
    const letters= "</Contact Me>"
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
        AOS.refresh();
      }, []);
    return(
        <div>
            <p style={{color: "#471111", fontSize:"30px", marginTop:"40px", textAlign:"center", marginBottom:"0"}}>MY SKILLS</p>
            <div className="sec3">
                <img src={reactlogo} alt="logo" data-aos="fade-right" />
                <img src={reactlogo} alt="logo" data-aos="fade-up"/>
                <img src={reactlogo} alt="logo" data-aos="fade-left"/>
            </div>
            <div className="sec3">
                <img src={reactlogo} alt="logo" data-aos="fade-up" />
                <img src={reactlogo} alt="logo" data-aos="fade-down"/>
                <img src={reactlogo} alt="logo" data-aos="fade-up"/>
            </div>
            <div className="sec4">
            <p style={{color: "#471111", fontSize:"30px", marginTop:"20px", textAlign:"center", marginBottom:"0", paddingTop:"40px"}} data-aos="fade-right">MY WORKS</p>
            <p style={{marginTop:"20px",textAlign:"center"}} data-aos="fade-right">Click on images to view website</p>
            <div className="movies">
            <a href="https://movie-streaming-app-f4013.web.app  "><img src={movie} width="400" height="300" alt="movie"/></a>
            <a href="https://ecommerce-website-90d14.web.app/home" style={{marginBottom:"50px"}}><img src={music} width="400" height="300" alt="music"/></a>
            </div>
            </div>
            <div>
            <p style={{color: "#471111", fontSize:"30px", marginTop:"40px", display:"flex", justifyContent:"flex-start", margin:"0 90px"}}>{letters}</p>
            <div className="sec5">
                <input type="text" placeholder="Name" className="sec5_input"/>
                <input type="email" placeholder="Email" className="sec5_input1"/>
                <div style={{display:"flex", marginTop:"30px"}}>
                <a href="https://www.linkedin.com/in/babatunde-hussain-9a1841134/"><p style={{fontSize:"25px", marginRight:"20px", color:"black"}}><FiLinkedin/></p></a>
                <a href=" https://github.com/Hussainbabatunde "><p style={{fontSize:"25px", color:"black"}}><BsGithub/></p></a>
            </div>
            </div>
            
            </div>
        </div>
    )
}

export default Section3;