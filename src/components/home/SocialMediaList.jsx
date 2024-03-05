import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './socialMediaList.css'

export default function SocialMediaList() {
    return (
        <div className='social-media-wrapper'>
            <ul className='media-list'>
                <li> <XIcon /> <span>on X</span></li>
                <li> <FacebookIcon /><span>on Facebook</span> </li>
                <li> <YouTubeIcon /> <span>on Youtube</span></li>
                <li> <InstagramIcon /><span>on Instagram</span> </li>
                <li> <LinkedInIcon /> <span>on Linkedin</span></li>
                <li> <GitHubIcon /> <span>on Github</span></li>
            </ul>

        </div>
    )
}
