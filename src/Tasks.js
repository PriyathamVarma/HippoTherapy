import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Tasks = (props) =>{

    const {address} = useParams();

    return(
        <div >

            <Header
            title="Tasks"
            address={address}/>


            <div className='tasks'>

                <div className='pending-tasks'>

                    <h3>Pending</h3>

                    <ul>
                        <li><Link to={`/task/${address}?address=${address}`} className="linky">Task1</Link></li>
                        <li><Link to={`/task/${address}`} className="linky">Task1</Link></li>
                        <li><Link to={`/task/${address}`}className="linky">Task1</Link></li>
                    </ul>

                </div>

                <div className='done-tasks'>

                <h3>Completed</h3>

                        <ul>
                            <li><Link to={`/task/${address}`} className="linky">Task1</Link></li>
                            <li><Link to={`/task/${address}`} className="linky">Task1</Link></li>
                            <li><Link to={`/task/${address}`} className="linky">Task1</Link></li>
                        </ul>
                    
                </div>

            </div>


            <Footer
            address={address}/>

        </div>
    );
}

export default Tasks;