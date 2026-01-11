import React, { useState } from 'react';
import { Menu, X, ArrowRight, Calendar, Clock, MapPin, ArrowDown } from 'lucide-react';
import logo from "./assets/logo.jpeg"

export default function EHorizon() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Main pitch event
  const pitchEvent = {
    title: "PITCH COMPETITION",
    description: "The ultimate startup showcase and innovation challenge",
    speaker: "Industry Leaders & VCs",
    date: "February 23 to 27, 2026",
    time: "Full Day Event",
    venue: "Maharaja Auditorium",
    status: "Registration Open"
  };

  // 9 regular events
  const events = [
    {
      title: "SECURE WEB",
      subtitle: "Web Application Security & OWASP Top 10",
      speaker: "Andrew C Anil",
      role: "Cybersecurity Analyst",
      date: "January 03, 2026",
      time: "8:00 PM - 9:00 PM",
      status: "Registration Closed"
    },
    {
      title: "BUILD AND BEYOND",
      subtitle: "Prototyping Session",
      speaker: "Muhammed Shan",
      role: "Student Representative",
      date: "December 29, 2025",
      time: "2:00 PM - 3:00 PM",
      status: "Registration Closed"
    },
    {
      title: "AI WORKSHOP",
      subtitle: "Building Intelligent LLMs",
      speaker: "Emil Biju",
      role: "Applied Scientist, Microsoft",
      date: "December 20, 2025",
      time: "10:00 AM - 11:00 AM",
      status: "Registration Closed"
    },
    {
      title: "BLOCKCHAIN BASICS",
      subtitle: "Introduction to Web3",
      speaker: "Tech Expert",
      role: "Blockchain Developer",
      date: "February 20, 2026",
      time: "3:00 PM - 5:00 PM",
      status: "Registration Open"
    },
    {
      title: "DATA SCIENCE",
      subtitle: "Machine Learning Fundamentals",
      speaker: "Data Scientist",
      role: "AI Researcher",
      date: "February 21, 2026",
      time: "11:00 AM - 1:00 PM",
      status: "Registration Open"
    },
    {
      title: "CLOUD COMPUTING",
      subtitle: "AWS & Azure Masterclass",
      speaker: "Cloud Architect",
      role: "Senior Engineer",
      date: "February 22, 2026",
      time: "2:00 PM - 4:00 PM",
      status: "Registration Open"
    },
    {
      title: "MOBILE DEV",
      subtitle: "React Native Workshop",
      speaker: "Mobile Developer",
      role: "Tech Lead",
      date: "February 23, 2026",
      time: "10:00 AM - 12:00 PM",
      status: "Registration Open"
    },
    {
      title: "CYBERSECURITY",
      subtitle: "Ethical Hacking 101",
      speaker: "Security Expert",
      role: "Penetration Tester",
      date: "February 24, 2026",
      time: "4:00 PM - 6:00 PM",
      status: "Registration Open"
    },
    {
      title: "UI/UX DESIGN",
      subtitle: "Design Thinking Workshop",
      speaker: "Design Lead",
      role: "Product Designer",
      date: "February 25, 2026",
      time: "1:00 PM - 3:00 PM",
      status: "Registration Open"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-30px) translateX(-10px);
            opacity: 0.5;
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-yellow-600/20 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img 
                  src={logo}
                  alt="Institute of Innovation" 
                  className="h-12 w-auto"
                />
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#home" className="text-white/80 hover:text-yellow-400 transition-colors">About Us</a>
                <a href="#events" className="text-white/80 hover:text-yellow-400 transition-colors">Event Agenda</a>
                <a href="#contact" className="text-white/80 hover:text-yellow-400 transition-colors">Contact Us</a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-yellow-400"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden mt-6 pb-4 space-y-4">
                <a href="#home" className="block text-white/80 hover:text-yellow-400 transition-colors">About Us</a>
                <a href="#events" className="block text-white/80 hover:text-yellow-400 transition-colors">Event Agenda</a>
                <a href="#contact" className="block text-white/80 hover:text-yellow-400 transition-colors">Contact Us</a>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient Blobs */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            
            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-500/20 rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-400/40 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-yellow-300/30 rounded-full animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/5 w-2.5 h-2.5 bg-yellow-500/25 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
            <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-yellow-400/35 rounded-full animate-float-delayed" style={{animationDelay: '1s'}}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-40 right-20 w-20 h-20 border border-yellow-600/10 rotate-12 animate-spin-slow"></div>
            <div className="absolute bottom-40 left-20 w-16 h-16 border border-yellow-500/15 rotate-45 animate-spin-slow" style={{animationDelay: '3s'}}></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2410_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2410_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
            <div className="mb-8">
              <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tight">
                <span className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  E-HORYZON
                </span>
              </h1>
              <h2 className="text-5xl md:text-7xl font-black text-white/90">
                2K26
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg text-gray-400 mt-12">
              <div className="flex items-center gap-2">
                <Calendar size={24} className="text-yellow-400" />
                <span>February 23 to 27, 2026</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <MapPin size={24} className="text-yellow-400" />
                <span>KONGU ENGINEERING COLLEGE, ERODE</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown size={32} className="text-yellow-400" />
            </div>
          </div>
        </section>

        {/* Pitch Event Section - Full Width */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-yellow-950/10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-600/20 via-black to-yellow-600/10 border-2 border-yellow-600/40 rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-600/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-yellow-600/10 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="text-sm text-yellow-400 font-semibold mb-4 tracking-widest">FLAGSHIP EVENT</div>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
                  {pitchEvent.title}
                </h2>
                <p className="text-2xl text-gray-300 mb-12 max-w-3xl">
                  {pitchEvent.description}
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="flex items-center gap-4">
                    <Calendar size={32} className="text-yellow-400" />
                    <div>
                      <div className="text-sm text-gray-400">Date</div>
                      <div className="text-lg font-semibold">{pitchEvent.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock size={32} className="text-yellow-400" />
                    <div>
                      <div className="text-sm text-gray-400">Time</div>
                      <div className="text-lg font-semibold">{pitchEvent.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin size={32} className="text-yellow-400" />
                    <div>
                      <div className="text-sm text-gray-400">Venue</div>
                      <div className="text-lg font-semibold">{pitchEvent.venue}</div>
                    </div>
                  </div>
                </div>

                <button className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full text-black text-lg font-bold hover:shadow-2xl hover:shadow-yellow-600/50 transition-all flex items-center gap-3">
                  Register Now <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid Section */}
        <section id="events" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-center">
              <span className="text-white">Event </span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Schedule</span>
            </h2>
            <p className="text-center text-gray-400 text-lg mb-16">Explore our lineup of tech talks and workshops</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-red-950/30 via-black to-black border border-red-900/30 rounded-2xl overflow-hidden hover:border-yellow-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-600/10"
                >
                  {/* Event Header - Like the posters */}
                  <div className="bg-gradient-to-br from-red-900/40 to-red-950/60 p-6 border-b border-red-900/30">
                    <h3 className="text-2xl font-black text-white mb-2">{event.title}</h3>
                    <p className="text-red-200 font-semibold">{event.subtitle}</p>
                    <div className="mt-4 text-sm text-gray-300">
                      <span className="uppercase tracking-wide">Talk Session</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="text-yellow-400 font-bold text-lg mb-1">{event.speaker}</div>
                      <div className="text-gray-400 text-sm">{event.role}</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar size={18} className="text-yellow-400" />
                        <span className="text-gray-300">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock size={18} className="text-yellow-400" />
                        <span className="text-gray-300">{event.time}</span>
                      </div>
                    </div>

                    <button 
                      className={`w-full py-3 rounded-lg font-bold transition-all ${
                        event.status === "Registration Open" 
                          ? "bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:shadow-lg hover:shadow-yellow-600/50" 
                          : "bg-red-950/50 text-red-300 cursor-not-allowed"
                      }`}
                      disabled={event.status !== "Registration Open"}
                    >
                      {event.status === "Registration Open" ? "Register Now" : "Registration Closed"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-yellow-600/20 bg-gradient-to-b from-black to-yellow-950/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                <img 
                  src={logo}
                  alt="Institute of Innovation" 
                  className="h-12 w-auto"
                />
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-2">E-Horizon 2K26</p>
                <p className="text-sm text-gray-500">Shaping the future of technology</p>
              </div>

              <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>
                <span>•</span>
                <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
                <span>•</span>
                <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}