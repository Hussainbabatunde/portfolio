import React, {useEffect} from "react";
import "./sec2.css"
import face from "./face.png";
import AOS from "aos";
import "aos/dist/aos.css";


const Section2 = () => {
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
        <div className="sec2" >
            <div style={{width:"90%"}} className="sec2_whole">
            <div  className="tundeimg" data-aos="fade-right">
            <span className="sec2_empty"></span>
            <img src={face} width="200" className="sec2_img" alt="tunde face"/>
            </div>
            <div style={{width:"500px"}}  className="aboutme" data-aos="fade-left">
                <p style={{color: "#471111", fontSize:"30px", marginTop:"40px"}} id="about">ABOUT ME</p>
                <p className="about_words">Babatunde Hussain is a graduate from the department of Electrical/Electronics Engineering from the University of Lagos. I am a frontend web developer experienced in building successful websites that meet customer needs. I am hoping to be a fullstack web developer and mobile developer.</p>
                <p  className="about_words" style={{ marginBottom:"80px"}}>Babatunde is an experienced frontend web developer proficient in the use of HTML, CSS, Javascript, Python, React and Typescript. Well-versed in design standards and user preferences. Experienced in handling complex design and extensions using frontend library and frameworks to meet organization's front-facing internet needs.</p>
            </div>
            </div>
        </div>
    )
}

export default Section2;