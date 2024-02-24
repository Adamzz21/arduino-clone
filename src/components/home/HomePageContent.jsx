import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import './homePage.css'

export default function HomePageContent() {
    return (
        <div className='home-page-parent'>
            <div className='home-page-wrapper'>
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}
