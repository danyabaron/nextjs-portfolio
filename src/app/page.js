import Head from 'next/head';
import Link from 'next/link';
import { IoSparklesSharp } from "react-icons/io5";
import Image from 'next/image';
// import HeroPic from '../../public/assets/profilepic.webp';
import HeroPic from '../../public/assets/DanyaBaronProfilePic.jpg';


import Figma from '../../public/assets/figma.webp';
import HTML from '../../public/assets/html.webp';
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
import PrototypeGif from '../../public/assets/prototypegif.gif';
import DCProj from '../../public/assets/DCtile.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

// import ProjMang from './projmang/page.js'; 



// import styles from './src/app/globals.css';
// import syles from"
import React from 'react';







export default function Home() {





  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    // </main>

    

    <div>
      <Head>
        <title>Danya Baron Portfolio</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
      </Head>


      <main className="bg-gradient-to-t from-gradient-bottom to-gradient-top overflow-y-scroll scroll-smooth no-scrollbar">
        <section className="min-h-screen">
        


        <nav className="py-10 mb-12 flex justify-between w-full">
            <div className="flex items-center ml-10">
    {/* IoSparklesSharp on the left */}
    {/* transform hover:text-hover-resume transition-all duration-500 hover:scale-110" */}
            <IoSparklesSharp className=" text-main-brown text-2xl " />   
    
         </div> 
            
            
            <ul className="flex items-center animate-fade-right animate-ease-in">
              {/* <li>
                
                <IoSparklesSharp className="cursor-pointer text-main-brown text-2xl mr-10 transform hover:scale-110"/>
              </li> */}


            <li>
              <a href="#projects" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500" scroll={false}>Projects</a>
              </li>



              <li>
                <a href="#about" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500" scroll={false}>About</a>
              </li>

              <li>
              <a href="#skills" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500" scroll={false}>Skills</a>
              </li>

             

              
              {/* <li>
              <a href="#contact" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500" scroll={false}>Contact</a>
              </li> */}
            </ul>
          </nav>


          <div id="hero" className="flex items-center justify-center w-screen gap-y-3 p-6 mb-12">
            <div id="hero-img" className='mr-6 rounded-lg'>
              <Image src={HeroPic} className="rounded-lg" width="400" height="500" alt="Profile Picture" unoptimized />
            </div>
            <div id="hero-txt" className='flex flex-col items-center p-5 gap-5'>
              <h1 className='text-3xl font-helvetica-medium drop-shadow-md text-main-brown animate-flip-up animate-once'> Hey there, I'm Danya Baron</h1>
              <h2 className='text-2xl font-helvetica-light  text-main-brown'>UX/UI Designer | Interaction Design Specialist</h2>


            <div id="edu-text" className='flex flex-col items-center text-center'>
            <h3 className='text-md font-helvetica-medium mb-3  text-main-brown'> B.S. in Computer Science</h3>
             <h3 className='text-md font-helvetica-light  text-main-brown text-center text-wrap max-w-[500px]'> Currently pursuing Masters in <a href="https://www.ucf.edu/degree/digital-media-ma/" target="_blank" className=" hover:underline text-hover-resume font-helvetica-italic transform hover:scale-105 transition-all duration-500">Digital Media</a> with a focus in Human Computer Interaction</h3>
             </div>

              {/* <a href="https://drive.google.com/file/d/1BLGFYnR3tKpEgkELntWggtDy0rktL-gN/view?usp=sharing" target="_blank">
                <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-bold py-2 px-4 w-40 h-12 rounded-full">
                  View Resume
                  {/* <a href="https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing" targer="_blank"></a> */}
                {/* </button>

              </a> */} 
              
            </div>
      </div>

                  {/* Projects here */}

                  <div id="projects" className="flex items-center flex-col justify-center w-screen py-8 mb-9 gap-x-1">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>Projects</h1>



            <div id="nasa" className="grid grid-rows-1 justify-center items-center grid-flow-col ">
              {/* <Image src={} alt="Design & Code Project Management" width={475} height={337} loading="lazy" className="rounded-2xl drop-shadow-md"/> */}
            <div id="pented-info" className="bg-gradient-top flex flex-col drop-shadow-lg justify-center items-center m-12 p-4 gap-7 rounded-3xl">
                <h2 className="font-helvetica-italic text-xl mt-5 text-main-brown">
                  NASA UX/UI Design Intern Project
                </h2>
                <p className="font-helvetica text-md text-main-brown w-full px-5 text-center text-wrap ">
                  Coming soon.
                </p>

               
              {/* </a> */}
            </div>
          </div>

            <div id="projects-0.5" className="grid grid-rows-1 justify-center items-center grid-flow-col ">
              <Image src={DCProj} alt="Design & Code Project Management" width={475} height={337} loading="lazy" className="rounded-2xl drop-shadow-md"/>
            <div id="pented-info" className="bg-gradient-top flex flex-col drop-shadow-lg justify-center items-center m-12 p-4 gap-7 rounded-3xl">
                <h2 className="font-helvetica-italic text-xl mt-5 text-main-brown">
                  UCF Design & Code Project Management
                </h2>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                  A task management web application that helps UCF Design and Code members and club officers efficiently organize and track projects using a Kanban-inspired interface.
                  The goal of the project was to implement a web app facilitating project and team management for club members and officers. Created with Figma.
                </p>

                <Link href="/projmang">
                
                <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-medium py-2 px-4 w-30 h-12 mb-5 text-med rounded-full">
                View Design
                {/* <a href="https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing" targer="_blank"></a> */}
              </button>
              </Link>
              {/* </a> */}
            </div>
          </div>

          <div id="projects-4" className="grid grid-rows-1 justify-center items-center grid-flow-col">
              <Image src={Factor} alt="7Factor" loading="lazy" className="rounded-2xl drop-shadow-md" />
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


            
            <div id="projects-1" className="grid grid-rows-1 justify-center items-center grid-flow-col">
              <Image src={Pented} alt="Pented" loading="lazy" className="rounded-2xl drop-shadow-md" />
            <div id="pented-info" className="bg-gradient-top flex flex-col drop-shadow-lg justify-center items-center m-12 p-4 gap-7 rounded-3xl">
                <h2 className="font-helvetica-italic text-xl mt-5 text-main-brown">
                  Case Study: Education App Design 
                </h2>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                Pented is a mobile education app that caters to underprivileged middle school students in Gujarat, India. The goal of the project was to redesign an enhanced experience for their users and a solution to showcase their offerings better, keeping current design standards and gamification in mind. Created with Figma.
                </p>

                <a href="https://www.behance.net/gallery/161733587/Education-App-Design" target="_blank">
                <button className="bg-main-brown drop-shadow-md hover:bg-hover-resume transform hover:scale-105 transition-all duration-500 text-text-pink font-helvetica-medium py-2 px-4 w-30 h-12 mb-5 text-med rounded-full">
                View Case Study
                {/* <a href="https://drive.google.com/file/d/1WIukyHATChIq1QAiRcVO4FhO-4OQ60uG/view?usp=sharing" targer="_blank"></a> */}
              </button>
              </a>
            </div>
          </div>


          
        </div>











          <div id="about" className="flex items-center flex-col justify-center w-screen py-10 mb-9 gap-x-1 gap-5">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>About</h1>
            <p className='text-xl font-helvetica-light text-hover-resume text-center text-wrap max-w-[800px]'>
            Hello, I’m Danya <span className='font-helvetica-italic text-hover-resume'>(pronounced like dawn-yuh)</span>, and I'm a versatile designer fluent in the topics and language of human-computer interaction. 
            I love all things product, and designing impactful & functional experiences for real people. When designing, 
            I draw from my formal education in Computer Science and hands-on experience with project management, software engineering, 
            cross-collaboration, and my own user experiences. 
            </p>
            <p className='text-xl font-helvetica-light text-hover-resume text-center text-wrap max-w-[800px]'>
            As an engineer turned designer, I became interested in product design back when I took a Human Computer Interaction course 
            in my undergraduate studies. When working as an engineer, I noticed I was more attentive to a prototype’s aesthetics and how it flowed 
            to the user. I ended up taking ZeroToMastery's <a href="https://zerotomastery.io/courses/learn-web-design/" target="_blank" className=" hover:underline text-hover-resume font-helvetica-italic transform hover:scale-105 transition-all duration-500">Complete Mobile & Web Design course</a>, where I learned Figma & UI/UX practices, and immediately fell in love. 
            I am now pursuing a Master’s degree in Digital Media, where I’m learning all about interaction design, artificial intelligence, and critical media practices in computational media. 
            </p>
            <p className='text-xl font-helvetica-light text-hover-resume text-center text-wrap max-w-[800px]'>
            When I’m not creating components in Figma, I love to work-out (currently weight-lifting + dance are my jam), 
            read books, binge anime, and travel! I’m a team player, and always open to collaborating with like-minded individuals. 
            Let’s chat! Feel free to message me at <a href="mailto:danyabaronui@gmail.com" target="_blank" className=" hover:underline text-hover-resume font-helvetica-italic transform hover:scale-105 transition-all duration-500">danyabaronui@gmail.com</a>. 
            </p>

          </div>
          
          <div id="skills" className="flex items-center flex-col justify-center w-screen py-10 mb-12">
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






         
        








        {/* <div id="contact" className="flex items-center flex-col justify-center w-screen mb-9 py-8 gap-x-1">
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
                  {/* </button>
            </a>
          </div>

        </div>  */}

      <footer className="bg-main-brown text-text-pink">
      <div id="footer" className="flex flex-col items-center justify-center w-screen gap-5 py-10">
          <div className="flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/danyabaron/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
              </a>
              <a href="https://dribbble.com/danyabaronui" target="_blank" rel="noopener noreferrer">
                <FaDribbble className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
              </a>
              <a href="https://www.behance.net/danyabaron16" target="_blank" rel="noopener noreferrer">
                <FaBehance className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
              </a>
               
               <a href="https://github.com/danyabaron" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
              </a>
             

          </div>
          <p className="font-helvetica-light text-xl text-text-pink">&copy; Designed and Coded by Danya Baron. 2024.</p>
        </div>

      </footer>
        

       
          
        </section>
      </main>
    </div>
  )
}
