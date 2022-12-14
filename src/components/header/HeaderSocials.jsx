import React from 'react' 
import {BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className = 'header_socials'>
        <a href = "https://www.linkedin.com/in/mustafa-hasan-525473237/" target='_blank'><BsLinkedin/></a>
        <a href = "https://github.com/mustafah1702" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials