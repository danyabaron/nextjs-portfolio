'use client'

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IoSparklesSharp } from "react-icons/io5";
import Image from 'next/image';
import ProjTile from '../../../public/assets/projmangTile.png';
import ProjTileDiag from '../../../public/assets/projmangTileDiagnol.png';
import DesignCodeLogo from '../../../public/assets/designcodelogo.png';
import PrototypeGif from '../../../public/assets/prototypegif.gif';
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

//comment to add here for deployment

import LoginProtoImg from '../../../public/assets/loginproto.png';
import Dashboard from '../../../public/assets/dashboard.png';
import ProjBoardProto from '../../../public/assets/projboardproto.png';
import EditCardProto from '../../../public/assets/editcardproto.png';
import CreateCard from '../../../public/assets/createcardproto.png';
import ProjectsHome from '../../../public/assets/projectshome.png';
import AdminHome from '../../../public/assets/adminproto.png';
import AdminTeams from '../../../public/assets/teamsdata.png';
import AdminUpdateTeam from '../../../public/assets/teamsadmin.png';
import AdminUsers from '../../../public/assets/adminuser.png';
import AdminEditUser from '../../../public/assets/adminedituser.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from "react-icons/io";






export default function ProjMang() {

    const router = useRouter()


    
    return (
        <div>
        
        <main className="bg-gradient-to-t from-gradient-bottom to-gradient-top overflow-y-scroll scroll-smooth no-scrollbar">
        <section className="min-h-screen">

        <nav className="py-10 mb-12 flex justify-between w-full">
            <Link href="/">
                <div className="flex items-center ml-10">

                <IoMdArrowBack className=" text-main-brown text-2xl transform hover:text-hover-resume transition-all duration-500 hover:scale-110" />   
        
                </div>
            </Link>
            
                    
                
                
            
            
            <ul className="flex items-center animate-fade-right animate-ease-in">
               
                
               
              <li>

              </li>
              
              <li>
                <Link href="/projmang#goal" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Goal</Link>
              </li>

              <li>
              <Link href="/projmang#research" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Research</Link>
              </li>

              <li>
              <Link href="/projmang#wireframe" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Wireframe</Link>
              </li>

              
              <li>
              <Link href="/projmang#prototype" className="text-xl font-helvetica drop-shadow-md text-main-brown m-10 hover:bg-hover-resume hover:text-text-pink rounded-full px-4 py-2 transform hover:scale-105
                transition-all duration-500">Prototype</Link>
              </li>
            </ul>
          
        
        </nav>

        <div id="projheader" class="w-screen items-center flex flex-row gap-9 mb-24 py-10 rounded-3xl">
            <div id="proj-text" className="columns-4 flex flex-col ml-12 justify-center py-7 items-center w-screen bg-white rounded-3xl drop-shadow-lg gap-5">
                <h2 className="text-3xl font-helvetica-medium drop-shadow-md text-center text-wrap max-w-[500px] text-hover-resume">Design & Code Club Project Management Application</h2>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    A task management web application that helps UCF Design and Code members and club officers efficiently organize and track projects using a Kanban-inspired interface.
                </p>
                <h3 className="text-xl font-helvetica-medium drop-shadow-sm text-hover-resume">
                    Timeline

                </h3>
                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    November 2023 - January 2024 (10 weeks)
                </p>
                <h3 className="text-xl font-helvetica-medium drop-shadow-sm text-hover-resume">
                    Design Role
                </h3>

                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    Product, UI/UX, Research
                </p>
                <h3 className="text-xl font-helvetica-medium drop-shadow-sm text-hover-resume">
                    Team
                </h3>

                <p className="font-helvetica text-md text-main-brown px-5 text-center text-wrap max-w-[500px]">
                    1 Project Lead, 2 Designers, 3 Engineers
                </p>

            </div>
            {/* width={300} height={300} */}

            <div id="proj-img" className="columns-2 flex flex-col bg-white mr-12 justify-center gap-5">
                {/* <Image src={ProjTile} alt="proj mang 1" width={1200} height={674} className="drop-shadow-md" />
                <Image src={ProjTileDiag} alt="proj mang 2" width={1200} height={674} className="drop-shadow-md" /> */}
                <Image src={PrototypeGif} className="drop-shadow-md rounded-2xl"/>



            </div>
            

        </div>



       

        

      
        

        <div id="goal" className="flex flex-col items-center justify-center w-screen mb-24">

            <h1 className='text-3xl font-helvetica-medium drop-shadow-md text-hover-resume'>Goal</h1>

          

           <div id="goal-content" className="flex flex-row items-center gap-4 justify-center w-screen"> 

            <div id="intro-text">
                    <p className="font-helvetica text-lg text-main-brown px-5 text-center flex-1 text-wrap max-w-[700px]">
                        
                        The UCF Design & Code Club aims to implement a dedicated page on their website, facilitating seamless project and team management for club members and officers. 
                        Through personalized Kanban-style boards, members can efficiently track tasks, set priorities, and collaborate on projects. 
                        Design and Code Club Officers have administrative control to create and manage project boards, assign members to teams and projects, 
                        monitor progress, and give members certain access rights. This web application resembles a Trello/Jira-style software tailored to the needs of the UCF Design and Code Club. 

                    </p>
                </div>
                <div id="intro-pic" className="mr-6">
                    <Image src={DesignCodeLogo} width={400} height={400} alt="design and code logo" className="drop-shadow-md" />
                </div>
            
            </div>

            <div id="subgoal" className="grid flex justify-center grid-cols-2 mt-6 gap-24">
                <div id="problem" className="flex flex-col justify-center py-6 items-center rounded-3xl drop-shadow-lg bg-white ">
                    <h2 className='text-2xl font-helvetica-italic drop-shadow-md text-center mb-5 text-hover-resume'>Problem</h2>
                    <ul className="list-disc list-inside font-helvetica text-lg text-main-brown justify-center  flex-1 text-wrap max-w-[300px]">
                        <li className="mb-5"> Task management softwares are high cost for the size of the UCF Design & Code Club (300+ members)</li>
                        <li className="mb-5"> Administrative limitations, need to accomodate Design & Code Club Officers to be able to create projects and add members,
                        as well as have UCF Single Sign On</li>
                       

                       
                    </ul>

                </div>

                <div id="solution" className="flex flex-col items-center py-6 bg-white rounded-3xl drop-shadow-lg w-96 ">
                    <h2 className='text-2xl font-helvetica-italic drop-shadow-md text-center mb-5 text-hover-resume'>Solution</h2>
                    <ul className="list-disc list-inside font-helvetica text-lg text-main-brown bg-white text-wrap max-w-[300px]">
                        <li className="mb-5"> Create end to end high fidelity design for React task management software webpage in UCF Design & Code Website </li>
                        <li className="mb-5"> Develop functionality for: task completion status, separate login credentials for officers and members, project completion status, create new
                        project, create new team, edit/add user, project kanban board </li>
                       

                       
                    </ul>

                </div>
                

            </div>
            

        </div>

        <div id="research" className="flex flex-col items-center justify-center w-screen py-10 mb-9">
        
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-4 text-hover-resume'>Research</h1>
           
            <div id="research-content" className="flex flex-row items-center gap-4 justify-center w-screen"> 
            
                <div id="research-text" className='py-6'>
                    <p className="font-helvetica text-lg text-main-brown px-5 text-center flex-1 text-wrap max-w-[700px]">
                    We conducted a comparative analysis of common task management platforms such as Trello, Jira, Evernote, Asana, and Microsoft Planner.
                    Through this process, we determined that the Kanban Board style offers the simplest and 
                    most effective design solution for fulfilling the needs of the UCF Design & Code club, based on both usability and functionality assessments.
                    </p>
                </div>
                <div id="inspiration" className="flex flex-col items-center py-6 bg-white rounded-3xl drop-shadow-lg w-96 ">
                    <h2 className='text-2xl font-helvetica-italic drop-shadow-md text-center mb-5 text-hover-resume'>Inspiration</h2>
                    <ul className="list-disc list-inside font-helvetica text-lg text-main-brown bg-white text-wrap max-w-[300px]">
                        <li className="mb-5"> Figma Community </li>
                        <li className="mb-5"> Trello and Kanban Board </li>
                        <li className="mb-5"> Instagram Admin </li>
                        <li className="mb-5"> Jira </li>
                       

                       
                    </ul>

                </div>
            
        </div>
            
           

        </div>

        {/* <div id="research-grid" className="grid justify-center grid-rows-2 grid-flow-col px-9 gap-6">
                <div> 
                    <Image src={KanbanOne} alt="kanban1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={KanbanTwo} alt="kanban2" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={TrelloOne}  alt="trello1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={KanbanThree}  alt="trello1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={Login1}  alt="trello1" className="drop-shadow-md" />
                </div>
            </div> */}


        <div id="wireframe" className="flex flex-col items-center justify-center gap-4 w-screen py-10 mb-9">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-hover-resume'>Wireframes</h1>
           
            <div id="wireframe-text" className="flex-1">
                <p className="font-helvetica text-lg text-main-brown px-5 text-center flex-1 text-wrap max-w-[700px]">
                    Our wireframes serve as the blueprint for the webpage, 
                    providing a visual representation of the website's layout, structure, and functionality. We concluded the MVP (most viable product) and focused on the 
                    features and functionality that were high priority.
                </p>
            </div>
            {/* <div id="intro-pic">
                <Image src={DesignCodeLogo} alt="design and code logo" className="drop-shadow-md" />
            </div> */}

        </div>

        
        <div id="wireframe-grid" className="grid justify-center grid-rows-2 grid-flow-col px-9 gap-6">
                <div> 
                    <Image src={LoginWire} alt="kanban1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={Homewire1} alt="kanban2" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={Homewire2} alt="trello1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={ProjBoardWire} alt="trello1" className="drop-shadow-md" />
                </div>
                <div>
                    <Image src={AddCardWire} alt="trello1" className="drop-shadow-md" />
                </div>
            </div>

        <div id="prototype" className="flex flex-col items-center justify-center gap-4 w-screen py-10 mb-9">
            <h1 className='text-3xl font-helvetica-medium drop-shadow-md mb-9 text-hover-resume'>Prototype</h1>

            {/* <div id="proto-content" className="flex flex-row gap-4 items-center justify-center">  */}
           
                <div id="prototype-text" className="flex-1">
                    <p className="font-helvetica text-lg text-main-brown px-5 text-center flex-1 text-wrap max-w-[700px]">
                        Our high-fidelity prototype builds upon the foundational elements established in our wireframes, incorporating additional features and refining the 
                        user interface to create a more polished experience. Emphasizing the project Kanban board and administrative 
                        functions for Design and Code club officers, the prototype brings our design concepts to life with enhanced interactivity and visual fidelity. Our prototype streamlines 
                        project management and collaboration for the UCF Design & Code club.
                    </p>
                </div>
                {/* <div id="intro-pic">
                    <Image src={DesignCodeLogo} alt="design and code logo" className="drop-shadow-md" />
                </div> */}
                {/* <div id="features" className="flex flex-col items-center py-6 bg-white rounded-3xl px-12 drop-shadow-lg">
                        <h2 className='text-2xl font-helvetica-italic drop-shadow-md text-center mb-5 text-hover-resume'>Features</h2>
                        <ul className="list-disc list-inside columns-2 -ml-4 font-helvetica text-lg text-main-brown bg-white text-wrap max-w-[700px]">
                            <li className="mb-3"> Project Kanban Board</li>
                            <li className="mb-3"> Edit task Kanban card </li>
                            <li className="mb-3"> Create task Kanban card </li>
                            <li className="mb-3"> Club officer admin view </li>
                        
                       
                            <li className="mb-3"> Login Screen</li>
                            <li className="mb-3"> Main projects screen to see ongoing and past projects</li>
                            <li className="mb-3"> User Dashboard</li>
                            <li className="mb-3"> Admin create/edit project</li>
                            <li className="mb-3"> Admin create/edit team</li>
                            <li className="mb-3"> Admin add/edit user</li>
                        </ul>

                        
                       

                    </div> */}
            {/* </div> */}
        </div>
        <div id="proto-gif" className="flex justify-center gap-5 mb-11">
                {/* <Image src={ProjTile} alt="proj mang 1" width={1200} height={674} className="drop-shadow-md" />
                <Image src={ProjTileDiag} alt="proj mang 2" width={1200} height={674} className="drop-shadow-md" /> */}
                <Image src={PrototypeGif} width={900} height={900} className="drop-shadow-md rounded-2xl"/>
            </div>


        <div id="proto-grid" className="grid justify-center items-center px-12 mb-24 grid-cols-2 gap-8">
                <div className="justify-center items-center"> 
                    <Image src={LoginProtoImg} alt="login screen" loading="lazy" className="drop-shadow-md" />  
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                        Login Screen
                    </p>
                </div>

                <div className="justify-center items-center"> 
                    <Image src={Dashboard} alt="projboard" loading="lazy" className="drop-shadow-md" />
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                    Dashboard
                    </p>
                </div>
               
                <div className="justify-center items-center"> 
                    <Image src={ProjBoardProto} alt="new proj" loading="lazy" className="drop-shadow-md" />
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                        Project Kanban Board
                    </p>
                </div>
                <div>
                    <div id="center-img" className="flex justify-center">
                        <Image src={EditCardProto} height={450} alt="new proj" loading="lazy" className="drop-shadow-md" />
                    </div>
                    
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                        Edit Kanban Card
                    </p>
                </div>
                <div>
                <div id="center-img" className="flex justify-center">
                        <Image src={CreateCard} height={450} alt="new proj" loading="lazy" className="drop-shadow-md" />
                </div>
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                       Create New Kanban Card
                    </p>
                </div>
                <div>
                    <Image src={ProjectsHome} alt="new proj" loading="lazy" className="drop-shadow-md" />
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                       Projects Home
                    </p>
                </div>
                <div>
                    <Image src={AdminHome} alt="new proj" loading="lazy" className="drop-shadow-md" />
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                       Admin Home
                    </p>
                </div>
                <div>
                    <Image src={AdminTeams} alt="new proj" loading="lazy" className="drop-shadow-md" />
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                      Admin View of Member Teams Data Table
                    </p>
                </div>
                <div>
                    <Image src={AdminUpdateTeam} alt="new proj" loading="lazy" className="drop-shadow-md" />
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                       Edit Team 
                    </p>
                </div>
                <div>
                    <Image src={AdminUsers} alt="new proj" loading="lazy" className="drop-shadow-md" />
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                        Admin View of User Data Table
                    </p>
                </div>
                <div>
                    <Image src={AdminEditUser} alt="new proj" loading="lazy" className="drop-shadow-md" />
                    <p className="font-helvetica-medium text-md text-main-brown py-5 text-center text-wrap">
                       Edit User
                    </p>
                </div>


            </div>
            

            <footer className="bg-main-brown text-text-pink">
                <div id="footer" className="flex flex-col items-center justify-center w-screen gap-5 py-10">
                    <div className="flex flex-row gap-4">
                        <a href="https://www.linkedin.com/in/danyabaron/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
                        </a>
                        <a href="https://dribbble.com/danyabaronui" target="_blank" rel="noopener noreferrer">
                            <FaDribbble className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
                        </a>

                        <a href="https://github.com/danyabaron" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
                        </a>
                        <a href="https://www.behance.net/danyabaron16" target="_blank" rel="noopener noreferrer">
                            <FaBehance className="text-text-pink text-2xl transform hover:text-text-pink transition-all duration-500 hover:scale-110" />
                        </a>
             

          </div>
          <p className="font-helvetica-light text-text-pink">&copy; 2024 Danya Baron. All rights reserved.</p>
        </div>

      </footer>
        

           



          </section>
      </main>
    </div>
    );
}


