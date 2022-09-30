import React from 'react'
import { icons } from 'react-icons'
import "./about.css"
import {FiAward} from 'react-icons/fi'
import {BiBookBookmark} from 'react-icons/bi'
import {MdComputer} from 'react-icons/md'
import ME from '../../assets/ss2 copy.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'> 
        <div className='about_me-image'>
          <img src={ME} alt="About Image" />
        </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <p><small>Software Developer at GAO Tek</small></p>
              <p><small>Coding Tutor at Best Brains Learning Center</small></p>
              <p><small>Programming Instructor at IDEA Lab Kids</small></p>
            </article>

            <article className='about_card'>
              <BiBookBookmark className='about_icon'/>
              <h5>Education</h5>
              <p><small>2+ Years of University Experience</small></p>
             <p> <small> Toronto Metropolitan University </small>
              <h6>2022 - Current</h6></p>
              <p><small> University of Toronto </small>
              <h6>2020 - 2022</h6></p>
            </article>

            <article className='about_card'>
              <MdComputer className='about_icon'/>
              <h5>Interests</h5>
              <p><small>Travelling locally and internationally</small></p>
              <p><small>Watching and playing sports (Soccer, Basketball, Cricket, Boxing, Bowling)</small></p>
            </article>
          </div>
          <a href='#contact' className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About