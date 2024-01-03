import Head from 'next/head';
import { IoSparklesSharp } from "react-icons/io5";


import Image from 'next/image';
// import syles from"


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    // </main>

    <div>
      <Head>
        <title>Danya Baron Portfolio</title>
      </Head>


      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            
            <ul className="flex items-center">
              <li>
                {/* sparkle img */}
                <IoSparklesSharp />
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <h1>Hello</h1>
          
        </section>
      </main>
    </div>
  )
}
