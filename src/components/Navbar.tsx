import {NavLink} from 'react-router-dom'
import { useState } from "react";


export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsClicked(prev => !prev);
    };
    
  return (
    <div className='flex justify-between px-10 py-5 '>
        <NavLink to="/" className='
        text-[18px]
        flex-6 
        md:text-xl 
        font-mono 
        font-bold 
        text-slate-600
        hover:text-slate-900 transition duration-300 cursor-pointer'>Scribble <span className='text-sm text-yellow-900'>And</span> Thought</NavLink>
        


        <div className='hidden md:flex flex-9 w-64  justify-end font-bold text-slate-600 my-0.5 '>
            <NavLink className="flex-1 hover:text-stone-800 transition duration-300 cursor-pointer" to="/">HOME</NavLink>
            <NavLink className="flex-1 hover:text-stone-800 transition duration-300 cursor-pointer" to="/about">ABOUT</NavLink>
            <NavLink className="flex-1 hover:text-stone-800 transition duration-300 cursor-pointer" to="/login">LOG-IN</NavLink>
        </div>


        <div className={`md:hidden flex items-center ${isClicked ? "hidden" : ""}`}>
            <button className ="outline-none menu-button" onClick={clickHandler}>
                <svg className="w-6 h-6 text-gray-500"
                x-show="! showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 00 24 24"
                stroke="currentColor"><path d="m4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>

        <div className={`max-h-screen absolute right-0 top-0 bottom-0 w-64 bg-slate-800/90 ${isClicked ? "" : "hidden"}`}>
            
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
