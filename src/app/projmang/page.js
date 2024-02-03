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

        <div class="w-screen h-96 bg-main-brown rounded-3xl">
            <h3>hi</h3>

        </div>
           



          </section>
      </main>
    </div>
    );
}


