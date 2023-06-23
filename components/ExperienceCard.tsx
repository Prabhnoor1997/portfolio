import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  experience:{
    logo:string,
    bullets:string[],
    date:string,
    title:string,
    city:string,
    tech:string[]
  },
  index:number
}

export default function ExperienceCard({experience,index}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center p-10
    bg-[#292929] hover:opacity-100 opacity-60 cursor-pointer 
    overflow:hidden
    ">
        <motion.img 
        className="w-32 h-32 rounded-full object-cover 
        object-center"
        src={experience.logo}
        alt="">

        </motion.img>

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{experience.title}</h4>
            <p className="font-bold-text-2xl mt-`">{experience.city}</p>
            <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full"
                src={experience.tech[0]}
                alt=""
                >
                    
                </img>
                <img className="h-10 w-10 rounded-full"
                src={experience.tech[1]}
                alt=""
                >
                    
                </img>
                <img className="h-10 w-10 rounded-full"
                src={experience.tech[2]}
                alt=""
                >
                    
                </img>
                <img className="h-10 w-10 rounded-full"
                src={experience.tech[3]}
                alt=""
                >
                    
                </img>
                {/*tech used*/}
                {}
                {}
            </div>
            <p className="uppercase py-5text-gray-300">
              {experience.date}</p>
            <ul className='list-disc space-y-4 ml-5 text-m'>
                <li>{experience.bullets[0]}</li>
                <li>{experience.bullets[1]}</li>
                <li>{experience.bullets[2]}</li>
                <li>{experience.bullets[3]}</li>

            </ul>
        </div>
    </article>

    
  )
}