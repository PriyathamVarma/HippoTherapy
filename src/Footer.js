import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';

const Footer = (props) =>{
    return(
        <div className='main-footer'>

            <Link to={`/profile/${props.address}`} className='links'>Profile</Link>
            <Link to={`/mood/${props.address}`} className='links'>Mood</Link>
            <Link to={`/tasks/${props.address}`} className='links'>Tasks</Link>

        </div>
    )
}

export default Footer;