import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/image.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header> 
      <div className="header_container">
      <h5>Hello I'm</h5>
      <h1>Mustafa Hasan</h1>
      <h5 className="text-light">Computer Science Student</h5>
      <CTA />
      <HeaderSocials/>

      <div className='me'>
        <img src = {ME} alt = "me" height= 'auto' width = '10%'/>
      </div>

      <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header