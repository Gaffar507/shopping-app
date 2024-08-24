import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Google from '@mui/icons-material/Google';
import Pinterest from '@mui/icons-material/Pinterest';
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <div className="wrapper">
        <div className="left">
            <span>Be in touch with us:</span>
        </div>

        <div className="center">
            <input type="email" name="email" id="email" placeholder='Enter your e-mail'/>
            <button>join us</button>
        </div>

        <div className="right">
            <Link to={''}><Facebook className='icon'/></Link>
            <Link to={''}><Instagram className='icon'/></Link>
            <Link to={''}><Twitter className='icon'/></Link>
            <Link to={''}><Google className='icon'/></Link>
            <Link to={''}><Pinterest className='icon'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
