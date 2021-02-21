import React, { useState } from 'react'
import './Projects.css'
import Slider from 'react-animated-slider';
import content from './content'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Projects() {


  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        delayChildren: 1,
        staggerChildren: 0.4
      }}
      style={{ overflow: 'hidden' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 1,
          delayChildren: 1,
          staggerChildren: 0.8
        }}
        className='projectNav'>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 1,
            delayChildren: 1,
            staggerChildren: 0.8
          }}
          className='project-menu'>
          <motion.li
            initial={{ opacity: 0, y: -20, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className='project-item'>
            <Link to='/bungalows' className='project-link' onClick={closeMobileMenu}>
              Bunglows
            </Link>
          </motion.li>
          {/* <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='project-item'>
            <Link to='/buildings' className='project-link' onClick={closeMobileMenu}>
              Buildings
            </Link>
          </motion.li> */}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='project-item'>
            <Link to='/offices' className='project-link' onClick={closeMobileMenu}>
              Offices
              </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
      <Slider autoplay={2500}  >
        {
          content.map((item, index) => (
            <div
              key={index}
              style={{
                background: `url('${item.image}') no-repeat`, backgroundPosition: 'center', backgroundSize: 'cover'
              }}
            >
              <div className="center">
                <h1 style={{ marginTop: '10px' }}>{item.title}</h1>
                <Link to={`${item.path}`} >
                  <button style={{ marginTop: '10px' }}>{item.button}</button>
                </Link>
              </div>
            </div>
          ))
        }
      </Slider >
    </motion.div >
  )
}


export default Projects;
