import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router';
//import ReactThreeFbxViewer from 'react-three-fbx-for-pyt';
import One from './images/one.jpeg';
import Two from './images/one.jpeg';
import { useState } from 'react';
import qr from './images/qr.png';

const Code = () =>{
    return(
        <div className='qr-area'>
            <Header
            title='QR Code'/>

            <div className='qr'>
                <img src={qr}/>
            </div>


            <Footer/>
        </div>
    )
}

export default Code;