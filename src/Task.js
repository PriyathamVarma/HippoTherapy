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
       {task:"Do Yoga",duration:"10 - 20 mins",description:"Do yoga for your won benefits"},
       {task:"Watch the Video",duration:"10 mins",description:"Watch this video on breathing excercise"}]

    return(
        <div >

            <Header
            title="Task"
            address={address}
            />

            <div className='lists-div'>


                {_data.map((value,index)=>{
                    return(

                        <List
                        key={index}/>

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