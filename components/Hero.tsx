import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words:[
    "Hi , the name is Prabhnoor",
    "Guy who loves Coffee.tsx",
    "<ButLovesToCodeMore/>"    
    ],
    loop: true,
    delaySpeed: 2000,
  });

    return (
    <div className="h-screen flex justify-center flex-col space-y-8 items-center  overflow-hidden">
        <BackgroundCircles></BackgroundCircles>
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src=""
        alt=""
        />
        <div className='z-20'>
        <h2 className="text-sm ml-12 uppercase text-gray-500 pb-2 tracking-[13px] ">
          Software Engineer
        </h2>
        <h1 className="text-2xl ml-12 lg:text-4xt font-semibold px-10">
          
        <span className="mr-3">{text}</span>
        <Cursor cursorColor='#F7AB0A'></Cursor>
        </h1>
        <div className="pt-5">
          <Link href="#about">
          <button className="heroButtons">About</button>
          </Link>
          <Link href="#about">
          <button className="heroButtons">Experience</button>
          </Link>
          <Link href="#about">
          <button className="heroButtons">Skills</button>
          </Link>
          <Link href="#about">
          <button className="heroButtons">Projects</button>
          </Link>
          
        </div>
        </div>
    </div>
  );
}