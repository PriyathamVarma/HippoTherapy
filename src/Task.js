import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Header from './Header';
import Footer from './Footer';
import { useParams,useLocation } from 'react-router';
import { useState } from 'react';
import List from './List';


const Task = ({props,match,location}) =>{

    const {id} = useParams();
   // const params = useSearchParams();
   const _location = useLocation();
   const queryParams = new URLSearchParams(_location.search);
   const address = queryParams.get('address');
    
   const _data = [
       {task:"Journal",duration:"10 mins",description:"Write about how your day went"},
       {task:"Memory game",duration:"10 - 20 mins",description:"Think of three things you are graetful for today"},
       {task:"Go for walk",duration:"30 mins",description:"Go for a walk in the park"},
       {task:"Experiment",duration:"10 - 20 mins",description:"Experiment with something new"},
       {task:"Smile",duration:"5 mins",description:"Make yourself smile - Hakuna Matuta"}]

    return(
        <div className='task-space'>

            <Header
            title="Goal"
            address={address}
            />

            <div className='lists-div'>


                {_data.map((value,index)=>{
                    return(

                        <List
                        key={index}
                        data={value}/>

                    )
                })}

                

            </div>

           


            <Footer
            address={address}
            />

        </div>
    );
}

export default Task;