import { motion } from 'framer-motion';
import React from 'react'

function ContactUs() {
  const container3 = {
    hidden: {
      opacity: 0,
      x: '-100vw',
      scale: 0.6,
    },
    visible: {
      opacity: 1,
      // transition: { duration: 0.3 },
      x: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      x: '100vw',
      scale: 1.4,
    }
  };
  const pageTransition3 = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1.5,
  };
  return (
    <motion.div
      variants={container3}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={pageTransition3}>
      <h1>contactus</h1>
    </motion.div>
  )
}

export default ContactUs
