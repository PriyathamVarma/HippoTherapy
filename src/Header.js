import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';

const Header = (props) =>{
    return(
        <div className='main-header'>

            <h3>{props.title}</h3>
            

        </div>
    )
}

export default Header;