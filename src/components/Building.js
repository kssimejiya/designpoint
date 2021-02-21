import React, { useState } from 'react'
import img1 from '../images/interior/1.jpg'
import img2 from '../images/interior/2.jpg'
import img3 from '../images/interior/3.jpg'
import img4 from '../images/exterior/1.jpg'
import img5 from '../images/exterior/2.jpg'
import img6 from '../images/exterior/3.jpg'
import img7 from '../images/interior/4.jpg'
import img8 from '../images/interior/5.jpg'
import img9 from '../images/interior/6.jpg'
import img10 from '../images/exterior/4.jpg'
import img11 from '../images/exterior/5.jpg'
import img12 from '../images/exterior/6.jpg'
import img13 from '../images/interior/7.jpg'
import img14 from '../images/interior/8.jpg'
import img15 from '../images/interior/9.jpg'
import img16 from '../images/interior/10.jpg'
import img17 from '../images/interior/11.jpg'
import img18 from '../images/interior/12.jpg'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Buildings.css'
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
  { img: img12, },
  { img: img13, },
  { img: img14, },
  { img: img15, },
  { img: img16, },
  { img: img17, },
  { img: img18, },
];
function Building() {

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
      className='building'>
      <div className='building_header'>
        <h1 style={{ fontSize: '1.4rem', color: 'white', textAlign: 'center' }}>Buildings</h1>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className='imgContainerrr'>
        {dataImgs.map((item, index) => {
          return (
            <motion.img
              variants={item2}
              whileHover={{ scale: 1.1, cursor: 'pointer' }}
              src={item.img}
              key={index}
              className='imgss'
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
          <FaArrowAltCircleLeft className={Open ? 'left-arrowww' : 'arrowww'} onClick={prevSlide} />
          <FaArrowAltCircleRight className={Open ? 'right-arrowww' : 'arrowww'} onClick={nextSlide} />
          <img src={dataImgs[current].img} className='modalImgArrayy' alt='' />
        </Modal>
      </motion.div>
    </motion.div>
  )
}

export default Building
