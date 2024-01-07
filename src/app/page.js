import Head from 'next/head';
import { IoSparklesSharp } from "react-icons/io5";
import Image from 'next/image';
import HeroPic from '../../public/assets/profilepic.png';
import Figma from '../../public/assets/figma.png';
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


      <main className="bg-gradient-to-t from-gradient-top to-gradient-bottom px-10 overflow-y-scroll scroll-smooth no-scrollbar">
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
                <a href="#" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">About</a>
              </li>

              <li>
              <a href="#" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Skills</a>
              </li>

              <li>
              <a href="#" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Projects</a>
              </li>

              
              <li>
              <a href="#" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
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
          <div id="about" className="flex items-center flex-col justify-center w-screen py-10 mb-12 gap-x-1">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>About</h1>
            <p className='text-xl font-helvetica-light text-main-brown text-center text-wrap max-w-[800px]'>
            Hello, I’m Danya (dawn-yuh), a highly motivated UI/UX Designer and Front-End Web Developer currently pursuing a Master’s degree in Digital Media at the University of Central Florida. I am passionate about creating applications that are not only visually appealing but also deeply impactful to users. My goal is to seamlessly blend aesthetics with functionality, crafting digital experiences that leave a lasting impression. 
            </p>


          </div>
          <div id="skills" className="flex items-center flex-col justify-center w-screen py-10 mb-12 gap-x-1">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>Skills</h1>
              <div id="skills-section1" className="w-full h-full bg-main-brown rounded-3xl">
                <div>
                  <Image src={Figma} alt="Figma"/>
                  <h3>Figma</h3>
                </div>

              </div>



          </div>
       
          
        </section>
      </main>
    </div>
  )
}
