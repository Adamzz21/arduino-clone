import React from 'react'
import ArduinoBoard from '../../assets/ArduinoBoard.png'
import './leftSideArduino.css';

export default function LeftSideArduino() {
    return (
        <div className='picture-wrapper'>
            <h2>What is Arduino?</h2>
            <img src={ArduinoBoard} />
        </div>
    )
}
