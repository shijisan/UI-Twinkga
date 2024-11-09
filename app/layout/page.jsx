"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

export default function LayoutCode() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const code = `
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { config } from '@fortawesome/fontawesome-svg-core'; 
import '@fortawesome/fontawesome-svg-core/styles.css'; 
config.autoAddCss = false; 

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Your Website Name",
  description: "Your description.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={\`\${inter.className}\`}>
        <NavBar />
        {children}
      </body>
    </html>
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
					<p className="p-2 text-white">npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome --legacy-peer-deps</p>
				</div>
				<br />
				<h2 className="text-base">Changes:</h2>
				<ul className="list-disc list-inside">
					<li>Added google fonts.</li>
					<li>Used Inter font.</li>
					<li>Added fontawesome.</li>
				</ul>

			</div>

			<div className="flex w-1/2">
				<div className="flex flex-col w-full text-xs ">
					<div className="flex items-center justify-between w-full px-10 py-2 text-white rounded-t-lg bg-neutral-700">
						<h2>RootLayout</h2>
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
