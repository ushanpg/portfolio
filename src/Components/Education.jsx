import React from 'react'

export default function Education() {
  return (
    <div className="Education section" id='education'>
        <div className='container'>
            <div className='row'>
            <h4>Education</h4>
                <div className='col-md-6 square'>
                <div className="card">
            <div className="card-body">
                <h5 className="card-title">University of Colombo (Off-Campus)</h5>
                <p className="card-text">Undergraduate Student(BIT), Information Technology</p>
            </div>
            </div>    
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">BCS - The Chartered Institute for IT(UK)</h5>
                <p className="card-text">DipHE, Business Information Technology  (2015-2017)</p>
            </div>
            </div>    
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">ESOFT Metro Campus</h5>
                <p className="card-text">Computer networks - Cisco (2018)</p>
            </div>
            </div>
                </div>
                <div className='col-md-6 edu-body'>
                    <img src="images/edu.png" alt="edu-img" className='img-fluid edu-pic'></img>
                </div>
            </div>
        </div>

    </div>
  )
}
