import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IoSparklesSharp } from "react-icons/io5";






export default function ProjMang() {
    return (
        <div>
        
        <main className="bg-gradient-to-t from-gradient-bottom to-gradient-top overflow-y-scroll scroll-smooth no-scrollbar">
        <section className="min-h-screen">

        <div className="flex items-center ml-10">
    {/* IoSparklesSharp on the left */}
            <IoSparklesSharp className=" text-main-brown text-2xl transform hover:text-hover-resume transition-all duration-500 hover:scale-110" />   
    {/* Other content on the left (if any) */}
    {/* Add your additional content here */}
         </div>
        



          </section>
      </main>
    </div>
    );
}


