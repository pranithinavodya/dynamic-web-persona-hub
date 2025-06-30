
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      year: "2018 - 2022",
      gpa: "3.8/4.0",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development. Participated in various coding competitions and hackathons.",
      highlights: ["Dean's List", "Programming Competition Winner", "CS Club President"],
      type: "Degree"
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      institution: "TechAcademy Pro",
      location: "Online",
      year: "2022",
      gpa: "Certificate of Excellence",
      description: "Intensive 6-month program focusing on modern web development technologies including React, Node.js, databases, and deployment strategies. Built multiple real-world projects.",
      highlights: ["Top 5% Graduate", "Capstone Project Award", "Industry Mentorship"],
      type: "Certificate"
    },
    {
      id: 3,
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      location: "Online",
      year: "2023",
      gpa: "Associate Level",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS platform. Covers security, scalability, and cost optimization.",
      highlights: ["Industry Recognition", "Cloud Architecture", "Best Practices"],
      type: "Certification"
    },
    {
      id: 4,
      degree: "Google UX Design Certificate",
      institution: "Google Career Certificates",
      location: "Online",
      year: "2023",
      gpa: "Professional Certificate",
      description: "Comprehensive program covering user experience design principles, wireframing, prototyping, and user research methodologies.",
      highlights: ["Portfolio Projects", "User Research", "Design Thinking"],
      type: "Certificate"
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Degree':
        return <GraduationCap className="text-cyan-400" size={24} />;
      case 'Certificate':
        return <BookOpen className="text-green-400" size={24} />;
      case 'Certification':
        return <Award className="text-purple-400" size={24} />;
      default:
        return <GraduationCap className="text-cyan-400" size={24} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Degree':
        return 'from-cyan-500 to-blue-600';
      case 'Certificate':
        return 'from-green-500 to-emerald-600';
      case 'Certification':
        return 'from-purple-500 to-violet-600';
      default:
        return 'from-cyan-500 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="text-2xl font-bold text-white">Education</div>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in animation-delay-300">
              My academic journey and professional development
            </p>
          </div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative group animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Main Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                    {/* Background Gradient Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(edu.type)} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                          {getTypeIcon(edu.type)}
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {edu.degree}
                            </h3>
                            <p className="text-cyan-300 font-semibold">{edu.institution}</p>
                          </div>
                        </div>
                        
                        <div className={`px-4 py-2 bg-gradient-to-r ${getTypeColor(edu.type)} text-white rounded-full text-sm font-semibold`}>
                          {edu.type}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-emerald-400" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-cyan-400" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} className="text-purple-400" />
                          <span>{edu.gpa}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-200 leading-relaxed mb-6">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills Section */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Continuous Learning</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Online Courses */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Online Courses</h3>
                  <p className="text-gray-300 mb-4">
                    Regularly enrolled in cutting-edge technology courses on platforms like Coursera, Udemy, and Pluralsight.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Machine Learning</span>
                    <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">DevOps</span>
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Blockchain</span>
                  </div>
                </div>

                {/* Workshops & Conferences */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Workshops & Conferences</h3>
                  <p className="text-gray-300 mb-4">
                    Active participant in tech conferences, workshops, and meetups to stay updated with industry trends.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">React Conf</span>
                    <span className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-full">JS Summit</span>
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">Tech Meetups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
