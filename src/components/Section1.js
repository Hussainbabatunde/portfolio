import Typewriter from 'typewriter-effect';
import "./sec1.css";
import laptopfront from "./laptopfront.png";
import tunde from "./current_tunde.pdf"


const Section1 = () => {
    const word= "<hI>"
    return(<div className='sec1'>
        <div className='sec1_words'>
            <h1 className='fontusage'>{word}</h1>
            <h1 className='fontusage'><Typewriter
  options={{
    strings: [" Hi! ",'I am Babatunde Hussain.'],
    autoStart: true,
    loop: true
  }}
/>
</h1>
<p className='tunde_summary'>Experienced frontend web developer working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. Well-versed in design standards and user preferences.</p>
<a href={tunde} className="resume">View Resume</a>
        </div>
        <img src={laptopfront} className="sec1_img" alt="side image"/>
        </div>
    )
}

export default Section1;