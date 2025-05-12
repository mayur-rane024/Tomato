import React from 'react'
import './Header.css'
import {motion} from 'framer-motion'
import {fadeIn} from "../variants"

const Header = () => {
  return (
    <motion.div 
    variants = {fadeIn("up" , 0.2)}
    initial = "hidden"
    whileInView ={ "show"}
    viewport = {{once : false , amount:0.5}}

    className = 'header'>
    <div className="header-contents">
        <h2>Order your favourite food</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with a finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
        <button>View Menu</button>
    </div>
    </motion.div>
  )
}

export default Header
