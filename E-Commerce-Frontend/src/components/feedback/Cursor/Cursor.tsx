import { motion } from 'framer-motion';

type TPosition= {
    
    width:number;
    left:number;
    opacity:number
}

const Cursor = ({ position}: {position:TPosition}) => {
  return (
    <motion.div animate={{...position,}} className=" !absolute z-50 bottom-0 h-0.5 bg-[var(--bg-secondary)] left-0" ></motion.div>
  )
}

export default Cursor