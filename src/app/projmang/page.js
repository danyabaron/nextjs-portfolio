import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IoSparklesSharp } from "react-icons/io5";
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

        <div id="projheader" class="w-screen rounded-3xl">
            <div id="proj-text" className="columns-4 flex items-center bg-white flex-col justify-center w-screen py-8 mb-9 gap-x-1">
                <h3 className="text-3xl font-helvetica-medium drop-shadow-sm mb-9 text-main-brown">Project Management Design</h3>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                Proj management software for design and code
                </p>
            </div>
            

        </div>
           



          </section>
      </main>
    </div>
    );
}


