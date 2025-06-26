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
        <div className="flex justify-center md:justify-between items-center h-16">
          <ScrollButton sectionId="hero" className="flex items-center group cursor-pointer">
            <div className="relative w-36 h-16 p-3 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-blue-50">
              <Image
                src={logo}
                priority
                alt="Alex Electric Logo"
                className="object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </ScrollButton>
          
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
          

        </div>
      </div>
    </nav>
  );
}
