import React from 'react';
import {motion} from "framer-motion";
import ProjectCard1 from './ProjectCard1';
import ProjectCard2 from './ProjectCard2';

type Props={}

function Projects({}:Props) {
    
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        
        
        className="flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">References</h3>

          <div className="">
            <ProjectCard1/>  
               

                 
            
            
            </div>  

        </motion.div>
    )
}
export default Projects