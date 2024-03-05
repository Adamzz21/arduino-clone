import React from 'react'
import './webEditor.css'


export default function WebEditor() {
    return (
        <div className='WebEditor-container'>
            <div className='WebEditor-Left'>
                <h3>Arduino Web Editor</h3>
                <p>Start coding online and save your sketches in the cloud.The most<br />up-to-date version of the IDE includes
                    all libraries and also<br />supports new Arduino boards.</p>
                <div className='WebEditor-Buttons'>
                    <button className='WebEditor-CodeOnline'>code online</button>
                    <button className='WebEditor-GettingStarted'>getting started</button>
                </div>
            </div>
            <div className='WebEditor-right'>
                <img src='https://www.arduino.cc/wiki/static/webide-deb5e53b6a26234e009c08db93ed95be.png' alt="" />
            </div>
        </div>
    )
}
