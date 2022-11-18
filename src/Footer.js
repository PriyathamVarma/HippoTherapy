import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import ProfOne from './images/prof-1.png';
import ProfTwo from './images/prof-2.png';
import ProfThree from './images/prof-3.png';

const Footer = (props) =>{
    return(
        <div className='main-footer'>

            <Link to={`/profile/${props.address}`} className='links'><img src={ProfOne}/></Link>
            <Link to={`/mood/${props.address}`} className='links'><img src={ProfTwo}/></Link>
            <Link to={`/tasks/${props.address}`} className='links'><img src={ProfThree}/></Link>

        </div>
    )
}

export default Footer;