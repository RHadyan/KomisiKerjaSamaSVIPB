'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="py-4 px-4 md:px-8 sticky top-0 z-50" style={{ backgroundColor: '#FDFBFC', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold" style={{ color: '#5F2E50' }}>PPBJ Aceh</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Program dropdown */}
          <div
            className="relative"
            style={{ padding: '8px' }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href="/program"
              className="transition-colors cursor-pointer"
              style={{ color: '#5F2E50' }}
            >
              Program
            </Link>

            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 py-2 z-50 border rounded-md"
                style={{ backgroundColor: '#FDFBFC', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderColor: '#F4D2E0' }}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  href="/program/ppbj"
                  className="block px-4 py-2 transition-colors"
                  style={{ color: '#5F2E50' }}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  PPBJ
                </Link>
                <Link
                  href="/program/aceh"
                  className="block px-4 py-2 transition-colors"
                  style={{ color: '#5F2E50' }}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Aceh
                </Link>
              </div>
            )}
          </div>

          <Link href="/#how-it-works" className="transition-colors" style={{ color: '#5F2E50' }}>Alur ke Jepang</Link>
          <Link href="/tentang-kami" className="transition-colors" style={{ color: '#5F2E50' }}>Tentang Kami</Link>
          <Link href="https://www.jotform.com/app/252954455231458"
                target="_blank" className="font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                style={{ backgroundColor: '#FCB8D7', color: '#1F2A44' }}>
            Daftar Sekarang
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            style={{ color: '#5F2E50' }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-3 px-4">
            {/* Mobile Program dropdown */}
            <div className="relative">
              <div
                className="transition-colors cursor-pointer"
                style={{ color: '#5F2E50' }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Program
              </div>

              {isDropdownOpen && (
                <div className="ml-4 flex flex-col space-y-2 mt-2">
                  <Link
                    href="/program/ppbj"
                    className="transition-colors pl-2"
                    style={{ color: '#5F2E50' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PPBJ
                  </Link>
                  <Link
                    href="/program/aceh"
                    className="transition-colors pl-2"
                    style={{ color: '#5F2E50' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Aceh
                  </Link>
                </div>
              )}
            </div>

            <Link href="/#how-it-works" className="transition-colors" style={{ color: '#5F2E50' }} onClick={() => setIsMenuOpen(false)}>Alur ke Jepang</Link>
            <Link href="/tentang-kami" className="transition-colors" style={{ color: '#5F2E50' }} onClick={() => setIsMenuOpen(false)}>Tentang Kami</Link>
            <Link href="https://www.jotform.com/app/252954455231458"
              className="font-medium py-2 px-4 rounded-lg transition-colors duration-300 w-full text-center"
              style={{ backgroundColor: '#FCB8D7', color: '#1F2A44' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}