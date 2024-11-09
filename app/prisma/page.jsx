"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export default function PrismaCode() {
  const [code] = useState(`
// Located in @/lib/prisma
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Export the Prisma Client for use in other files
export default prisma;
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
          <p className="p-2 text-white">npm install @prisma/client</p>
        </div>
        <br />
        <h2 className="text-base">Additional:</h2>
        <ul className="list-disc list-inside">
          <li>Make sure you have Prisma configured and your schema set up.</li>
          <li>Run migrations to set up the database.</li>
        </ul>
      </div>

      <div className="flex w-1/2 text-xs">
        <div className="flex flex-col w-full text-xs">
          <div className="flex items-center justify-between w-full px-10 py-2 text-white rounded-t-lg bg-neutral-700">
            <h2>Prisma Client Code</h2>
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
