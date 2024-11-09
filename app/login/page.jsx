"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faWarning } from '@fortawesome/free-solid-svg-icons';

export default function LoginFormCode() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const code = `
"use client"

import { useState } from "react";

export default function LoginForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const handleLogin = async (e) => {
      e.preventDefault(); 

      if (!email || !password) {
         setErrorMessage("Both fields are required");
         return;
      }

      try {
         const response = await fetch("/api/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
         });

         if (!response.ok) {
            throw new Error("Login failed. Please check your credentials.");
         }

         const data = await response.json();
         console.log("Login successful:", data);
         
         setEmail("");
         setPassword("");
         setErrorMessage("");

      } catch (error) {
         console.error("Login error:", error);
         setErrorMessage(error.message);
      }
   };

   return (
      <section className="flex items-center justify-center min-h-screen p-5">
         <form onSubmit={handleLogin} className="flex-col w-full p-5 space-y-3 border lg:w-1/3 md:w-1/2 rounded-xl">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <h2 className="text-3xl font-medium text-center">Login</h2>
            <div className="flex flex-col">
               <label htmlFor="email">Email:</label>
               <input
                  className="p-1 border rounded"
                  type="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>

            <div className="flex flex-col">
               <label htmlFor="password">Password:</label>
               <input
                  className="p-1 border rounded"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>

            <div className="flex w-full">
               <button type="submit" className="w-1/2 p-2 mt-3 border rounded-lg rounded-e-none border-e-0">
                  Login
               </button>
               <a className="w-1/2" href="/register"><button type="button" className="w-full p-2 mt-3 border rounded-lg rounded-s-none">
                  Register
               </button></a>
            </div>
            
         </form>
      </section>
   );
}
	`;

	const copyCode = () => {
		navigator.clipboard.writeText(code);
		alert("Code copied to clipboard!");
	};

	return (
		<section className="flex items-center justify-center w-full h-screen gap-4 p-5">
			<div className="w-1/2 text-xs">
				<h2 className="text-base">Pre-requisites:</h2>
				<div className="bg-neutral-800">
					<p className="p-2 text-white">npm install jsonwebtoken prisma @prisma/client bcryptjs</p>
				</div>
				<br />
				<h2 className="text-base">Additional:</h2>
				<ul className="list-disc list-inside">
					<li>Setup prisma and models, migrate, and generate.</li>
					<li>Setup api route, setup register also.</li>
					<li>Make middleware. <FontAwesomeIcon icon={faWarning}/> PUT INSIDE /APP DIRECTORY <FontAwesomeIcon icon={faWarning}/></li>
				</ul>

			</div>
         
			<div className="flex w-1/2 text-xs">
				<div className="flex flex-col w-full text-xs">
					<div className="flex items-center justify-between w-full px-10 py-2 text-white rounded-t-lg bg-neutral-700">
						<h2>LoginForm Code</h2>
						<button onClick={copyCode} className="p-2 rounded bg-neutral-500">
							<FontAwesomeIcon icon={faCopy} /> Copy Code
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
