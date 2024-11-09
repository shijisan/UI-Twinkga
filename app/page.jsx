"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      // Normalize the search term: Replace spaces with hyphens and convert to lowercase
      const normalizedSearchTerm = searchTerm.trim().replace(/\s+/g, "").toLowerCase();
      router.push(`/${normalizedSearchTerm}`);
    }
  };

  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <form className="flex items-center justify-center text-black" onSubmit={handleSubmit}>
          <input
            className="p-2 border border-e-0"
            type="text"
            placeholder="Search component here!"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <input className="block h-full p-2 border hover:cursor-pointer" type="submit" />
        </form>
      </section>
    </>
  );
}
