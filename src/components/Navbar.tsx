import {NavLink} from 'react-router-dom'
import { useState } from "react";


export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsClicked(prev => !prev);
    };


    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className={`flex justify-between px-10 py-5 w-[100%] items-end fixed top-0 left-0 right-0 ${colorChange ? 'nav-background' : ''}`}>
        <NavLink to="/" className='
        max-[600px]:animate-none
        animate-slide-in-down
        tablet:opacity-0
        text-[18px]
        flex-6 
        tablet:text-2xl 
        font-body 
        font-bold 
        text-navy-blue
        hover:text-mirage transition duration-300 cursor-pointer'>Scribble <span className='text-sm text-white hover:text-navy-blue transition duration-300 cursor-pointer text-border'>And</span> Thought</NavLink>
        


        <div className='hidden tablet:flex flex-9 w-64  justify-end font-bold text-navy-blue my-0.5 '>
            <NavLink className="flex-1 hover:text-mirage opacity-0 transition duration-300 cursor-pointer animate-slide-in-down home" to="/">HOME</NavLink>
            <NavLink className="flex-1 hover:text-mirage opacity-0 transition duration-300 cursor-pointer animate-slide-in-down about" to="/about">ABOUT</NavLink>
            <NavLink className="flex-1 hover:text-mirage opacity-0 transition duration-300 cursor-pointer animate-slide-in-down login" to="/login">LOG-IN</NavLink>
        </div>


        
            <div className={`tablet:hidden flex items-center ${isClicked ? "hidden" : ""}`}>
                <button className ="outline-none menu-button " onClick={clickHandler}>
                    <svg className="w-6 h-6 text-navy-blue"
                    x-show="! showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 00 24 24"
                    stroke="currentColor"><path d="m4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>

        <div className={`h-screen fixed right-0 top-0 bottom-0 w-64 bg-slate-800/90  hamburger-menu ${isClicked ? "animate-slide-in-left " : "hidden"}`}>
            
            <button className ="outline-none menu-button border-b-white font-mono text-white float-right my-5 mx-5" onClick={clickHandler}>
                Close &#62;
            </button>
            <ul className='px-16 py-16'>
                <li className="active">
                    <NavLink to="/" className="block text-sm px-2 py-4  my-5 text-white font-semibold">
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="block text-sm px-2 py-4 my-5 text-white font-semibold">
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="block text-sm px-2 py-4 my-5 text-white font-semibold">
                        LOG-IN
                    </NavLink>
                </li>
                
            </ul>
        </div>
    </div>

    
  )
}
