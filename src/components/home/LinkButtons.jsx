import React from 'react'

export default function LinkButtons({ className, text, icon }) {
    return (
        <div>
            <a className={className}>
                <span>
                    {text}
                </span>
                <span>
                    {icon}
                </span>
            </a>
        </div>
    )
}
