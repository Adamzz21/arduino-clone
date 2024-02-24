import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogComponent({ card }) {
    return (
        <div className="blog-content">
            <Link>
                <a className='post-blog-click'>
                    <img src={card.url} alt="" />
                    <h2 id='title'>{card?.title}</h2>
                </a>
            </Link>
        </div>
    )
}
