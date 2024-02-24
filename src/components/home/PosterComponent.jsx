import React from 'react'

export default function PosterComponent({ card }) {
    return (
        <div className="post-content">
            <a className='post-blog-click'>
                <img src={card.url} alt="" style={{ width: '100%', height: '100%' }} />
            </a>
        </div>
    )
}
