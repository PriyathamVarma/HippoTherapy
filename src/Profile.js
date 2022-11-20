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
import vide from './images/video1.mp4';


//let fbxUrl = require('./images/poly.fbx');

const Profile = (props) =>{

    // let cameraPosition = {
    //     x:150,
    //     y:300,
    //     z:350
    //   }

    //const _address = getParams();
    const { address } = useParams();

    console.log(address);


    const [display,setDisplay] = useState(true);

    const displayChange = () =>{
        console.log(display);
        setDisplay(!display);
        console.log(display);
    }

    return(
        <div className='profile-div'>

            <Header
            title="Profile"
            address={address}/>

            <div className='nft-div'>
                <div class="nft-header">
                    
                    <video width="330" height="400" controls autoPlay muted>
                    <source src={vide} type="video/mp4"/>
                    </video>
                    <div className='nft-img'></div>
 
                </div>

                <div className="nft-body">

                <div className="wrap-circles">
                    <div className="circle per-0">
                        <div className="inner">Joy</div>
                    </div>
                    <div className="circle per-25">
                        <div className="inner">Mindful</div>
                    </div>
                    <div className="circle per-50">
                        <div className="inner">Calm</div>
                    </div>
                    <div className="circle per-75">
                        <div className="inner">Active</div>
                    </div>
                </div>


                   
                </div>
            </div>

            <Footer
            address={address}/>

        </div>
    )
}

export default Profile;