import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router';
//import ReactThreeFbxViewer from 'react-three-fbx-for-pyt';

//let fbxUrl = require('./images/poly.fbx');

const Profile = (props) =>{

    // let cameraPosition = {
    //     x:150,
    //     y:300,
    //     z:350
    //   }

    //const _address = getParams();
    const { address } = useParams();

    console.log(address)

    return(
        <div>

            <Header
            title="Profile"
            address={address}/>

            <div className='nft-div'>
                <div class="nft-header">
                    <img src={Hippo}/>
 
                </div>

                <div class="nft-body">
                    <ul>
                        <li><strong>Name:</strong>HippyHoppy</li>

                        <li><strong>Happiness:</strong>
                        <div className='main-bar'>
                            <div className='sub-bar' style={{backgroundColor:'#e67e22',width: '10vh'}}></div>
                        </div>
                        </li>

                        <li><strong>Joyfullness:</strong>
                        <div className='main-bar'>
                            <div className='sub-bar' style={{backgroundColor:'green',width: '20vh'}}></div>
                        </div>
                        </li>

                        <li><strong>Low Anxiety:</strong>
                        <div className='main-bar'>
                            <div className='sub-bar' style={{backgroundColor:'green',width: '20vh'}}></div>
                        </div>
                        </li>

                        <li><strong>Low Stress:</strong>
                        <div className='main-bar'>
                            <div className='sub-bar' style={{backgroundColor:'green',width: '20vh'}}></div>
                        </div>
                        </li>

                        <li><strong>Mindful:</strong>
                        <div className='main-bar'>
                            <div className='sub-bar' style={{backgroundColor:'green',width: '20vh'}}></div>
                        </div>
                        </li>

                    </ul>
                </div>
            </div>

            <Footer
            address={address}/>

        </div>
    )
}

export default Profile;