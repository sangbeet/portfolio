import React from 'react'
import './About.css'
import profilepic from '../Components/Assets/propic.png'
import insta from './Assets/instagram.png'
import face from './Assets/facebook.png'
import linked from './Assets/linkedin.png'
import git from './Assets/github.png'
const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
          <img src={profilepic} alt="" />
          <div className='icon'>
            <img src={linked} alt=""/>
            <img src={face} alt="" />
            <img src={insta} alt="" />
            <img src={git} alt="" />
          </div>
        </div>
        <div className="about-right">
          Hi Sangbeet Here .<p></p>
              Welcome to my portfolio! This is a showcase of my work and skills as a web developer,
              featuring a collection of projects that highlight my expertise in various technologies
              and development practices.
              <p></p>
              My portfolio is designed to provide a comprehensive view of my capabilities 
              and the range of projects I've worked on. It includes interactive web applications,
              dynamic UI components, and other examples of my work that demonstrate my proficiency
              in web development.
              <p></p>
              Each project is presented with detailed descriptions, 
              showcasing the technologies used, the challenges faced, and the solutions
              implemented.
        </div>
      </div>
    </div>
  )
}

export default About
