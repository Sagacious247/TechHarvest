"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[#08142D]/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        <Image
          src="/logo.png"
          alt="TechHarvest Logo"
          width={220}
          height={70}
          className="w-auto h-16 object-contain"
        />

        <div className="hidden lg:flex gap-8 text-white">

          <a href="#">Home</a>

          <a href="#">Bootcamp</a>

          <a href="#">Curriculum</a>

          <a href="#">Benefits</a>

          <a href="#">FAQs</a>

          <a href="#">Contact</a>

        </div>

        <button className="bg-green-500 hover:bg-green-600 duration-300 px-7 py-3 rounded-xl text-white font-semibold">

          Reserve My Seat

        </button>

      </div>

    </nav>
  );
}