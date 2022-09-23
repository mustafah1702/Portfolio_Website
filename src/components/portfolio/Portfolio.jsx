import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="" alt="" />
          </div>
          <h3>Sports Scheduler</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href = 'https://dribble.com/Alien_pixels' className = 'bth btn-primary' target='_blank'>Live Demo Unavailable</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="" alt="" />
          </div>
          <h3> Image (De)Compressor</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/mustafah1702/-De-Compressor" className='btn' target='_blank'>Github</a>
          <a href = 'https://dribble.com/Alien_pixels' className = 'bth btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="" alt="" />
          </div>
          <h3>Phone Plans Dataset</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href = 'https://dribble.com/Alien_pixels' className = 'bth btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="" alt="" />
          </div>
          <h3>SIMON Game</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href = 'https://dribble.com/Alien_pixels' className = 'bth btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="" alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/mustafah1702/Portfolio_Website" className='btn' target='_blank'>Github</a>
          <a href = 'https://dribble.com/Alien_pixels' className = 'bth btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio