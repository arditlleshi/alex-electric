export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Alex - Your Trusted Electrician
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                With over 15 years of hands-on experience in the electrical industry, Alex has built a reputation for delivering exceptional electrical services across residential, commercial, and industrial sectors. His commitment to safety, quality workmanship, and customer satisfaction has made him the go-to electrician for countless satisfied clients.
              </p>
              <p>
                Alex stays current with the latest electrical codes, technologies, and sustainable energy solutions. Whether it&apos;s a simple repair, complex installation, or cutting-edge solar panel system, he brings the same level of professionalism and expertise to every project.
              </p>
              <p>
                Fully licensed, insured, and certified, Alex combines technical excellence with honest, reliable service. He believes in doing the job right the first time and building lasting relationships with his clients through trust and exceptional results.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                {/* Placeholder for Alex's photo */}
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-semibold text-xl">Alex</p>
                  <p className="text-blue-200">Professional Electrician</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 