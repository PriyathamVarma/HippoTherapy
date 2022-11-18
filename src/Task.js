import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Header from './Header';
import Footer from './Footer';
import { useParams,useLocation } from 'react-router';
import { useState } from 'react';

const Task = ({props,match,location}) =>{

    const {id} = useParams();
   // const params = useSearchParams();
   const _location = useLocation();
   const queryParams = new URLSearchParams(_location.search);
   const address = queryParams.get('address');
    
   console.log(id);
   console.log(address);

    return(
        <div >

            <Header
            title="Task"
            />


           


            <Footer
            />

        </div>
    );
}

export default Task;