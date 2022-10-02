import React from 'react'
import { Typing } from './Typing'

export default function Profile() {
  return (
    <div className="Profile section" id='profile'>
        <div className='container'>
            <div className='row'>
                <h4 className='profile-heading'>The Profile</h4>
                <div className='col-md-6 profile-body'>
                    <img src="/images/profile.png" alt="profile-pic" className='img-fluid profile-pic'></img>
                </div>
                <div className='col-md-6 profile-desc square'>
                    <Typing desc="Hi...👋" wrapper="h4"/>
                    <p>5+ years ICT enthusiast is here to uplift your business!</p>
                    
                    <p>I am an IT Professional with passion towards continues learning & developing innovative solutions.</p>

                    <p>Specialized in Delivering,<br/>
                        - Web App development (Bootstrap, ReactJS, NodeJS/Express, MySql/MongoDB, PHP, GIT/Bash)<br />
                        - Market research & data analysis<br/>
                        - Product design cum prototyping<br/>
                        - Assuring user experience<br/>
                        - Always updated & in-line with latest tech</p>

                        <p>So I assure your satisfaction with good outcome to the prospective clients.</p>

                        <p>Sounds Interesting?<br/>
                        I'd glad to work together with you & create great things. Let's grow to the next-level!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
