import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects=[1,2,3,4];
  return (
    <motion.div 
    initial={{ opacity : 0}}
    whileInView={{ opacity : 1}}
    transition={{ duration: 1.5}}
    className="h-screen relative flex overflow-hidden flex-col text-left
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className= "absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl">
        projects </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
          {projects.map((project , i) =>(
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration : 1.2}}
              whileInView = {{opacity : 1, y : 0}}
              viewport={{ once : true}}
                src="assets\RW7_KpggU1vsjv_bYnsbmVlyjV8r6If_NoV5CGejkEc-removebg-preview.png"
                alt=""/>

                <div className="space-y-10 px-0 md:px-10 max-w-6xl"> 
                  <h4 className="text-4xl font-semibold text-center">
                    <span className= "underline decoration-[#F7AB0A]/50">
                      Fundoo Notes 
                    </span>
                  </h4>

                  <p>
                  A note taking application for the browsers. Fundoo is a rather simplistic application that allows notes to be organized in folders, labels and archived, similar to Keep, as well as easily shared with others. Images can be inserted. Reminders can also be set.
                  </p>
                  </div>
            </div>
          ))}

        </div>
        

        <div className="w-full absolute top=[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>
        
        
        </motion.div>
  )
}

export default Projects