import Head from 'next/head';
import { IoSparklesSharp } from "react-icons/io5";
import Image from 'next/image';
import HeroPic from '../public/assets/profilepic.png';

// import syles from"


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    // </main>

    <div>
      <Head>
        <title>Danya Baron Portfolio</title>
      </Head>


      <main className="bg-gradient-to-t from-gradient-top to-gradient-bottom px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between w-full">
            
            <ul className="flex items-center w-full">
              <li>
                {/* sparkle img */}
                <IoSparklesSharp className="cursor-pointer text-main-brown text-2xl mr-10 transform hover:scale-110"/>
              </li>
              <li>
                <a href="#" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-main-brown hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">About</a>
              </li>
              <li>
              <a href="#" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-main-brown hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Projects</a>
              </li>
              <li>
              <a href="#" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-main-brown hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Contact</a>
              </li>
            </ul>
          </nav>


          <div id="hero">
            <HeroPic/>

          </div>
       
          
        </section>
      </main>
    </div>
  )
}
