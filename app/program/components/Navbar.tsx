'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Plane } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white`} style={{backgroundColor: "#f6399f"}}>
                <Plane className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">Pekerja Migran <span style={{color: "#f6399f"}}>Aceh</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#program" className="hover:text-[#f6399f] transition-colors font-medium">Program</a>
              <a href="#alur" className="hover:text-[#f6399f] transition-colors font-medium">Alur</a>
              <a href="#syarat" className="hover:text-[#f6399f] transition-colors font-medium">Syarat</a>
              <a href="#kurikulum" className="hover:text-[#f6399f] transition-colors font-medium">Kurikulum</a>
              <button 
                className="px-6 py-2.5 rounded-full text-white font-semibold transition-transform hover:scale-105"
                style={{backgroundColor: "#f6399f"}}
              >
                Daftar Sekarang
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b px-4 py-4 space-y-4">
            <a href="#program" className="block py-2 font-medium">Program</a>
            <a href="#alur" className="block py-2 font-medium">Alur</a>
            <a href="#syarat" className="block py-2 font-medium">Syarat</a>
            <button className="w-full py-3 rounded-xl text-white font-bold" style={{backgroundColor: "#f6399f"}}>Daftar Sekarang</button>
          </div>
        )}
      </nav>
  );
}