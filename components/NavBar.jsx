"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function NavBar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <nav className="fixed top-0 flex flex-col justify-center w-full bg-white border-0 lg:px-5 lg:items-center lg:flex-row lg:border-b">

         <div className='flex min-h-[10vh] lg:w-1/2 lg:border-0 border-b'>
            <div className="flex items-center justify-center w-1/2">
               <h2 className="text-2xl font-medium">UI-Twinkga</h2>
            </div>

            <div className='flex items-center justify-end w-1/2 lg:hidden lg:pe-0 pe-5'>
               <button
                  className='flex p-1 rounded-full'
                  onClick={toggleMenu}
               >
                  <FontAwesomeIcon className='text-xl' icon={isMenuOpen ? faX : faBars} />
               </button>
            </div>
         </div>

         <ul
            className={`lg:flex lg:flex-row flex-col lg:justify-evenly items-center lg:w-1/2 h-full w-full font-medium ${isMenuOpen ? 'flex' : 'hidden'}`}
         >
            <li><a className='inline-block w-screen p-3 text-center bg-transparent border-b lg:w-auto lg:bg-white lg:border-none lg:hover:bg-transparent hover:bg-neutral-200' href="/">Link 1</a></li>
            <li><a className='inline-block w-screen p-3 text-center bg-transparent border-b lg:w-auto lg:bg-white lg:border-none lg:hover:bg-transparent hover:bg-neutral-200' href="/">Link 1</a></li>
            <li><a className='inline-block w-screen p-3 text-center bg-transparent border-b lg:w-auto lg:bg-white lg:border-none lg:hover:bg-transparent hover:bg-neutral-200' href="/">Link 1</a></li>
            <li><a className='inline-block w-screen p-3 text-center bg-transparent border-b lg:w-auto lg:bg-white lg:border-none lg:hover:bg-transparent hover:bg-neutral-200' href="/">Link 1</a></li>

         </ul>

      </nav>
   );
}
