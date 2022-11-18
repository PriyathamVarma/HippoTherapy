import React from 'react';
import './App.css';
import Earth from './images/Earth.png';
import Hippo from './images/hippo.png';

const App = () => {

  const _benefits =[
    {img:'',title:"Effective and efficient",description:"Our sessions effectively and efficiently teach reading, listening, and speaking skills. Check out our latest research!"},
    {img:'',title:"Personalized learning",description:"Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace."},
    {img:'',title:"Stay motivated",description:"We make it easy to form a habit of language learning, with game-like features, fun challenges, and reminders from our friendly mascot, Duo the owl."},
    {img:'',title:"Have fun with it!",description:"Effective learning doesn’t have to be boring! Build your skills each day with engaging exercises and playful characters."},

  ]
  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <h3>HappyTherapy</h3>
        <h3>Country:<span>UK</span></h3>
      </div>

      {/* Main */}
      <div className="main">

        <img src={Earth}/>
        <h2>The fun way to improve your mental wellness!</h2>
        <button>Connect Wallet</button>

      </div>

      {/* Intro */}
      <div className="intro">
      <img src={Hippo}/>
        <h4>The worlds first Blockchain and AI-based mental wellness app</h4>
        <p>HippoTherapy is the world's first platform that incentives you for taking care of your own mental health.</p>
      </div>

      {/* Benefits */}
      <div className="benefits">
      {_benefits.map((item,index)=>{
          return(
            <div>

              <div className='benefits-div'>

                <img alt="benefits"/>
                <h4>{item.title}</h4>

              </div>
              <p>{item.description}</p>

            </div>
          )
        })}
      </div>


      {/* Tips */}
      <div className="tips border">
        
      </div>

      {/* Footer */}
      <div className="footer border">
        Footer
      </div>
    </div>
  );
}

export default App;
