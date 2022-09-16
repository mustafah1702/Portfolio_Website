import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className = 'text_light'>Beginner</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className = 'text_light'>Beginner</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Javascript</h4>
                <small className = 'text_light'>Beginner</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>React.js</h4>
                <small className = 'text_light'>Beginner</small></div>
            </article>
          </div>
        </div>

      <div className='experience_backend'>
      <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Python</h4>
                <small className = 'text_light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Java</h4>
                <small className = 'text_light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>RISC-V Assembly</h4>
                <small className = 'text_light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>C</h4>
                <small className = 'text_light'>Beginner</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>C++</h4>
                <small className = 'text_light'>Beginner</small></div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className = 'text_light'>Beginner</small> </div>
            </article>
            
            
          </div>
        </div>
      <div className='experience_backend'></div>
      </div>
    </section>
  )
}

export default Experience