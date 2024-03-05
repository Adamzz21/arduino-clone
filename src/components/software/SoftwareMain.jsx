import React from 'react'
import './softwareMain.css'
import WebEditor from './WebEditor'
import ArduinoWCB from './ArduinoWCB'

export default function SoftwareMain() {
    return (
        <div className='main-page-contant'>
            <WebEditor />
            <h1>Downloads</h1>
            <ArduinoWCB />
        </div>
    )
}
