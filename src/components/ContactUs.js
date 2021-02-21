import { motion } from 'framer-motion';
import React from 'react'
import phone from '../images/call.svg'
import imgEmail from '../images/email.png'
import imgWorld from '../images/world.png'
import imgFacebook from '../images/facebook.png'
import imgWhatsapp from '../images/whatsapp.png'
import imgInsta from '../images/insta.png'
import img from '../images/contactpage.jpeg'
import { RiPhoneFill } from "react-icons/ri";
import './ContactUs.css'
import { Cell, Grid } from 'react-mdl';

function ContactUs() {

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
      id='contactImg'
    >

      <h1 style={{ paddingTop: '6rem', paddingLeft: '10rem', color: '#fff' }}>Contact Usasdd</h1>
      {/* </div> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        style={{
          background: `url(${img})`,
          backgroundRepeat: 'repeat',
          backgroundOrigin: 'content-box',
          backgroundAttachment: 'fixed',
          height: '100vh',
        }}
      >
        <Grid className='grid'>
          <Cell col={4}>
            <motion.div variants={item} className='card' style={{ boxShadow: " 5px 5px 5px #9e9e9e", marginBottom: 15, backgroundColor: 'black', opacity: 0.5 }}>
              <motion.img
                whileHover={{ scale: 1.1, originX: 0, }}
                transition={{ type: 'spring', stiffness: 300 }}
                src={phone} className='phone' style={{ height: 40, width: 40, marginBottom: 5, marginTop: -20 }} />

              <motion.h1
                whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
                transition={{ type: 'spring', stiffness: 300, }}
                style={{ fontSize: '1.8rem' }}>Phone</motion.h1>
              <div style={styles.separater} />
              <motion.h2
                whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
                transition={{ type: 'spring', stiffness: 200, }}
                style={{ fontSize: '1.6rem', marginBottom: 15 }}> +91 9033392535</motion.h2>
              <motion.h2
                whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
                transition={{ type: 'spring', stiffness: 200, }}
                style={{ fontSize: '1.6rem', marginBottom: 20 }}> +91 9033092535</motion.h2>
            </motion.div>
          </Cell>
          <Cell col={4}>
            <motion.div variants={item} className='card' style={{ boxShadow: " 5px 5px 5px #9e9e9e", marginBottom: 15 }}>
              <motion.img
                whileHover={{ scale: 1.1, originX: 0, }}
                transition={{ type: 'spring', stiffness: 300 }}
                src={imgEmail} className='phone' style={{ height: 50, width: 50, marginBottom: 5, marginTop: -65 }} />
              {/* <RiPhoneFill className='phone' style={styles.phone} /> */}
              <motion.h1
                whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
                transition={{ type: 'spring', stiffness: 200, }}
                style={{ fontSize: '1.8rem' }}>Email</motion.h1>
              <div style={styles.separater} />
              <motion.h2
                whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
                transition={{ type: 'spring', stiffness: 200, }}>designpoint@gmail.com</motion.h2>
            </motion.div>
          </Cell>
          <Cell col={4}>
            <motion.div variants={item} className='card' style={{ boxShadow: " 5px 5px 5px #9e9e9e", marginBottom: 15 }}>
              <motion.img
                whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
                transition={{ type: 'spring', stiffness: 200, }}
                src={imgWorld} className='phone' style={{ height: 60, width: 60, marginBottom: 5, marginTop: -40 }} />
              <motion.h1
                whileHover={{ scale: 1.1, originX: 0, color: '#0080ff' }}
                transition={{ type: 'spring', stiffness: 200, }}
                style={{ fontSize: '1.8rem', marginBottom: 1 }}>Social Media</motion.h1>
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
          </Cell>

        </Grid>
      </motion.div>
    </motion.div >

  )
}

export default ContactUs


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
    // color: 'green',
    marginTop: -40
  }
}