import React from 'react'

export default function LinkButtons({ className, text, icon }) {
    return (
        <div>
            <a className={className}>
                <span>
                    {text}
                </span>
                <div className='icon-background'>
                    <span>
                        {icon}
                    </span>
                </div>
            </a>
        </div>
    )
}
