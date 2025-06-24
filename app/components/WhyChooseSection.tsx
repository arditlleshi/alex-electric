const benefits = [
  {
    title: "Over 15 Years Experience",
    description: "Extensive hands-on experience across all types of electrical projects and installations."
  },
  {
    title: "Fully Licensed & Insured",
    description: "Complete professional credentials and comprehensive insurance coverage for your peace of mind."
  },
  {
    title: "Timely & Reliable",
    description: "Punctual service delivery and reliable communication throughout every project."
  },
  {
    title: "Modern & Sustainable Solutions",
    description: "Latest technology and eco-friendly electrical solutions for future-ready installations."
  },
  {
    title: "Competitive Pricing",
    description: "Fair, transparent pricing with detailed estimates and no hidden fees or surprises."
  },
  {
    title: "Safety First Approach",
    description: "Strict adherence to electrical codes and safety standards for every installation and repair."
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Alex?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with a true professional who puts your safety and satisfaction first.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 