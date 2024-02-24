import React from 'react'
import PosterComponent from './PosterComponent'
import HomePageCards from '../constant/HomePageCard'
import BlogComponent from './BlogComponent'
import './rightSide.css';

export default function RightSide() {
    return (
        <div className='right-side-container'>
            <div className='right-side-content'>
                {HomePageCards.map((card) => card.type === 'blog' ?
                    <BlogComponent card={card} />
                    :
                    <PosterComponent card={card} />
                )}
            </div>
        </div>
    )
}
