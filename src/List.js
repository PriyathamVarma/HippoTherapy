import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Header from './Header';
import Footer from './Footer';
import { useParams,useLocation } from 'react-router';
import { useState } from 'react';

const List = ({props,match,location}) =>{

    const {address} = useParams();


    return(             

                <div className='lists-element'>

                    <div className='lists-head'>

                        <h5> Do Yoga </h5>
                        <h6> Duration: 10 - 20 mins </h6>

                    </div>

                    <div className='lists-body'>

                        <p>Do Yoga with for your own benefits</p>

                    </div>

                </div>

    );
}

export default List;