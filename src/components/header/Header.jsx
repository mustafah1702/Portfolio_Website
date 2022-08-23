import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/image.png'

const Header = () => {
  return (
    <header> 
      <div className="container header_container"></div>
      <h5>Hello I'm</h5>
      <h1>Mustafa Hasan</h1>
      <h5 className="text-light">Computer Science Student</h5>
      <CTA />

      <div className='me'>
        <img src = {ME} alt = "me" height= 'auto' width = '10%'/>

      </div>
    </header>
  )
}

export default Header