"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export default function MiddlewareCode() {
  const [code] = useState(`
import jwt from "jsonwebtoken";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token");

  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
  `);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <section className="flex items-center justify-center w-full h-screen gap-4 p-5">
      <div className="w-1/2 text-xs">
        <h2 className="text-base">Pre-requisites:</h2>
        <div className="bg-neutral-800">
          <p className="p-2 text-white">npm install jsonwebtoken</p>
        </div>
        <br />
        <h2 className="text-base">Additional:</h2>
        <ul className="list-disc list-inside">
          <li>Ensure your JWT secret key is set in your `.env` file as JWT_SECRET.</li>
          <li>Place this middleware in your /app folder structure.</li>
        </ul>
      </div>

      <div className="flex w-1/2 text-xs">
        <div className="flex flex-col w-full text-xs">
          <div className="flex items-center justify-between w-full px-10 py-2 text-white rounded-t-lg bg-neutral-700">
            <h2>Middleware Code</h2>
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
