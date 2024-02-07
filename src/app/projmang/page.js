import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IoSparklesSharp } from "react-icons/io5";
import Image from 'next/image';
import ProjTile from '../../../public/assets/projmangTile.png';
import ProjTileDiag from '../../../public/assets/projmangTileDiagnol.png';
import DesignCodeLogo from '../../../public/assets/designcodelogo.png';
import PrototypeGif from '../../../public/assets/prototypegif.gif'
import KanbanOne from '../../../public/assets/kanban1.png';
import TrelloOne from '../../../public/assets/trello1.png';
import KanbanTwo from '../../../public/assets/kanban2.png';
import KanbanThree from '../../../public/assets/kanban3.png';
import Login1 from '../../../public/assets/login1.png';
import LoginWire from '../../../public/assets/loginwire.png';
import Homewire1 from '../../../public/assets/homewire1.png';
import Homewire2 from '../../../public/assets/homewire2.png';
import ProjBoardWire from '../../../public/assets/projectboardwire.png';
import AddCardWire from '../../../public/assets/addcardwire.png';


// import Video from 'next-video';
// import getStarted from '/videos/get-started.mp4';
// import Prototype from '/videos/prototypemp4.mp4'; 
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
                <h2 className="text-3xl font-helvetica-medium drop-shadow-md text-hover-resume">Project Management Design</h2>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris nunc, ornare ut velit eu, 
                    sagittis laoreet ante. Sed porttitor felis non ligula aliquam lacinia
                </p>
                <h3 className="text-xl font-helvetica-medium drop-shadow-sm text-hover-resume">
                    Timeline

                </h3>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    November-December (4 weeks)
                </p>
                <h3 className="text-xl font-helvetica-medium drop-shadow-sm text-hover-resume">
                    Design Role

                </h3>

                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    Product, UI/UX, Research
                </p>

            </div>
            {/* width={300} height={300} */}

            <div id="proj-img" className="columns-2 flex flex-col bg-white mr-12 justify-center gap-5">
                {/* <Image src={ProjTile} alt="proj mang 1" width={1200} height={674} className="drop-shadow-md" />
                <Image src={ProjTileDiag} alt="proj mang 2" width={1200} height={674} className="drop-shadow-md" /> */}
                <Image src={PrototypeGif} className="drop-shadow-md rounded-2xl"/>



                {/* <Video src={getStarted} /> */}

                
                {/* <video className="h-full w-full rounded-lg" controls autoPlay muted>
                    {/* <source src={(require('./prototypemp4.mp4'))} type="video/mp4" /> */}
                        {/* <source src={Prototype} type="video/mp4" />
                        Your browser does not support the video tag.
                </video>  */} 



            </div>
            

        </div>

        <h1 className='text-2xl font-helvetica-medium drop-shadow-md mb-9 text-hover-resume'>Goal</h1>

        <div id="goal" className="flex flex-row items-center justify-start w-screen mb-9 gap-12">
        
            
           
            <div id="intro-text">
                <p className="font-helvetica text-md text-main-brown px-5 text-left flex-1 text-wrap max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris nunc, ornare ut velit eu, sagittis laoreet ante. Sed porttitor 
                felis non ligula aliquam lacinia. Duis ut ex nec est laoreet aliquet in nec felis. Mauris a accumsan mi. Phasellus id mauris accumsan, 
                imperdiet magna in, elementum velit. Pellentesque bibendum purus metus, at fermentum massa consequat laoreet. Ut sit amet diam ut metus 
                gravida iaculis eu venenatis turpis. 
                Aliquam egestas massa dapibus metus placerat, vitae vulputate nisi eleifend. Pellentesque tincidunt risus mauris,
                 nec dapibus risus tristique et.
                </p>
            </div>
            <div id="intro-pic" className="mr-6">
                <Image src={DesignCodeLogo} alt="design and code logo" className="drop-shadow-md" />
            </div>

        </div>

        <div id="research" className="flex flex-row items-center justify-start w-screen mb-9 gap-12">
        
            <h1 className='text-2xl font-helvetica-medium drop-shadow-md mb-9 text-hover-resume'>Research</h1>
           
            <div id="research-text">
                <p className="font-helvetica text-md text-main-brown px-5 text-left flex-1 text-wrap max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris nunc, ornare ut velit eu, sagittis laoreet ante. Sed porttitor 
                felis non ligula aliquam lacinia. Duis ut ex nec est laoreet aliquet in nec felis. Mauris a accumsan mi. Phasellus id mauris accumsan, 
                imperdiet magna in, elementum velit. Pellentesque bibendum purus metus, at fermentum massa consequat laoreet. Ut sit amet diam ut metus 
                gravida iaculis eu venenatis turpis. 
                Aliquam egestas massa dapibus metus placerat, vitae vulputate nisi eleifend. Pellentesque tincidunt risus mauris,
                 nec dapibus risus tristique et.
                </p>
            </div>
            <div id="intro-pic" className="mr-6">
                <Image src={DesignCodeLogo} alt="design and code logo" className="drop-shadow-md" />
            </div>

        </div>



       

        {/* <div id="research" className="flex flex-row items-center justify-between  w-screen mb-9 px-9 gap-11">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-hover-resume'>Research</h1>
           
            <div id="research-text" className="flex-1 ml-5 mb-6">
                <p className="font-helvetica text-md text-main-brown px-5 text-left text-wrap max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris nunc, ornare ut velit eu, sagittis laoreet ante. Sed porttitor 
                felis non ligula aliquam lacinia. Duis ut ex nec est laoreet aliquet in nec felis. Mauris a accumsan mi. Phasellus id mauris accumsan, 
                imperdiet magna in, elementum velit. Pellentesque bibendum purus metus, at fermentum massa consequat laoreet. Ut sit amet diam ut metus 
                gravida iaculis eu venenatis turpis. 
                Aliquam egestas massa dapibus metus placerat, vitae vulputate nisi eleifend. Pellentesque tincidunt risus mauris,
                 nec dapibus risus tristique et.
                </p>
            </div>
           

        </div> */}

        <div id="research-grid" className="grid justify-center grid-rows-2 grid-flow-col gap-6">
                <div> 
                    <Image src={KanbanOne} width={400} height={400} alt="kanban1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={KanbanTwo} width={400} height={400} alt="kanban2" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={TrelloOne} width={400} height={400} alt="trello1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={KanbanThree} width={400} height={400} alt="trello1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={Login1} width={400} height={400} alt="trello1" className="drop-shadow-md" />
                </div>
            </div>


        <div id="wireframe" className="flex flex-row items-center justify-between w-screen mb-9 px-9 gap-11">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-hover-resume'>Wireframes</h1>
           
            <div id="wireframe-text" className="flex-1">
                <p className="font-helvetica text-md text-main-brown px-5 text-left text-wrap max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris nunc, ornare ut velit eu, sagittis laoreet ante. Sed porttitor 
                felis non ligula aliquam lacinia. Duis ut ex nec est laoreet aliquet in nec felis. Mauris a accumsan mi. Phasellus id mauris accumsan, 
                imperdiet magna in, elementum velit. Pellentesque bibendum purus metus, at fermentum massa consequat laoreet. Ut sit amet diam ut metus 
                gravida iaculis eu venenatis turpis. 
                Aliquam egestas massa dapibus metus placerat, vitae vulputate nisi eleifend. Pellentesque tincidunt risus mauris,
                 nec dapibus risus tristique et.
                </p>
            </div>
            {/* <div id="intro-pic">
                <Image src={DesignCodeLogo} alt="design and code logo" className="drop-shadow-md" />
            </div> */}

        </div>

        
        <div id="wireframe-grid" className="grid justify-center grid-rows-2 grid-flow-col gap-6">
                <div> 
                    <Image src={LoginWire} width={400} height={400} alt="kanban1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={Homewire1} width={400} height={400} alt="kanban2" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={Homewire2} width={400} height={400} alt="trello1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={ProjBoardWire} width={400} height={400} alt="trello1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={AddCardWire} width={400} height={400} alt="trello1" className="drop-shadow-md" />
                </div>
            </div>

        <div id="prototype" className="flex flex-row items-center justify-between w-screen px-9 mb-9 gap-11">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-hover-resume'>Prototype</h1>
           
            <div id="prototype-text" className="flex-1">
                <p className="font-helvetica text-md text-main-brown px-5 text-left text-wrap max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris nunc, ornare ut velit eu, sagittis laoreet ante. Sed porttitor 
                felis non ligula aliquam lacinia. Duis ut ex nec est laoreet aliquet in nec felis. Mauris a accumsan mi. Phasellus id mauris accumsan, 
                imperdiet magna in, elementum velit. Pellentesque bibendum purus metus, at fermentum massa consequat laoreet. Ut sit amet diam ut metus 
                gravida iaculis eu venenatis turpis. 
                Aliquam egestasssa dapibus metus placerat, vitae vulputate nisi eleifend. Pellentesque tincidunt risus mauris,
                 nec dapibus risus tristique et.
                </p>
            </div>
            {/* <div id="intro-pic">
                <Image src={DesignCodeLogo} alt="design and code logo" className="drop-shadow-md" />
            </div> */}

        </div>
           



          </section>
      </main>
    </div>
    );
}


