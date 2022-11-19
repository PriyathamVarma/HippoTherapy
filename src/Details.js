import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import Footer from './Footer';
import Header from './Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { redirect,useNavigate } from "react-router-dom";
import Elev from './images/Elev8.io2.png';

const Details = (props) =>{

    const {address} = useParams();

    const navigate = useNavigate();

    const navigateToProfile = (args) => {
        // 👇️ navigate to /contacts
        navigate(`/profile/${args}`);
      };

    const formSubmit = async(event) =>{

        event.preventDefault();

        const _age      = event.target.age.value;
        const _gender   = event.target.gender.value;
        const _coupon   = event.target.coupon.value;
        const _country  = event.target.country.value;

        navigateToProfile(address);

        // const obj =  {
        //     age : _age,
        //     gender : _gender,
        //     coupon : _coupon,
        //     country: _country,
        //     account : address
        // }

        // console.log(obj);

        // axios.post(`http://localhost:8082/details/${address}`,obj).then((res)=>{
        //     console.log(res);
        //     navigateToProfile(address);
        // }).catch((err)=>{
        //     console.log(err);
        // });

    } 


    return(
        <div className='details'>

            <form onSubmit={formSubmit}>
                <label>Age</label><br/>
                <input type="number" name="age"/><br/><br/>

                <label>Gender</label><br/>
                <input type="text" name="gender"/><br/><br/>

                <label>Country</label><br/>
                <input type="text" name="country"/><br/><br/>

                <label>Coupon</label><br/>
                <input type="text" name="coupon"/><br/><br/>

                
                <input type="submit" value="Enter"/>
            </form>

            

        </div>
    )
}

export default Details;