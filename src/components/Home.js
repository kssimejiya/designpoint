import React from 'react'
import './Home.css'
import Slider from 'react-animated-slider';
import mainimages from './mainimages'
import { motion } from 'framer-motion';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

function Home() {
  // const container = {
  //   hidden: {
  //     opacity: 0,
  //     x: '-100%',
  //     scale: 0.6,
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
  //     scale: 1.4,
  //   }
  // }
  // const pageTransition = {
  //   type: 'tween',
  //   ease: 'anticipate',
  //   duration: 1.5,
  // }
  return (
    <motion.div
      // variants={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Slider autoplay={2500}   >
        {
          mainimages.map((item, index) => (
            <div
              key={index}
              style={{ background: `url('${item.image}') no-repeat`, backgroundPosition: 'center', backgroundSize: 'cover' }}
            >

            </div>
          ))
        }
      </Slider >
    </motion.div>
  )
}


export default Home;
