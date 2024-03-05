import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './footer.css'
import { Link } from 'react-router-dom';
const handleScrollUpButton = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export default function Footer() {
  return (
    <div className='footer-section'>
      <div className='footer-header'>
        <div className='footer-header-left'>
          <h2>arduino</h2>
        </div>
        <div className='footer-header-right' onClick={handleScrollUpButton}>
          <ArrowCircleUpIcon />
          Back to top
        </div>
      </div>
      <div className='footer-body'>
        <div className='body-father'>
          <div className='body-menu1'>
            <a >Trademark</a>
            <a >Contact Us</a>
            <a >Distributors</a>
            <a >Careers</a>
          </div>
          <div className='body-menu2'>
            <a >Help center</a>
            <a >Whistleblowing</a>
          </div>
        </div>
        <div className='body-mid'>
          <div className='title'>
            <h4 id='newsletter-label'>
              NEWSLETTER
            </h4>
          </div>
          <div className='wrapper'>
            <input type="email" name="email" id="email" placeholder='Enter your email to sign up' />
            <button type='submit' >subscribe</button>
          </div>

        </div>
        <div className='body-links'>
          <div className='follow'>
            <h4>follow us</h4>
          </div>
          <div className='icons'>
            <a>
              <FacebookIcon />
            </a>
            <a>
              <InstagramIcon />
            </a>
            <a>
              <XIcon />
            </a>
            <a>
              <GitHubIcon />
            </a>
            <a>
              <LinkedInIcon />
            </a>
            <a>
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bot'>
        <div className='footer-bot-left'>
          <a>© {new Date().getFullYear()} Arduino</a>
        </div>
        <div className='footer-bot-mid'>
          <a>Terms Of Service</a>
          <a>Privacy Policy</a>
          <a>Security</a>
          <a>Cookie Settings</a>
        </div>
      </div>
    </div>
  )
}
