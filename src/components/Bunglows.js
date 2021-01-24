import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import img1 from '../images/main.jpg'
import img2 from '../images/main-1.jpg'
import img3 from '../images/main-2.jpg'
import img4 from '../images/exterior-1.jpg'
import img5 from '../images/Exterior-2.jpg'
import img6 from '../images/exterior-3.jpg'
import img7 from '../images/interior-1.jpg'
import img8 from '../images/interior-2.jpg'
import img9 from '../images/interior-3.jpg'
import './Bunglows.css';
import 'react-responsive-modal/styles.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';


// import { MDBGallery, MDBGalleryList } from 'mdbreact';

function Bunglows() {
  const dataImg = [
    { img: img1, },
    { img: img2, },
    { img: img3, },
    { img: img4, },
    { img: img5, },
    { img: img6, },
    { img: img7, },
    { img: img8, },
    { img: img9, },
    { img: img1, },
    { img: img2, },
    { img: img2, },
    { img: img2, },
    { img: img2, },
    { img: img2, },
    { img: img2, },
    { img: img2, },
    { img: img2, },
  ];

  const [Open, setOpen] = useState(false)
  // const [selectedIndex, setSelectedIndex] = useState(0)
  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [current, setCurrent] = useState(0);
  const totalImgCount = dataImg.length;

  const nextSlide = () => {
    setCurrent(current === totalImgCount - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalImgCount - 1 : current - 1);
  };
  if (!Array.isArray(dataImg) || dataImg.length <= 0) {
    return null;
  }

  const item2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div style={styles.bunglow}>
      <div style={styles.bunglowHeader} >
        <h1 style={{ fontSize: '1.4rem', color: 'white', textAlign: 'center' }}>Bungalows</h1>
      </div>

      <motion.div
        style={styles.imgContainer}
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {dataImg.map((item, index) => {
          return (
            <motion.img src={item.img} key={index} style={styles.img} className='img'
              variants={item2}
              whileHover={{ scale: 1.1, cursor: 'pointer' }}
              onClick={() => {
                setOpen(true)
                setCurrent(index)
              }}
            />
          )
        })}
      </motion.div>

      <Modal open={Open} onClose={onCloseModal}
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
          modal: 'customModal',
          overlay: 'customOverlay',
          closeIcon: 'closeButton',

        }}
        animationDuration={600}
        // showCloseIcon={false}
        center

      >
        <FaArrowAltCircleLeft className={Open ? 'left-arrow' : 'arrow'} onClick={prevSlide} />
        <FaArrowAltCircleRight className={Open ? 'right-arrow' : 'arrow'} onClick={nextSlide} />
        <img src={dataImg[current].img} className='modalImgArray' alt='' />
      </Modal>

      {/* </AnimateSharedLayout> */}
    </div >
  );
}

export default Bunglows;


const styles = {
  bunglow: {
    width: '100vw',
    height: '100vh',
    paddingTop: 10,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
  },
  bunglowHeader: {
    marginTop: 60,
    width: '100%',
    height: 30,
    backgroundColor: 'black',
  },
  img: {
    width: 400,
    height: 250,
    marginTop: 30,
    marginLeft: 30,
  },
  imgContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imgs: {
    display: 'flex',
  },
  modalImage: {
    // width: '100vw',
    // height: '80vh',
    // objactFit: 'center',
    width: '85vw',
    aspectRation: 1,
    // height: '39rem',
    marginLeft: 20,
  },
  modalConatiner: {
    display: 'flex',
    flexDirection: 'column',
  }
}