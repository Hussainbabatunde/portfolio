import React, {useEffect} from "react";
import reactlogo from "./react.png";
import html from "./html.png";
import java from "./java.png";
import css from "./css.png";
import python from "./python.png";
import typescript from "./typescript.png";
import "./sec2.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import movie from "./movies.png";
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
            <p style={{color: "#471111", fontSize:"24px", marginTop:"40px", textAlign:"center", marginBottom:"0"}}>MY SKILLS</p>
            <div className="sec3">
                <div data-aos="fade-up">
                <img src={html} alt="logo" />
                <p className="languages">HTML</p>
                </div>
                <div data-aos="fade-up">
                <img src={css} alt="logo"/>
                <p className="languages">CSS</p>
                </div>
                <div data-aos="fade-up">
                <img src={java} alt="logo"/>
                <p className="languages">JAVASCRIPT</p>
                </div>
            </div>
            <div className="sec3">
                <div data-aos="fade-up">
                <img src={reactlogo} alt="logo"  />
                <p className="languages">REACT</p>
                </div>
                <div data-aos="fade-up">
                <img src={typescript} alt="logo" />
                <p className="languages">TYPESCRIPT</p>
                </div>
                <div data-aos="fade-up">
                <img src={python} alt="logo" />
                <p className="languages">PYTHON</p>
                </div>
            </div>
            <div className="sec4">
            <p style={{color: "#471111", fontSize:"24px", marginTop:"20px", textAlign:"center", marginBottom:"0", paddingTop:"40px"}} data-aos="fade-right" id="works">MY WORK</p>
            <p style={{marginTop:"20px",textAlign:"center"}} data-aos="fade-right">Click on images to view website</p>
            <div className="movies">
            {/* <a href="https://movie-streaming-app-f4013.web.app  "><img src={movie} width="400" className="tundemovies2"  height="300" alt="movie"/></a>
            <a href="https://ecommerce-website-90d14.web.app/home" style={{marginBottom:"50px"}}><img src={music} className="tundemovies" width="400" height="300" alt="music"/></a> */}
            <a href="https://movie-streaming-app-f4013.web.app  " style={{textDecoration:"none"}}>
                <div class="boxthi">
                    <div class="hidden_boxthi">
                        <div className="description">
                        <p class="tranword">MOVIE STREAMING APP</p>
                        <p style={{color:"white"}}>A streaming app used for watching movie trailers or videos uploaded on youtube. Built using Reactjs and firebase.</p>
                        </div>
                    </div>
                </div></a>
                <a href="https://ecommerce-website-90d14.web.app/home " style={{textDecoration:"none"}}>
                <div class="boxthi1">
                    <div class="hidden_boxthi1">
                    <div className="description">
                        <p class="tranword">MUSIC STREAMING APP</p>
                        <p style={{color:"white"}}>An application where users can stream the songs on them. Built using Reactjs and firebase.</p>
                        </div>
                    </div>
                </div></a>
            </div>
            </div>
            <div>
            <p style={{color: "#471111", fontSize:"30px", marginTop:"40px", display:"flex", justifyContent:"flex-start", margin:"0 90px"}} id="contact">{letters}</p>
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