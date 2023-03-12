import react from  'react' 
import {SocialIcon} from "react-social-icons";
import { motion } from "framer-motion"
import Link from 'next/link';
type Props={}

export default function Header( {}:Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
            initial={{
x:-500,
opacity:0,
scale:0.5

            }}

            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5
            }}
            className="flex flex-row items-center">
                
                



<SocialIcon url="https://www.facebook.com/profile.php?id=100090755273482       "
                fgColor="gray"
                bgColor="transparent"
                />
                </motion.div>
                

                <motion.div
                initial={{
                    x:500,
                    opacity:0,
                    scale:0.5,
                }}
                animate={{
                    x:0,
                    opacity:1,
                    scale:1, 
                }}
                transition={{
                    duration:1.5,
                }}
                
                className="flex flex-row items-center text-gray-300 cursor-pointer">
                    
                    <p className="uppercase hidden md:inline-flex text-gray-400"></p>
                </motion.div>
                
                </header>
    )
}