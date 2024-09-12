import React from 'react'
import './Contact.css'
import './Tubelight.css'
import insta from './Assets/instagram.png'
import face from './Assets/facebook.png'
import linked from './Assets/linkedin.png'

const Contact = () => {
  return (
    <div className='contact-area'>
        <div className='link-area'>
        <h1 className='header' >CONTACT ME</h1>
        <img src={linked} alt=""/>
        <img src={face} alt="" />
        <img src={insta} alt="" />
        
        </div>
        <div className='contact'>
        <form action=''>
            <input type="" placeholder='Enter Your name' />
            <input type='email' placeholder='Enter Your email' />
            <textarea name='' id='' cols={40} rows={10} placeholder='Enter your message'/>
            <input type='submit' value="submit" className='send'/>
        </form>
        </div>
    </div>
  )
}

export default Contact
