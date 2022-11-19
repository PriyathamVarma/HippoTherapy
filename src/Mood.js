import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router';
import { useState } from 'react';
import { redirect,useNavigate } from "react-router-dom";

const Mood = (props) =>{

    const { address } = useParams();

    const navigate = useNavigate();

    const navigateToTasks = () => {
        // 👇️ navigate to /contacts
        navigate(`/tasks/${address}`);
    };

    

    const [one,setOne]      = useState(0);
    const [two,setTwo]      = useState(0);
    const [three,setThree]  = useState(0);
    const [four,setFour]    = useState(0);
    const [five,setFive]    = useState(0);
    const [six,setSix]      = useState(0);
    const [seven,setSeven]  = useState(0);


    // methods
    const formSubmitted = (event) =>{

        event.preventDefault();

        //const _happy = event.target.happy.value;
        const _Nervous      = event.target.Nervous.value;
        const _Worrying     = event.target.Worrying.value;
        const _Anxious      = event.target.Anxious.value;
        const _Relaxing     = event.target.Relaxing.value;
        const _Restless     = event.target.Restless.value;
        const _Irritation   = event.target.Irritation.value;
        const _Awful        = event.target.Awful.value;


        navigateToTasks();

    }

    const oneKey = (e) =>{
        e.preventDefault();
        setOne(e.target.value)
        
    }

    const twoKey = (e) =>{
        e.preventDefault();
        setTwo(e.target.value)
        
    }

    const threeKey = (e) =>{
        e.preventDefault();
        setThree(e.target.value)
        
    }

    const fourKey = (e) =>{
        e.preventDefault();
        setFour(e.target.value)
        
    }

    const fiveKey = (e) =>{
        e.preventDefault();
        setFive(e.target.value)
        
    }

    const sixKey = (e) =>{
        e.preventDefault();
        setSix(e.target.value)
        
    }

    const sevenKey = (e) =>{
        e.preventDefault();
        setSeven(e.target.value)
        
    }


    return(
        <div className='mood-space'>
            <Header
            title="Mood Meter"
            address={address}
            />

            <div className='form-div'>
                <h2>Factors</h2>
                <form onSubmit={formSubmitted}>

                    <label>Nervous: {one}</label><br/>
                    <input type="range" name="Nervous" onChange={(e) =>oneKey(e)}/><br/><br/>

                    <label>Worrying: {two}</label><br/>
                    <input type="range" name="Worrying" onChange={(e) =>twoKey(e)}/><br/><br/>

                    <label>Anxious: {three}</label><br/>
                    <input type="range" name="Anxious" onChange={(e) =>threeKey(e)}/><br/><br/>

                    <label>Relaxing: {four}</label><br/>
                    <input type="range" name="Relaxing" onChange={(e) =>fourKey(e)}/><br/><br/>

                    <label>Restless: {five}</label><br/>
                    <input type="range" name="Restless" onChange={(e) =>fiveKey(e)}/><br/><br/>

                    <label>Irritation: {six}</label><br/>
                    <input type="range" name="Irritation" onChange={(e) =>sixKey(e)}/><br/><br/>

                    <label>Awful: {seven}</label><br/>
                    <input type="range" name="Awful" onChange={(e) =>sevenKey(e)}/><br/><br/>

                    <input type="submit"/>

                </form>
            </div>

            <Footer
            address={address}/>
        </div>
    )
}

export default Mood;