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
import Factor from '../../public/assets/7factorTile.png';
import sparkle from '../../public/assets/sparkle.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";



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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" type="image/x-icon" href='public/assets/sparkle.png'></link>
      </Head>


      <main className="bg-gradient-to-t from-gradient-bottom to-gradient-top overflow-y-scroll scroll-smooth no-scrollbar">
        <section className="min-h-screen">
        


          <nav className="py-10 mb-12 flex justify-between w-full">
            <div className="flex items-center ml-10">
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

              <a href="https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing" target="_blank">
                <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-bold py-2 px-4 w-40 h-12 rounded-full">
                  View Resume
                  {/* <a href="https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing" targer="_blank"></a> */}
                </button>

              </a>
              
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
          <div id="projects" className="flex items-center flex-col justify-center w-screen py-8 mb-9 gap-x-1">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>Projects</h1>
            
            <div id="projects-1" className="grid grid-rows-1 justify-center items-center grid-flow-col">
              <Image src={Pented} alt="Pented" width={400} height={400}/>
            <div id="pented-info" className="bg-gradient-top flex flex-col drop-shadow-lg justify-center items-center m-12 p-4 gap-7 rounded-3xl">
                <h2 className="font-helvetica-italic text-xl mt-5 text-main-brown">
                  Case Study: Education App Design 
                </h2>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                Pented is a mobile education app that caters to underprivileged middle school students in Gujarat, India. Used Figma for entire project. The goal of the project was to redesign an enhanced experience for their users and a solution to showcase their offerings better, keeping current design standards and gamification in mind.
                </p>

                <a href="https://www.behance.net/gallery/161733587/Education-App-Design" target="_blank">
                <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-medium py-2 px-4 w-30 h-12 mb-5 text-med rounded-full">
                View Case Study
                {/* <a href="https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing" targer="_blank"></a> */}
              </button>
              </a>
            </div>
          </div>


            <div id="projects-2" className="grid grid-rows-1 justify-center items-center  grid-flow-col">
              <Image src={DigBalance} alt="DigBalance" width={400} height={400}/>
            <div id="culture-info" className="bg-gradient-top flex flex-col drop-shadow-lg justify-center items-center m-12 p-4 gap-7 rounded-3xl">
                <h2 className="font-helvetica-italic text-xl mt-5 text-main-brown">
                  Culture Jam Website
                </h2>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                Website for a final project in my masters program at UCF that I designed and developed myself using Figma, HTML, and CSS. Goal of the project was to convince the audience towards a satirical mission. Designed this for the target user audience. Designed this using common design protocols and user research methods.
                </p>

                <a href="https://danyabaron.github.io/dig6647finalproj/" target="_blank">
                  <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-medium py-2 px-4 w-30 h-12 mb-5 text-med rounded-full">
                  View Site
                  {/* <a href="https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing" targer="_blank"></a> */}
                  </button>

                </a>
                
            </div>
          </div>

          <div id="projects-3" className="grid grid-rows-1 justify-center items-center grid-flow-col">
              <Image src={Solar} alt="Solar" width={400} height={400}/>
            <div id="solar-info" className="bg-gradient-top flex flex-col drop-shadow-lg items-center m-8 p-4 gap-7 rounded-3xl">
                <h2 className="font-helvetica-italic text-xl mt-5 text-main-brown">
                  Solar System Simulation
                </h2>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                A solar system simulation I made in Javascript using p5.js for a final project in my Masters program at UCF. Planets move as they normally do in our solar system, and have a calculated speed. Used objected oriented programming concepts to determine orbit radius as well as speed, color, size, and label of planet. Utilized Visual Studio Code, Git, and JavaScript heavily.
                </p>
                

                <a href="https://danyabaron.github.io/dig5508projects/finalprojv2/" target="_blank">
                  <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-medium py-2 px-4 w-30 h-12 mb-5 text-med rounded-full">
                  View Simulation
                  
                  </button>
              </a>
            </div>
          </div>

          <div id="projects-4" className="grid grid-rows-1 justify-center items-center grid-flow-col">
              <Image src={Factor} alt="7Factor" width={400} height={400}/>
            <div id="factor-info" className="bg-gradient-top flex flex-col drop-shadow-lg justify-center items-center m-12 p-4 gap-7 rounded-3xl">
                <h2 className="font-helvetica-italic text-xl mt-5 text-main-brown">
                  7Factor Corporate Website
                </h2>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                Major Qualifying Project for my undergraduate degree.
                Objective was to develop a feature-rich website for our sponsor per their provided design specifications. Used common web design and development practices to create an interactive website that showcased 7Factor’s mission.
                </p>

                <div id="buttons-factor" className="flex flex-row gap-5">

                  <a href="https://7factor.io/" target="_blank">
                    <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-medium py-2 px-4 w-30 h-12 mb-5 text-med rounded-full">
                    View Site
                    
                    </button>

                  </a>


                  
                <a href="https://drive.google.com/file/d/1Xx3mYPXf8b2xRLf3h9ri6KP0kl_Zrvd-/view?usp=sharing" target="_blank">
                  <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-medium py-2 px-4 w-30 h-12 mb-5 text-med rounded-full">
                    View Report
                    
                  </button>

                </a>
              

                </div>
                
            </div>
          </div>
        </div>
        
        <div id="contact" className="flex items-center flex-col justify-center w-screen mb-9 py-8 gap-x-1">
        <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>Contact</h1>
          <div id="contact-info" className="bg-gradient-top flex flex-col drop-shadow-lg justify-center items-center mx-auto p-8 gap-5 rounded-3xl">
            <p className="font-helvetica text-xl text-main-brown px-5 text-center m-4 text-wrap max-w-[500px]">
            Feel free to reach out to me regarding any collaborations
            or inquires. I look forward to hearing from you!
            </p>

            <a href="mailto:danyabaronui@gmail.com">
              <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-medium py-2 px-4 w-30 h-12 mb-5 text-med rounded-full">
                    Email Me
                    {/* <a href="https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing" targer="_blank"></a> */}
                  </button>
            </a>
          </div>

        </div>

      <footer className="bg-main-brown text-text-pink">
      <div id="footer" className="flex flex-col items-center justify-center w-screen gap-5 py-10">
          <div className="flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/danyabaron/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
              </a>
              <a href="https://github.com/danyabaron" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
              </a>
              <a href="https://www.behance.net/danyabaron16" target="_blank" rel="noopener noreferrer">
                <FaBehance className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
              </a>
             

          </div>
          <p className="font-helvetica-light text-text-pink">&copy; 2024 Danya Baron. All rights reserved.</p>
        </div>

      </footer>
        

       
          
        </section>
      </main>
    </div>
  )
}
