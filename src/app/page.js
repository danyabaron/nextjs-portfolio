import Head from 'next/head';


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
      <main>
        <section className="min-h-screen">
          <nav>
            
            <ul>
              <li>
                {/* sparkle img */}
                <img src="src/assets/sparkle.png"/>
              </li>
              <li>
                About
              </li>
              <li>
                Projects
              </li>
              <li>
                Contact
              </li>
            </ul>
          </nav>
          <h1>Hello</h1>
          
        </section>
      </main>
    </div>
  )
}
