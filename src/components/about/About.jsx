import React from 'react'
import { icons } from 'react-icons'
import "./about.css"
import {FiAward} from 'react-icons/fi'
import {BiBookBookmark} from 'react-icons/bi'
import {MdComputer} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'> 
        <div className='about_me-image'>
          <img src="" alt="About Image" />
        </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>

            <article className='about_card'>
              <BiBookBookmark className='about_icon'/>
              <h5>Education</h5>
              <small> Toronto Metropolitan University </small>
              <h6>2022 - Current</h6>
              <small> University of Toronto </small>
              <h6>2020 - 2022</h6>
            </article>

            <article className='about_card'>
              <MdComputer className='about_icon'/>
              <h5>Technical Competencies</h5>
              <p><small> Programming Languages Python, Java, RISC-V Assembly,  HTML, CSS, Javascript, SQL </small></p>
              <p><small> Git, GitHub, Jira, Firebase (NoSQL) database</small></p>
              <small> Microsoft Office: Word, Excel (Pivot Tables, Gantt Chart, Data Manipulation), PowerPoint, Access</small>
            </article>
          </div>
          <a href='#contact' className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About