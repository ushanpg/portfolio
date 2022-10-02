import React from 'react'

export default function About() {
  return (
    <div className="About section" id='services'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-4 square'>    
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Front-end Development</h5>
                <p className="card-text">Let interactive user experience with modern responsive UI.</p>
            </div>
            </div>    
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Back-end Development</h5>
                <p className="card-text">Turn evolving business processes into an automated logic.</p>
            </div>
            </div>    
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Database Development </h5>
                <p className="card-text">Agile storage with NoSQL or ultra consistensy with T-SQL.</p>
            </div>
            </div>
            </div>
            <div className='col-md-4'>
            <h4> My awesome services </h4>
            <img src="/images/presenter.png" className='img-fluid' />
            </div>

            <div className='col-md-4 square'>    
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">GIT/Version Controlling</h5>
                <p className="card-text">One click rollback from chaos plus iterative branching.</p>
            </div>
            </div>    
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Linux & Cloud Configuration</h5>
                <p className="card-text">Go everything live with zero dependencies but spend less.</p>
            </div>
            </div>    
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Restful APIs & Web analytics</h5>
                <p className="card-text">Interact with an in-house system or from another planet.</p>
            </div>
            </div>
            </div>

            </div>    
        </div>
    </div>
  )
}
