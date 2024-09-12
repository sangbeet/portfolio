import React from 'react'
import './About.css'
import profilepic from '../Components/Assets/propic.png'
const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
          <img src={profilepic} alt="" />
        </div>
        <div className="about-right">
          Hi Sangbeet Here .<p></p>
          Lorem 
            ipsum dolor, sit amet consectetur adipisicing
             elit. Nesciunt magnam itaque dolorem at sit
             voluptas delectus. Nam ipsum quidem nulla dolor 
             minima excepturi nesciunt velit aliquid? 
            Esse quis adipisci numquam.Lorem 
            ipsum dolor, sit amet consectetur adipisicing
             elit. Nesciunt magnam itaque dolorem at sit
             voluptas delectus. Nam ipsum quidem nulla dolor 
             minima excepturi nesciunt velit aliquid? 
            Esse quis adipisci numquam.
        </div>
      </div>
    </div>
  )
}

export default About
