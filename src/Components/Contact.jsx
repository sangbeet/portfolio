import React from 'react'
import './Contact.css'
import './Tubelight.css'
const Contact = () => {
  return (
    <div className='contact-area' id='contact'>
        <h1 className='header' >CONTACT ME</h1>
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
