import type { NextPage } from 'next'
import Head from "next/head";
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '../../components/Projects';
// import ContactMe from '@/components/ContactMe';

///import styles from "../../dist/output.css";//

const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            <Head>
                <title> Parry&aposs Portfolio</title>
            </Head>
            <Header/>
            <section id="hero" className="snap-center">
            <Hero></Hero>
            </section>
           {/*Header*/}
           <section id="about" className="snap-center">
            <About></About>
            </section>
            <section id="experience" className="snap-center">
                <WorkExperience></WorkExperience>
            </section>
            <section id="Skills" className="snap-center">
                <Skills></Skills>
            </section>

            <section id='project' className='snap-start'>
            <Projects></Projects>
            </section>

            {/* <section id='contact' className='snap-start'>
                <ContactMe></ContactMe>
            </section> */}
        </div>
    );
};
export default Home 
