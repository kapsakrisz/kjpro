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
        
        
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">References</h3>

          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            
              <ProjectCard1/>  
               

                 
            
            
            </div>  

        </motion.div>
    )
}
export default Projects