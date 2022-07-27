import Typewriter from 'typewriter-effect';
import "./sec1.css";
import laptopfront from "./laptopfront.png";


const Section1 = () => {
    const word= "<hI>"
    return(<div className='sec1'>
        <div className='sec1_words'>
            <h1 className='fontusage'>{word}</h1>
            <h1 className='fontusage'><Typewriter
  options={{
    strings: ['I am Babatunde Hussain.'],
    autoStart: true,
    loop: true
  }}
/>
</h1>
<p className='tunde_summary'>Experienced web developer working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. Well-versed in design standards and user preferences.</p>
        </div>
        <img src={laptopfront} className="sec1_img" alt="side image"/>
        </div>
    )
}

export default Section1;