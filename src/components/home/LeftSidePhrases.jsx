import React from 'react'
import { Link } from 'react-router-dom'
import './leftSidePhrase.css'

export default function LeftSidePhrases() {
    return (
        <div className='phrases-container'>
            <div className='title-section'>
                <span className='phrase-title'>show off your
                    <br />
                    arduino project</span>
            </div>
            <div className='desc-section'>
                <span > do you have a cool project you'd like to have
                    featured on our social media channels?<Link className='desc-link'>Share a tutorial</Link>
                    on the Arduino Project Hub!
                </span>
            </div>
            <div className='title-section'>
                <span className='phrase-title'>community</span>
            </div>
            <div className='desc-section'>
                <span>The ever-growing Arduino community is made up of everyone from hobbyists and students to designers and engineers all across the world. Have questions?
                    The official multi-language <Link className='desc-link'>Forum</Link> is the place
                    to go. Check out the <Link className='desc-link'>Playground</Link> for a collection
                    of Arduino knowledge, tutorials, and tips
                    provided by your fellow Arduino users. For information on the development of Arduino, see the <Link className='desc-link'>Arduino project on GitHub.</Link>
                </span>
            </div>
            <div className='title-section'>
                <span className='phrase-title'>talk to us</span>
            </div>
            <div className='desc-section'>
                <span> <Link className='desc-link'>Let us know</Link> if you have any comments or concerns..</span>
            </div>
        </div>
    )
}
