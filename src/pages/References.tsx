
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Linkedin, User, Building } from 'lucide-react';

const References = () => {
  const references = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      relationship: "Former Team Lead",
      email: "sarah.johnson@techsolutions.com",
      phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/sarahjohnson",
      testimonial: "An exceptional developer with strong technical skills and excellent communication abilities. Always delivers high-quality work on time.",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Product Manager",
      company: "Digital Innovations LLC",
      relationship: "Direct Supervisor",
      email: "m.chen@digitalinnovations.com",
      phone: "+1 (555) 987-6543",
      linkedin: "linkedin.com/in/michaelchen",
      testimonial: "A reliable team player who consistently exceeds expectations. Great problem-solving skills and attention to detail.",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      designation: "Computer Science Professor",
      company: "University of Technology",
      relationship: "Academic Supervisor",
      email: "e.rodriguez@university.edu",
      phone: "+1 (555) 246-8135",
      linkedin: "linkedin.com/in/emilyrodriguez",
      testimonial: "One of the most dedicated students I've taught. Shows great potential and passion for technology innovation.",
      avatar: "👩‍🏫"
    },
    {
      id: 4,
      name: "James Wilson",
      designation: "CTO",
      company: "StartupXYZ",
      relationship: "Former Manager",
      email: "james@startupxyz.com",
      phone: "+1 (555) 369-2580",
      linkedin: "linkedin.com/in/jameswilson",
      testimonial: "Demonstrates excellent leadership potential and technical expertise. Would highly recommend for any development role.",
      avatar: "👨‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="text-2xl font-bold text-white">References</div>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
                Professional References
              </span>
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in animation-delay-300">
              Trusted professionals who can speak to my skills and character
            </p>
          </div>

          {/* References Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {references.map((reference, index) => (
              <div
                key={reference.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl group-hover:animate-bounce">
                    {reference.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                      {reference.name}
                    </h3>
                    <p className="text-violet-300 font-semibold">{reference.designation}</p>
                  </div>
                </div>

                {/* Company and Relationship */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Building size={16} className="text-pink-400" />
                    <span className="text-gray-300">{reference.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-cyan-400" />
                    <span className="text-gray-300">{reference.relationship}</span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-6 p-4 bg-white/5 rounded-lg border-l-4 border-violet-500">
                  <p className="text-gray-200 italic leading-relaxed">
                    "{reference.testimonial}"
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold mb-3">Contact Information:</h4>
                  
                  {/* Email */}
                  <a
                    href={`mailto:${reference.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group/item"
                  >
                    <Mail size={18} className="text-green-400 group-hover/item:animate-bounce" />
                    <span>{reference.email}</span>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${reference.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group/item"
                  >
                    <Phone size={18} className="text-blue-400 group-hover/item:animate-bounce" />
                    <span>{reference.phone}</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://${reference.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group/item"
                  >
                    <Linkedin size={18} className="text-purple-400 group-hover/item:animate-bounce" />
                    <span>{reference.linkedin}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Note Section */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">📝 Important Note</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                All references have given their consent to be contacted regarding my professional qualifications. 
                Please feel free to reach out to them for detailed discussions about my work experience, 
                technical skills, and professional character.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full text-white font-semibold">
                  ✓ Professional References
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full text-white font-semibold">
                  ✓ Academic References
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 rounded-full text-white font-semibold">
                  ✓ Character References
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-6">
              Need additional references or have specific questions?
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-violet-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-violet-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
            >
              Contact Me Directly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
