import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router';
import { useState } from 'react';

const Mood = (props) =>{

    const { address } = useParams();

    const [hap,setHap]  = useState(0);


    // methods
    const formSubmitted = (event) =>{

        event.preventDefault();

        const _happy = event.target.happy.value;

        console.log(_happy);

    }

    const happyKey = (e) =>{
        e.preventDefault();
        setHap(e.target.value)
        
    }


    return(
        <div>
            <Header
            title="Mood Meter"
            address={address}
            />

            <div className='form-div'>
                <form onSubmit={formSubmitted}>

                    <label>Happy:{hap}</label><br/>
                    <input type="range" name="happy" onChange={(e) =>happyKey(e)}/><br/><br/>

                    <label>Anxiety:</label><br/>
                    <input type="range" name="Anxiety"/><br/><br/>

                    <label>Joy:</label><br/>
                    <input type="range" name="Joy"/><br/><br/>

                    <label>Other:</label><br/>
                    <input type="range" name="Other"/><br/><br/>

                    <input type="submit"/>

                </form>
            </div>

            <Footer
            address={address}/>
        </div>
    )
}

export default Mood;