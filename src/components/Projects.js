import React, { useState } from 'react'
import './Projects.css'
import Slider from 'react-animated-slider';
import content from './content'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Projects() {
  // const container2 = {
  //   hidden: {
  //     opacity: 0,
  //     x: '-100%',
  //     scale: 0.8,
  //   },
  //   visible: {
  //     opacity: 1,
  //     // transition: { duration: 0.3 },
  //     x: 0,
  //     scale: 1

  //   },
  //   exit: {
  //     opacity: 0,
  //     x: '100%',
  //     scale: 1.2,
  //   }
  // };
  // const pageTransition2 = {
  //   type: 'tween',
  //   ease: 'anticipate',
  //   duration: 1.5,
  // };

  const [click, setClick] = useState(false);
  // const [animation, setAnimation] = useState(false);
  const closeMobileMenu = () => setClick(false)
  // const projectNav = () => setAnimation(false);

  return (
    <div
    // variants={container2}
    // initial='hidden'
    // animate='visible'
    // exit='exit'
    // transition={pageTransition2}
    >
      <div className='projectNav'>
        <ul className='project-menu'>
          <li className='project-item'>
            <Link to='/bungalows' className='project-link' onClick={closeMobileMenu}>
              Bunglows
              </Link>
          </li>
          <li className='project-item'>
            <Link to='/buildings' className='project-link' onClick={closeMobileMenu}>
              Buildings
              </Link>
          </li>
          <li className='project-item'>
            <Link to='/offices' className='project-link' onClick={closeMobileMenu}>
              Offices
              </Link>
          </li>
        </ul>
      </div>
      <Slider autoplay={2000}  >
        {
          content.map((item, index) => (
            <div
              key={index}
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="center">
                <h1 style={{ marginTop: '10px' }}>{item.title}</h1>
                <p style={{ marginTop: '10px' }}>{item.description}</p>

                <Link to={`${item.path}`} >
                  <button style={{ marginTop: '10px' }}>{item.button}</button>
                </Link>


              </div>
            </div>
          ))
        }
      </Slider >
    </div>
  )
}


export default Projects;
