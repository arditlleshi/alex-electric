"use client";

import Image from "next/image";
import ScrollButton from "./ScrollButton";
import logo from "@/public/main-logo.png";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] nav-backdrop transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 py-2 shadow-lg border-b border-gray-200/20' 
        : 'bg-white/85 py-4 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center group cursor-pointer">
            <div className="relative w-32 h-16 p-3 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-blue-50">
              <Image
                src={logo}
                priority
                alt="Alex Electric Logo"
                className="object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <ScrollButton 
              sectionId="about" 
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group px-4 py-2 rounded-lg"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            </ScrollButton>
            <ScrollButton 
              sectionId="services" 
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group px-4 py-2 rounded-lg"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            </ScrollButton>
            <ScrollButton 
              sectionId="contact" 
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group px-4 py-2 rounded-lg"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            </ScrollButton>
          </div>
          
          <ScrollButton 
            sectionId="contact" 
            className="relative btn-modern gradient-electric text-white px-6 py-3 rounded-full font-medium group overflow-hidden transform hover:scale-105 hover:shadow-electric-lg transition-all duration-300"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <span className="relative z-10 flex items-center space-x-2">
              <span>Get Quote</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </ScrollButton>
        </div>
      </div>
    </nav>
  );
}
