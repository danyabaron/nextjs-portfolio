import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IoSparklesSharp } from "react-icons/io5";
import Image from 'next/image';
import ProjTile from '../../../public/assets/projmangTile.png';
import ProjTileDiag from '../../../public/assets/projmangTileDiagnol.png';
import DesignCodeLogo from '../../../public/assets/designcodelogo.png';
import 'tailwindcss/tailwind.css';






export default function ProjMang() {
    return (
        <div>
        
        <main className="bg-gradient-to-t from-gradient-bottom to-gradient-top overflow-y-scroll scroll-smooth no-scrollbar">
        <section className="min-h-screen">

        <nav className="py-10 mb-12 flex justify-between w-full">

        <div className="flex items-center ml-10">
    
            <IoSparklesSharp className="text-main-brown text-2xl transform hover:text-hover-resume transition-all duration-500 hover:scale-110" />   
  
         </div>
        
        </nav>

        <div id="projheader" class="w-screen items-center flex flex-row gap-9 mb-9 rounded-3xl">
            <div id="proj-text" className="columns-4 flex flex-col ml-12 justify-center items-center w-screen gap-5">
                <h2 className="text-3xl font-helvetica-medium drop-shadow-md text-main-brown">Project Management Design</h2>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris nunc, ornare ut velit eu, 
                    sagittis laoreet ante. Sed porttitor felis non ligula aliquam lacinia
                </p>
                <h3 className="text-xl font-helvetica-medium drop-shadow-sm text-main-brown">
                    Timeline

                </h3>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    November-December (4 weeks)
                </p>
                <h3 className="text-xl font-helvetica-medium drop-shadow-sm text-main-brown">
                    Design Role

                </h3>

                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    Product, UI/UX, Research
                </p>

            </div>
            {/* width={300} height={300} */}

            <div id="proj-img" className="columns-2 flex flex-col bg-white mr-12 justify-center gap-5">
                <Image src={ProjTile} alt="proj mang 1" width={1200} height={674} className="drop-shadow-md" />
                <Image src={ProjTileDiag} alt="proj mang 2" width={1200} height={674} className="drop-shadow-md" />



            </div>
            

        </div>
        <div id="introduction" className="flex flex-row justify-center w-screen py-8 mb-9">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-main-brown'>Introduction</h1>
           
            <div id="intro-text">
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris nunc, ornare ut velit eu, sagittis laoreet ante. Sed porttitor 
                felis non ligula aliquam lacinia. Duis ut ex nec est laoreet aliquet in nec felis. Mauris a accumsan mi. Phasellus id mauris accumsan, 
                imperdiet magna in, elementum velit. Pellentesque bibendum purus metus, at fermentum massa consequat laoreet. Ut sit amet diam ut metus 
                gravida iaculis eu venenatis turpis. 
                Aliquam egestas massa dapibus metus placerat, vitae vulputate nisi eleifend. Pellentesque tincidunt risus mauris,
                 nec dapibus risus tristique et.
                </p>
            </div>
            <div id="intro-pic">
                <Image src={DesignCodeLogo} alt="design and code logo" className="drop-shadow-md" />
            </div>

        </div>
           



          </section>
      </main>
    </div>
    );
}


