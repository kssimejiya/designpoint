import React, { useState } from 'react'
import img1 from '../images/office-1.jpeg'
import img2 from '../images/office-2.jpeg'
import img3 from '../images/office-3.jpeg'
import img4 from '../images/office-4.jpeg'
import img5 from '../images/office-5.jpeg'
import img6 from '../images/office-6.jpeg'
import img7 from '../images/office-7.jpeg'
import img8 from '../images/office-8.jpeg'
import img9 from '../images/office-9.jpeg'
import img10 from '../images/office-10.jpeg'
import img11 from '../images/office-11.jpeg'
import img12 from '../images/office-12.jpeg'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Offices.css'
import { Modal } from 'react-responsive-modal'


const dataImgs = [
  { img: img1, },
  { img: img2, },
  { img: img3, },
  { img: img4, },
  { img: img5, },
  { img: img6, },
  { img: img7, },
  { img: img8, },
  { img: img9, },
  { img: img10, },
  { img: img11, },
  { img: img12, }
];
function Offices() {

  const onCloseModal = () => setOpen(false);
  const [Open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0);
  const totalImgCount = dataImgs.length;

  const nextSlide = () => {
    setCurrent(current === totalImgCount - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalImgCount - 1 : current - 1);
  };
  if (!Array.isArray(dataImgs) || dataImgs.length <= 0) {
    return null;
  };


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  };

  const item2 = {
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
      transition={{ duration: 0.5 }}
      className='office'>
      <div className='office_header'>
        <h1 style={{ fontSize: '1.4rem', color: 'white', textAlign: 'center' }}>Offices</h1>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className='imgContainer'>
        {dataImgs.map((item, index) => {
          return (
            <motion.img
              variants={item2}
              whileHover={{ scale: 1.1, cursor: 'pointer' }}
              src={item.img}
              key={index}
              className='images'
              onClick={() => {
                console.log('clickedd')
                setOpen(true)
                setCurrent(index)
              }}
            />
          )
        })}
        <Modal
          open={Open}
          onClose={onCloseModal}
          animationDuration={500}
          center
        >
          <FaArrowAltCircleLeft className={Open ? 'left-arroww' : 'arroww'} onClick={prevSlide} />
          <FaArrowAltCircleRight className={Open ? 'right-arroww' : 'arroww'} onClick={nextSlide} />
          <img src={dataImgs[current].img} className='modalImageArray' alt='' />
        </Modal>
      </motion.div>
    </motion.div>
  )
}

export default Offices
