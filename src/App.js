import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';
import { ethers } from "ethers";
import { useState } from 'react';
import { redirect,useNavigate } from "react-router-dom";
import axios from 'axios';
import Elev from './images/Elev8.io.png';


const App = () => {

  // State variables
  const [account,setAccount] = useState('');

  const navigate = useNavigate();

  const navigateToProfile = (args) => {
    // 👇️ navigate to /contacts
    navigate(`/profile/${args}`);
  };

  const navigateToDetails = (args) => {
    // 👇️ navigate to /contacts
    navigate(`/details/${args}`);
  };

  const _benefits =[
    {img:'',title:"Effective and efficient",description:"Our sessions effectively and efficiently teach reading, listening, and speaking skills. Check out our latest research!"},
    {img:'',title:"Personalized learning",description:"Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace."},
    {img:'',title:"Stay motivated",description:"We make it easy to form a habit of language learning, with game-like features, fun challenges, and reminders from our friendly mascot, Duo the owl."},
    {img:'',title:"Have fun with it!",description:"Effective learning doesn’t have to be boring! Build your skills each day with engaging exercises and playful characters."},

  ]

  // Methods
  const connectWallet = async () =>{
    if(window.ethereum){
      console.log("You have what you need ;)")
      // A Web3Provider wraps a standard Web3 provider, which is
      // what MetaMask injects as window.ethereum into each page
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      // MetaMask requires requesting permission to connect users accounts
      await provider.send("eth_requestAccounts", []).then((res) =>{
        setAccount(res[0]);
        console.log("User has granted access to accounts",account);

          //navigateToProfile(account);
          if(account !== ""){

            // axios.get(`http://localhost:8082/register/${account}`).then((res)=>{
            //   console.log(res.data[0].address)
            //   const _yes = res.data[0].address;

            // if(_yes === account){
            //   console.log('exists');
            //   navigateToProfile(account);
            // }else{
            //   console.log('Doesnt exist');
            // }

            // }).catch((err)=>{
            //   console.log(err);
            //   axios.post(`http://localhost:8082/register/${account}`).then((res)=>{
            //     console.log(res.data);
            //     navigateToDetails(account);
            //   }).catch((err)=>{
            //     console.log(err);
            //   });
              
            // });

            //console.log(serachData);
            
            // const postingData = axios.post(`http://localhost:8082/register/${account}`);
            // try{
            //   navigateToProfile(account);
            // }catch(err){
            //   console.log(err);
            // }
            navigateToDetails(account);
            //navigateToProfile(account);
            
          }
          else{
            console.log('empty');
          }

        

      }).catch(() =>{
        console.log("User has denied access to accounts")
        }
        );

      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      const signer = provider.getSigner(0)

      console.log(signer);
    }
    else{
      console.log("No Ethereum browser detected");
    }
  }


  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <h4>Elevate</h4>
        <h4>Country:<span>UK</span></h4>
      </div>

      {/* Main */}
      <div className="main">

        <button onClick={connectWallet}>Connect Wallet</button>
        

      </div>


    </div>
  );
}

export default App;
