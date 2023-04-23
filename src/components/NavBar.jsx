//import { whileStatement } from "@babel/types";
import React, {useState, useEffect} from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import topBBQLogo from '../images/topBBQLogo.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const style = {color:"white", opacity:"90%"}
    const [bgColor, setBgColor] = useState('bg-green')
    const [isShrunk, setIsShrunk] = useState(false)

    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setBgColor('bg-black');
            setIsShrunk(true)
        } else {
            setBgColor('bg-green');
            setIsShrunk(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return ( 
        <div className={`flex justify-between items-center absolute top-20 z-50 w-full sm-top-0 `}>        
        {/*Top Menu*/}
            <div className={`${bgColor} pt-0 pb-2 w-screen fixed ${isShrunk ? 'pt-2 pb-2 top-0' : 'top-2'}`}>
                <div className={`cursor-pointer flex absolute top-0 pt-2 pl-2 pb-2`}>
                    <AiOutlineMenu className='lg:hidden z-99' style={style} size={30} onClick = {()=> setNav(!nav)}/>
                </div>
                <div className='flex items-center justify-center w-full'>
                    
                    <div className={`flex justify-center items-center text-l cursor-pointer text-white/70 ${isShrunk ? 'h-10 py-6 transition-all ease-out delay-300' : 'h-24'}`}>
                        <Link to="hero" spy={true} smooth={true} duration={500}  spy={true} smooth={true} offset={0} duration={500} className={`pr-8 sm-hidden no-underline  text-white/70 ${isShrunk ? "text-sm  pr-4 transition-all delay-300 ease-out" : ""}`}> HOME</Link>
                        <Link to="restaurant" spy={true} smooth={true} offset={-400} duration={500} className={`pr-8 sm-hidden no-underline  text-white/70 ${isShrunk ? "text-sm pr-0 transition-all delay-300 ease-out" : ""}`}> RESTARAUNT</Link>  

                        <Link to="hero" spy={true} smooth={true} duration={500}  spy={true} smooth={true} offset={0} duration={500} className={`pr-8 sm-hidden no-underline  text-white/70  ${isShrunk ? "pr-0 transition-all delay-300 ease-out" : ""} `}>
                            <img className={`opacity-80 z-99 ${isShrunk ? "scale-50 pb-2" : ""}`} src={topBBQLogo} />
                        </Link>
                        <Link to="menu" spy={true} smooth={true} offset={100} duration={500} className={`pr-8 sm-hidden no-underline  text-white/70 ${isShrunk ? "text-sm pr-4 transition-all delay-300 ease-out" : ""}`}>MENU</Link>  
                        <Link to="photos" spy={true} smooth={true} offset={100} duration={500} className={`pr-8 sm-hidden no-underline  text-white/70 ${isShrunk ? "text-sm pr-4 transition-all delay-300 ease-out" : ""}`}>PHOTOS</Link>  

                    </div>
                </div>
            </div>
            

            {/*Mobile Menu*/}
            {/*Overlay*/}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 lect-0'></div> : ''}
            {/*Side Drawer Menu*/}
            <div className={nav ? 'fixed top-0 left-0 w-screen h-screen bg-white z-10 duration-700': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'} >
                <AiOutlineClose style={style} size = {30} className='absolute left-4 top-4 cursor-pointer' onClick = {()=> setNav(!nav)}/>
                <div className='bg-black/95 h-screen'>
                    <nav>
                        <div className='flex justify-center pt-6 '>
                            <img src={topBBQLogo} />
                        </div>
                        
                        <ul className='cursor-pointer  flex flex-col justify-center items-center h-screen '>
                            <Link onClick = {()=> setNav(!nav)} to="hero" spy={true} smooth={true} duration={500}  spy={true} smooth={true} offset={0} duration={500} className='text-4xl pb-8 text-white/80 flex-center no-underline' > HOME</Link>
                            <li className='text-4xl pb-8 text-white/80 flex-center'>RESTAURANT</li>
                            <li className='text-4xl pb-8 text-white/80'>MENU</li>
                            <li className='text-4xl pb-28 text-white/80'>PHOTOS</li>


                        </ul>
                    </nav>
                </div>
               
            </div>
            
        </div>
  );
};

export default Navbar;
