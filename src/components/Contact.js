import React from 'react'
import phone from '../images/call.svg'
import imgEmail from '../images/email.png'
import imgWorld from '../images/world.png'
import imgFacebook from '../images/facebook.png'
import imgWhatsapp from '../images/whatsapp.png'
import imgInsta from '../images/insta.png'
import { motion } from 'framer-motion';
import img from '../images/contactpage.jpeg'
import contact from '../images/contact.svg'
import './Contact.css'

function Contact() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.4
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'repeat', }}
      className='contact'>
      <div className='contact-page'>
        <div className='contact-text'>
          <h1>Contact US</h1>
        </div>
        <div className='contact-svg'>
          <motion.img
            initial={{ y: -5 }}
            animate={{ y: 5 }}
            transition={{
              delay: 2.5,
              yoyo: Infinity
            }}
            src={contact} alt='' className='contact-img' />
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className='popupBlock'>
        <motion.div variants={item} className='popup' style={{ boxShadow: " 5px 5px 5px #9e9e9e", marginBottom: 15 }}>
          <motion.img
            whileHover={{ scale: 1.1, originX: 0, }}
            transition={{ type: 'spring', stiffness: 300 }}
            src={phone} className='phone' style={{ height: 40, width: 40, marginBottom: 5, marginTop: 10 }} />

          <motion.h2
            whileHover={{ scale: 1.1, originX: 0, color: '#5caced' }}
            transition={{ type: 'spring', stiffness: 300, }}
            style={{ fontSize: '1.8rem', color: 'aliceblue' }}>Phone</motion.h2>
          <div style={styles.separater} />
          <motion.h3
            whileHover={{ scale: 1.1, originX: 0, color: '#5caced' }}
            transition={{ type: 'spring', stiffness: 200, }}
            style={{ fontSize: '1.6rem', marginBottom: 15, color: 'aliceblue' }}> +91 9033392535</motion.h3>
          <motion.h3
            whileHover={{ scale: 1.1, originX: 0, color: '#5caced' }}
            transition={{ type: 'spring', stiffness: 200, }}
            style={{ fontSize: '1.6rem', marginBottom: 20, color: 'aliceblue' }}> +91 9033092535</motion.h3>
        </motion.div>
        <motion.div variants={item} className='popup' style={{ boxShadow: " 5px 5px 5px #9e9e9e", marginBottom: 15 }}>
          <motion.img
            whileHover={{ scale: 1.1, originX: 0, }}
            transition={{ type: 'spring', stiffness: 300 }}
            src={imgEmail} className='phone' style={{ height: 50, width: 50, marginBottom: 5, marginTop: -45 }} />
          {/* <RiPhoneFill className='phone' style={styles.phone} /> */}
          <motion.h2
            whileHover={{ scale: 1.1, originX: 0, color: '#5caced' }}
            transition={{ type: 'spring', stiffness: 200, }}
            style={{ fontSize: '1.8rem', color: 'aliceblue' }}>Email</motion.h2>
          <div style={styles.separater} />
          <motion.h3
            whileHover={{ scale: 1.1, originX: 0, color: '#5caced' }}
            transition={{ type: 'spring', stiffness: 200, }}
            style={{ fontSize: '1.6rem', color: 'aliceblue' }}>designpoint@gmail.com</motion.h3>
        </motion.div>
        <motion.div variants={item} className='popup' style={{ boxShadow: " 5px 5px 5px #9e9e9e", marginBottom: 15 }}>
          <motion.img
            whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
            transition={{ type: 'spring', stiffness: 200, }}
            src={imgWorld} className='phone' style={{ height: 60, width: 60, marginBottom: 5, marginTop: -5 }} />
          <motion.h2
            whileHover={{ scale: 1.1, originX: 0, color: '#5caced' }}
            transition={{ type: 'spring', stiffness: 200, }}
            style={{ fontSize: '1.8rem', marginBottom: 1, color: 'aliceblue' }}>Social Media</motion.h2>
          <div style={styles.separater} />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '80%' }}>
            <motion.img
              whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
              transition={{ type: 'spring', stiffness: 200, }}
              src={imgFacebook} alt='' style={{ height: 50, width: 50, marginBottom: 10 }} />
            <motion.img
              whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
              transition={{ type: 'spring', stiffness: 200, }}
              src={imgInsta} alt='' style={{ height: 50, width: 50, marginBottom: 10 }} />
            <motion.img
              whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
              transition={{ type: 'spring', stiffness: 200, }}
              src={imgWhatsapp} alt='' style={{ height: 55, width: 55, marginBottom: 10 }} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact

const styles = {
  separater: {
    height: 2,
    width: 60,
    backgroundColor: 'blue',
    marginBottom: 22,
    marginTop: 10
  },
  phone: {
    height: 50,
    width: 50,
    marginBottom: 5,
    marginTop: -40
  }
}