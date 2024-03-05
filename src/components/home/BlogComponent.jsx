import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogComponent({ card }) {
    return (
        <div className="blog-content">
            <Link className='post-blog-click'>
                <div className='blog-container'>
                    <img src={card.url} alt="" />
                    <h5 className='blog'>BLOG</h5>
                </div>
                <h2 id='title'>{card?.title}</h2>
            </Link>
        </div>
    )
}
