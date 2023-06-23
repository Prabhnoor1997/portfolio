import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7x1 mx-auto z-20 p-5">
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1.5,
        }}>

        <div className="flex flex-row items-center">
            <SocialIcon 
            url="https://www.github.com/Prabhnoor1997"
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon 
            url="https://www.linkedin.com/in/Prabhnoorbhattal"
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon 
            url="https://www.instagram.com/parrybhattal"
            fgColor='gray'
            bgColor='transparent'
            />
            
        </div>
        </motion.div>
        <div>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1.5,
        }}>
        <SocialIcon 
            className='cursor-pointer'
            network="email"
            fgColor='gray'
            bgColor='transparent'
            url='mailto:prabhnoor.parry@gmail.com'
            />
            <p className='uppercase hidden md:inline-flex text-gray-400'>Get in Touch</p>
            </motion.div>
        </div>
        
    </header>
  )
}

export default Header