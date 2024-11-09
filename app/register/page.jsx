"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faWarning } from '@fortawesome/free-solid-svg-icons';

export default function RegisterFormCode() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const code = `
"use client";
import { useState } from "react";

export default function RegisterForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();
		const name = \`\${firstName} \${lastName}\`;

		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			setErrorMessage("All fields are required");
			return;
		}

		if (password !== confirmPassword) {
			setErrorMessage("Passwords do not match");
			return;
		}

		try {
			const response = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password, name }),
			});

			if (!response.ok) {
				throw new Error("Registration failed. Please try again.");
			}

			const data = await response.json();
			console.log("Registration successful:", data);

			setFirstName("");
			setLastName("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
			setErrorMessage("");
		} catch (error) {
			console.error("Registration error:", error);
			setErrorMessage(error.message);
		}
	};

	return (
		<section className="flex items-center justify-center min-h-screen">
			<form onSubmit={handleRegister} className="flex-col p-5 space-y-3 border rounded-xl">
				{errorMessage && <p className="text-red-500">{errorMessage}</p>}
				<h2 className="text-3xl font-medium text-center">Register</h2>
				<div className="flex flex-col">
					<label htmlFor="name">Full Name:</label>
					<div className="flex w-full" id="name">   
						<input
							className="w-1/2 p-1 border rounded-s border-e-0"
							type="text"
							id="firstName"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input
							className="w-1/2 p-1 border rounded-e"
							type="text"
							id="lastName"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>
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
				<div className="flex flex-col">
					<label htmlFor="confirmPassword">Confirm Password:</label>
					<input
						className="p-1 border rounded"
						type="password"
						id="confirmPassword"
						placeholder="Confirm your password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<div className="flex w-full">
					<button type="submit" className="w-1/2 p-2 mt-3 border rounded-lg rounded-e-none border-e-0">
						Register
					</button>
					<a className="w-1/2" href="/login">
						<button type="button" className="w-full p-2 mt-3 border rounded-lg rounded-s-none">
							Login
						</button>
					</a>
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
					<li>Setup api route, setup login also.</li>
					<li>Make middleware. <FontAwesomeIcon icon={faWarning}/> PUT INSIDE /APP DIRECTORY <FontAwesomeIcon icon={faWarning}/></li>
				</ul>

			</div>
         
			<div className="flex w-1/2 text-xs">
				<div className="flex flex-col w-full text-xs">
					<div className="flex items-center justify-between w-full px-10 py-2 text-white rounded-t-lg bg-neutral-700">
						<h2>RegisterForm Code</h2>
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
