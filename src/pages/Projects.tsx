
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern web technologies for optimal performance and user experience.",
      tools: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      timeline: "3 months",
      type: "Personal Project",
      category: "Web Development",
      image: "🛒",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Perfect for agile development teams.",
      tools: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      timeline: "2 months",
      type: "University Project",
      category: "Full Stack",
      image: "📋",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "An interactive weather dashboard displaying real-time weather data with beautiful visualizations and forecasts. Features location-based weather tracking and historical data.",
      tools: ["JavaScript", "Chart.js", "Weather API", "CSS3", "HTML5"],
      timeline: "1 month",
      type: "Fun Project",
      category: "Frontend",
      image: "🌤️",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      name: "Company Website",
      description: "Modern corporate website with responsive design, content management system, and SEO optimization. Built for a local business to improve their online presence.",
      tools: ["React", "Gatsby", "Contentful", "Tailwind CSS", "GraphQL"],
      timeline: "1.5 months",
      type: "Work Project",
      category: "Web Development",
      image: "🏢",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Personal Project':
        return 'from-cyan-500 to-blue-600';
      case 'University Project':
        return 'from-green-500 to-emerald-600';
      case 'Fun Project':
        return 'from-pink-500 to-rose-600';
      case 'Work Project':
        return 'from-purple-500 to-violet-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="text-2xl font-bold text-white">Projects</div>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in animation-delay-300">
              Showcasing my technical skills through real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Icon */}
                <div className="text-6xl mb-6 text-center group-hover:animate-bounce">
                  {project.image}
                </div>

                {/* Project Name */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>

                {/* Project Type Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${getTypeColor(project.type)} text-white text-sm rounded-full font-semibold`}>
                    {project.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Timeline and Category */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Calendar size={16} />
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Tag size={16} />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Tools Used */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <ExternalLink size={18} className="group-hover:animate-bounce" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 px-4 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Github size={18} className="group-hover:animate-bounce" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Interested in My Work?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always working on new projects and learning new technologies. 
              Feel free to check out my GitHub for more repositories and contributions.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
