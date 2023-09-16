import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const ref = ['/', '/about', '/projects', '/contact', '/blog'];
const name = ['Home', 'Services', 'Projects', 'Company', 'Contact Us'];


interface MenuItemProps {
  i: number;
}

export const MenuItem = ({ i }: MenuItemProps) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link className='rounded-2xl px-4 text-current' href={ref[i]} style={style}>
        {name[i]}
      </Link>
    </motion.li>
  );
};