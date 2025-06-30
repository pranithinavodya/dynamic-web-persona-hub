
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Spa Ceylon Ayurveda Wellness",
      position: "Junior Executive E-commerce ",
      location: "Colombo, Sri Lanka",
      period: "2024 - Present",
      description: "Managed end-to-end Shopify operations across brands. Led product creation, optimized platform performance, and executed data-driven e-commerce strategies. Collaborated with cross-functional teams to drive sales and improve user experience.",
      highlights: ["Shopify", "E-commerce", "Analytics ","Collaboration"]
    },
    {
      id: 2,
      company: "Daraz",
      position: "Junior Executive - Quality Control",
      location: "Colombo, Sri Lanka",
      period: "2023 - 2024",
      description: "Ensured end-to-end process compliance in quality control operations by following department guidelines and procedures. Monitored and maintained high product standards across categories. Improved operational efficiency and consistently met daily performance targets.",
      highlights: ["Quality Control", "Process Compliance", "Product Standards ","Performance Management"]
    },
    {
      id: 3,
      company: "Explore Vacations & Ttavels (pvt) Ltd ",
      position: "rainee Reservations Execcutive",
      location: "Seeduwa, Sri Lanka",
      period: "2022 - 2023",
      description: "Built and maintained company website and internal tools. Gained experience in JavaScript, HTML, CSS, and various web frameworks. Participated in agile development processes and learned industry best practices.",
      highlights: ["Web Development", "JavaScript", "Agile Methodology"]
    },
    {
      id: 4,
      company: "Commercial Leasing and Finance PLC",
      position: "Operations Assistant",
      location: "Colombo, Sri Lanka",
      period: "2022 - 2022",
      description: "Ensured end-to-end process compliance in quality control operations by following department guidelines and procedures. Monitored and maintained high product standards across categories. Improved operational efficiency and consistently met daily performance targets.",
      highlights: ["Quality Control", "Process Compliance", "Product Standards ","Performance Management"]
    },
    {
      id: 5,
      company: "Hongkong and Shanghai Bank Coorporation",
      position: "Data Entry Executive",
      location: "Colombo, Sri Lanka",
      period: "2019 - 2020",
      description: "Ensured end-to-end process compliance in quality control operations by following department guidelines and procedures. Monitored and maintained high product standards across categories. Improved operational efficiency and consistently met daily performance targets.",
      highlights: ["Quality Control", "Process Compliance", "Product Standards ","Performance Management"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="text-2xl font-bold text-white">Experience</div>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in animation-delay-300">
              My professional journey and career milestones
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:pl-1/2 md:ml-8'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform -translate-x-1/2 animate-pulse z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 ${index % 2 !== 0 ? 'md:ml-8' : ''}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-scale-in">
                      {/* Company and Position */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Building className="text-cyan-400" size={20} />
                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      </div>
                      
                      <h4 className="text-xl text-purple-300 font-semibold mb-4">{exp.position}</h4>
                      
                      {/* Location and Period */}
                      <div className="flex flex-wrap gap-6 mb-6 text-gray-300">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-pink-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-200 leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {['E-commerce ', 'Quality Control', ' Customer Support', 'KYC & Compliance', 'Applied IT', 'Database Management','Internet Research'].map((skill, index) => (
                <div
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
