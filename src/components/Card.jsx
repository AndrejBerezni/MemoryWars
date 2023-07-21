import React from 'react';
import { motion} from 'framer-motion';

export default function Card({ src, name, handleClick, id }) {

  return (
    <motion.div
      className='card'
      onClick={() => handleClick(id)}
      animate={{
        opacity: 1,
        rotateY: 360
      }}
      initial={{
        opacity: 0,
        rotateY:180
      }}
      transition={{
        duration: 0.7,
        delay: id/12
      }}
    >
      <img src={src} alt={name} />
      <p>{name}</p>
    </motion.div>
  );
}
