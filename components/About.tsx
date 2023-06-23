import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity:0}}
        whileInView={{opacity: 1}}
        transition={{ duratiob: 1.5}}
        >
    <div className="flex flex-col relative h-screen tect-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
    
    <h3 className="absolute top-24 uppercase tracking-[20px]
     text-gray-500 text-2xl">
        About
        </h3>

        <motion.img initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity:1, x:0}}
            viewport={{ once : true}}
            src="/assets/new.JPEG"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
            object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] pt-6">
            
        </motion.img>
        <div className="space-y-10 px-0 md:px-10 justify-center">
            <h4 className='text-4xl font-semibold'>Here is a <span className="underline decoration-[#F7AB0A]">little</span>{" "}background</h4>
        <p className='text-sm'>
        A highly motivated and results driven software developer with 3 years of industry experience in various technologies, seeking a
challenging position where I can leverage my technical skills and knowledge to drive project success. I am a
creative problem solver who is driven by a passion for innovation and a commitment to deliver exceptional
results.

        </p>
        
        </div>
    </div>
    </motion.div>
  )
}