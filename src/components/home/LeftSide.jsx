import React from 'react'
import './leftSide.css'
import LeftSideArduino from './LeftSideArduino'
import LinkButtons from './LinkButtons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudIcon from '@mui/icons-material/Cloud';
import WorkIcon from '@mui/icons-material/Work';
import './linkButtons.css';
import ArduinoCloud from './ArduinoCloud';

export default function LeftSide() {
    return (
        <div className='left-side-container' >
            <LeftSideArduino />
            <div className='link-buttons-wrapper'>
                <LinkButtons
                    text={"buy an arduino"}
                    className={'buy-arduino'}
                    icon={< ShoppingCartIcon fontSize='large' />}
                />
                <LinkButtons
                    text={"learn arduino"}
                    className={'learn-arduino'}
                    icon={<NotificationsIcon fontSize='large' />}
                />

                <LinkButtons
                    text={"donate"}
                    className={'donate'}
                    icon={<FavoriteIcon fontSize='large' />}
                />

                <LinkButtons
                    text={"arduino in the cloud"}
                    className={'cloud-arduino'}
                    icon={<CloudIcon fontSize='large' />}
                />
                <LinkButtons
                    text={"careers"}
                    className={'career'}
                    icon={<WorkIcon fontSize="large" />}
                />

            </div>
            <div>
                <ArduinoCloud />
            </div>
            <div>
                
            </div>
        </div>
    )
}
