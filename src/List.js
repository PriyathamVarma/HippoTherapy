import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Header from './Header';
import Footer from './Footer';
import { useParams,useLocation } from 'react-router';
import { useState } from 'react';

const List = (props) =>{

    const {address} = useParams();

    const {task,duration,description} = props.data;


    return(             

                <div className='lists-element'>

                    <div className='lists-head'>

                        <h5> {task} </h5>
                        <h6> Duration: {duration} </h6>

                    </div>

                    <div className='lists-body'>

                        <p>{description}</p>

                    </div>

                </div>

    );
}

export default List;