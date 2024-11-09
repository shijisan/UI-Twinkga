"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

export default function NavBarCode() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const code = `
"use client";

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
            className={\`lg:flex lg:flex-row flex-col lg:justify-evenly items-center lg:w-1/2 h-full w-full font-medium \${isMenuOpen ? 'flex' : 'hidden'}\`}
         >
            <li><a className='inline-block w-screen p-3 text-center bg-transparent border-b lg:w-auto lg:bg-white lg:border-none lg:hover:bg-transparent hover:bg-neutral-200' href="/">Link 1</a></li>
            <li><a className='inline-block w-screen p-3 text-center bg-transparent border-b lg:w-auto lg:bg-white lg:border-none lg:hover:bg-transparent hover:bg-neutral-200' href="/">Link 1</a></li>
            <li><a className='inline-block w-screen p-3 text-center bg-transparent border-b lg:w-auto lg:bg-white lg:border-none lg:hover:bg-transparent hover:bg-neutral-200' href="/">Link 1</a></li>
            <li><a className='inline-block w-screen p-3 text-center bg-transparent border-b lg:w-auto lg:bg-white lg:border-none lg:hover:bg-transparent hover:bg-neutral-200' href="/">Link 1</a></li>
         </ul>
      </nav>
   );
}
`;

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <section className="flex items-center justify-center w-full h-screen gap-4 p-5">

      <div className="w-1/2 text-xs ">
         <h2 className="text-base">Pre-requisites:</h2>
         <div className="bg-neutral-800">
            <p className="p-2 text-white">npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome --legacy-peer-deps
            </p>
         </div>
         <br />
         <h2 className="text-base">Others:</h2>
         <p><FontAwesomeIcon icon={faWarning} /> Add fontawesome to root layout.</p>
      </div>

      <div className="flex w-1/2">
        <div className="flex flex-col w-full text-xs ">
            <div className="flex items-center justify-between w-full px-10 py-2 text-white rounded-t-lg bg-neutral-700">
               <h2>Navbar</h2>
               <button onClick={copyCode} className="p-2 rounded bg-neutral-500">
                  Copy Code
               </button>
            </div>
            <div className="w-full p-5 text-xs bg-neutral-800 h-[60vh] overflow-scroll text-white">
               <pre>
                  <code>{code}</code>
               </pre>  
            </div>

        </div>
      </div>
    </section>
  );
}
