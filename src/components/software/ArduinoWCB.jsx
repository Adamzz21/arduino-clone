import React from 'react'
import './arduinoWCB.css'
import { Link } from 'react-router-dom'

export default function ArduinoWCB() {
    return (
        <div className='ardunioWCB-wrapper'>
            <h2 id='arduinoWCB'>Arduino With ChromeBook</h2>
            <p>To program Arduino from a Chromebook, you can use the <Link>Arduino Web Editor</Link>
                on Arduino Cloud. The desktop version of the IDE is not available on ChromeOS.</p>
        </div>
    )
}
