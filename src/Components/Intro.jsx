import React from 'react'
import { IntroClients } from './IntroClients'

export default function Intro() {

  return (
    <div className="Intro">
        <div className='container'>
        <div className="row">
            <div className="col-md-6 square">
                <h1>Hey! I'm Ushan P.</h1>
                <p>a Developer, Analyst & Techie from <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/sony/336/flag-sri-lanka_1f1f1-1f1f0.png'></img>.</p>
                <button className='btn btn-warning'> Hire me </button>
            </div>
            <div className='col-md-6 square section'>
            <img className="img-fluid" src="images/macbook.png" alt="pic1"></img>
            </div>
            <div className="row">
            <h4> Available for u but not only with </h4>
            </div>
            <div className='row'>
              <IntroClients />
            </div>
        </div>   
       </div> 
    </div>
  )
}
