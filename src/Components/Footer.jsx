import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function Footer() {

    const date = new Date().getFullYear();

  return (
    <div className="Footer">
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-4'>
            <p>Follow Me</p>
            <SocialIcon url="https://facebook.com/umpalliyaguru/" style={{ height: 40, width: 40 }} className="socialicon"/>
            <SocialIcon url="https://twitter.com/#" style={{ height: 40, width: 40 }} className="socialicon"/>
            <SocialIcon url="https://linkedin.com/in/ushan-palliyaguru-a7508a183" style={{ height: 40, width: 40 }} className="socialicon"/>
            <SocialIcon url="mailto:ushanpalliyaguru@gmail.com?subject=Mail from Website" style={{ height: 40, width: 40 }} className="socialicon"/>
            <SocialIcon url='https://wa.me/94764822893' style={{ height: 40, width: 40 }} className="socialicon"/>
            </div>
            <div className='col-md-4'>
                <p className='copyright'>© 2015 - {date} Ushan Palliyaguru.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
