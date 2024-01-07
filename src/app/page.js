import Head from 'next/head';
import { IoSparklesSharp } from "react-icons/io5";
import Image from 'next/image';
import HeroPic from '../../public/assets/profilepic.png';
import Figma from '../../public/assets/figma.png';
import HTML from '../../public/assets/html.png';
import CSS from '../../public/assets/css.png';
import JS from '../../public/assets/javascript.png';
import VSCODE from '../../public/assets/vscode.png';
import Git from '../../public/assets/git.png';
import Jira from '../../public/assets/jira.png';
import Pented from '../../public/assets/pentedTile.png';
import DigBalance from '../../public/assets/digbalance.png';
import Solar from '../../public/assets/solarsystem.png';
// import 7Factor from '../../public/assets/7factorTile.png';

// import styles from './src/app/globals.css';
// import syles from"
import React from 'react';


// const openResume = () => {
//   // Replace 'https://example.com' with the actual URL you want to open
//   const url = 'https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing';

//   // Open the link in a new tab
//   window.open(url, '_blank');
// };




export default function Home() {





  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    // </main>

    

    <div>
      <Head>
        <title>Danya Baron Portfolio</title>
      </Head>


      <main className="bg-gradient-to-t from-gradient-bottom to-gradient-top px-10 overflow-y-scroll scroll-smooth no-scrollbar">
        <section className="min-h-screen">
        


          <nav className="py-10 mb-12 flex justify-between w-full">
            <div className="flex items-center">
    {/* IoSparklesSharp on the left */}
            <IoSparklesSharp className=" text-main-brown text-2xl transform hover:text-hover-resume transition-all duration-500 hover:scale-110" />   
    {/* Other content on the left (if any) */}
    {/* Add your additional content here */}
         </div>
            
            
            <ul className="flex items-center">
              {/* <li>
                
                <IoSparklesSharp className="cursor-pointer text-main-brown text-2xl mr-10 transform hover:scale-110"/>
              </li> */}
              <li>
                <a href="#about" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">About</a>
              </li>

              <li>
              <a href="#skills" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Skills</a>
              </li>

              <li>
              <a href="#projects" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Projects</a>
              </li>

              
              <li>
              <a href="#contact" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Contact</a>
              </li>
            </ul>
          </nav>


          <div id="hero" className="flex items-center justify-center w-screen gap-y-3 py-10 mb-12">
            <div id="hero-img" className='mr-6'>
              <Image src={HeroPic} alt="Profile Picture" width={300} height={300} />
            </div>
            <div id="hero-txt" className='flex flex-col m-10 items-center gap-x-0.5'>
              <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'> Hey there, I'm Danya Baron</h1>
              <h2 className='text-2xl font-helvetica-light mb-9 text-main-brown'> UI/UX Designer and Front End Developer</h2>

              <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-bold py-2 px-4 w-40 h-12 rounded-full">
                View Resume
                {/* <a href="https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing" targer="_blank"></a> */}
              </button>
            </div>
          
          

          </div>
          <div id="about" className="flex items-center flex-col justify-center w-screen py-10 mb-9 gap-x-1">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>About</h1>
            <p className='text-xl font-helvetica-light text-main-brown text-center text-wrap max-w-[800px]'>
            Hello, I’m Danya (dawn-yuh), a highly motivated UI/UX Designer and Front-End Web Developer currently pursuing a Master’s degree in Digital Media at the University of Central Florida. I am passionate about creating applications that are not only visually appealing but also deeply impactful to users. My goal is to seamlessly blend aesthetics with functionality, crafting digital experiences that leave a lasting impression. 
            </p>


          </div>
          <div id="skills" className="flex items-center flex-col justify-center w-screen py-10 mb-9">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>Skills</h1>
              <div id="skills-section1" className="grid grid-rows-1 justify-center grid-flow-col bg-main-brown rounded-3xl px-5 py-2">
                <div className="flex flex-col items-center m-5">
                  <Image src={Figma} alt="Figma"/>
                  <h3 className="mt-3 font-helvetica-light text-xl text-text-pink">Figma</h3>
                </div>
                <div className="flex flex-col items-center m-5">
                  <Image src={HTML} alt="HTML"/>
                  <h3 className="mt-3 font-helvetica-light text-xl text-text-pink">HTML</h3>
                </div>
                <div className="flex flex-col items-center m-5">
                  <Image src={CSS} alt="CSS"/>
                  <h3 className="mt-3 font-helvetica-light text-xl text-text-pink">CSS</h3>
                </div>
                <div className="flex flex-col items-center m-5">
                  <Image src={JS} alt="JS"/>
                  <h3 className="mt-3 font-helvetica-light text-xl text-text-pink">JavaScript</h3>
                </div>

              </div>

              <div id="skills-section2" className="grid grid-rows-1 justify-center grid-flow-col bg-main-brown mt-9 rounded-3xl px-5 py-2">
                <div className="flex flex-col items-center m-5">
                  <Image src={VSCODE} alt="VSCode"/>
                  <h3 className="mt-3 font-helvetica-light text-xl text-text-pink">VSCode</h3>
                </div>
                <div className="flex flex-col items-center m-5">
                  <Image src={Git} alt="Git"/>
                  <h3 className="mt-3 font-helvetica-light text-xl text-text-pink">Git</h3>
                </div>
                <div className="flex flex-col items-center m-5">
                  <Image src={Jira} alt="Jira"/>
                  <h3 className="mt-3 font-helvetica-light text-xl text-text-pink">Jira</h3>
                </div>


              </div>




          </div>
          <div id="projects" className="flex items-center flex-col justify-center w-screen py-10 mb-9 gap-x-1">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>Projects</h1>
            
            <div id="projects-1" className="grid grid-rows-1 justify-center items-center grid-flow-col">
              <Image src={Pented} alt="Pented"/>
              <div id="pented-text" className="bg-gradient-bottom p-4 rounded-md">
                <p>
                  blah balh
                </p>
              </div>



            </div>













          </div>
       
          
        </section>
      </main>
    </div>
  )
}
