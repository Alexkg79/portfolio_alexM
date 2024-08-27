import React from 'react';
import { motion } from 'framer-motion';
import '../styles/TitleCard.scss';

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const underlineVariants = {
  hidden: { width: "0%" },
  visible: { 
    width: "50%",
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      delay: 0.3
    } 
  }
};

function TitleCard({ title }) {
  return (
    <div className="title-card-container">
      <motion.h2 
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        variants={titleVariants}
      >
        {title}
        <motion.span 
          className="underline"
          variants={underlineVariants}
        />
      </motion.h2>
    </div>
  );
}

export default TitleCard;