import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Card({ src, name, handleClick, id }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ rotateY: 360 });
  }, [id, controls]);

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
