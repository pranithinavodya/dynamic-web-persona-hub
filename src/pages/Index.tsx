
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, User, Briefcase, GraduationCap, FolderOpen, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white animate-pulse">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                <User size={18} />
                Home
              </Link>
              <Link to="/experience" className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                <Briefcase size={18} />
                Experience
              </Link>
              <Link to="/projects" className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                <FolderOpen size={18} />
                Projects
              </Link>
              <Link to="/education" className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                <GraduationCap size={18} />
                Education
              </Link>
              <Link to="/references" className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                <Users size={18} />
                References
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white p-2">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-white transform transition-all"></div>
                  <div className="w-full h-0.5 bg-white transform transition-all"></div>
                  <div className="w-full h-0.5 bg-white transform transition-all"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-6xl text-gray-600">
                  👤
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Pranithi Navodya
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-300">
            Junior E-Commerce Executive
          </p>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 animate-scale-in animation-delay-600">
            <p className="text-lg text-gray-200 leading-relaxed">
              Passionate developer with expertise in modern web technologies. I love creating 
              innovative solutions and bringing ideas to life through clean, efficient code. 
              Always eager to learn new technologies and tackle challenging problems.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/pranithi-navodya-8a1573209/" 
              className="group bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                <Linkedin size={40} className="text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-blue-100">Connect with me professionally</p>
            </a>

            {/* Email */}
            <a 
              href="navodyapranithi@gmail.com" 
              className="group bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-2xl hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                <Mail size={40} className="text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
              <p className="text-green-100">your.email@example.com</p>
            </a>

            {/* Phone */}
            <a 
              href="tel:+94774814081" 
              className="group bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-2xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                <Phone size={40} className="text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
              <p className="text-purple-100">+1 (234) 567-8890</p>
            </a>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Link 
              to="/experience" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-pulse"
            >
              Explore My Journey
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Index;
