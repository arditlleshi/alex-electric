import Image from "next/image";
import ScrollButton from "./ScrollButton";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center relative w-28 h-16">
            <Image
              src="/main-logo.png"
              alt="Alex Electric Logo"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
                      <div className="hidden md:flex space-x-8">
              <ScrollButton 
                sectionId="about" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </ScrollButton>
              <ScrollButton 
                sectionId="services" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </ScrollButton>
              <ScrollButton 
                sectionId="contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </ScrollButton>
            </div>
            <ScrollButton 
              sectionId="contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Get Quote
            </ScrollButton>
        </div>
      </div>
    </nav>
  );
}
