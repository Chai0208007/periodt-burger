import React, { useState } from 'react';
import { Users, Utensils, Award, MapPin, ChevronDown, ExternalLink } from 'lucide-react';
import { restaurantInfo } from './mock';
import logo from '../logo.png';

const About = () => {
  const [showLocations, setShowLocations] = useState(false);

  // Updated location data with exact Google Maps URLs
  const locations = [
    {
      name: "Kamrej (HQ)",
      address: "Kamrej Char Rasta, Surat",
      // Exact Google Maps link for the Kamrej branch
      mapUrl: "https://maps.app.goo.gl/3XWp7zM8G9T2z8N67"
    },
    { name: "Adajan", address: "L.P. Savani Road, Surat" },
    { name: "Bardoli", address: "Station Road, Bardoli" },
    { name: "Jahangirpura", address: "Jahangirpura, Surat" },
    { name: "P.P. Savani University", address: "University Campus, Dhamdod" },
  ];

  const stats = [
    { icon: <Users size={32} />, value: restaurantInfo.stats.customers, label: "Happy Customers" },
    { icon: <Utensils size={32} />, value: "25+", label: "Burger Varieties" },
    {
      icon: <MapPin size={32} />,
      value: "5+",
      label: "Outlets in Surat",
      isInteractive: true
    },
    { icon: <Award size={32} />, value: "0%", label: "Royalty Model" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8 animate-slide-left">
              <span className="text-[#CD0000] font-black tracking-[0.3em] text-sm uppercase">Our Heritage</span>
              <h2 className="text-7xl md:text-9xl font-black text-gray-900 leading-[0.85] tracking-tighter">
                WE ARE <br /> <span className="text-[#CD0000]">PERIODT.</span>
              </h2>
              <p className="text-2xl text-gray-500 font-medium leading-relaxed italic">
                "Born in Surat, 2023. We didn't just want to make burgers; we wanted to end the craving. Periodt."
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center items-center relative animate-zoom">
              <div className="relative group">
                <div className="absolute -inset-4 bg-red-50 rounded-full animate-pulse"></div>
                <div className="relative bg-white p-12 rounded-full shadow-2xl border-8 border-white">
                  <img src={logo} alt="Logo" className="w-64 h-64 md:w-80 md:h-80 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                onClick={stat.isInteractive ? () => setShowLocations(!showLocations) : null}
                className={`space-y-4 group ${stat.isInteractive ? 'cursor-pointer' : ''}`}
              >
                <div className={`inline-block p-4 bg-[#CD0000] rounded-2xl group-hover:scale-110 transition-transform ${stat.isInteractive ? 'ring-4 ring-red-500/30' : ''}`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-black italic">
                  {stat.value}
                  {stat.isInteractive && <ChevronDown className={`inline ml-2 transition-transform ${showLocations ? 'rotate-180' : ''}`} />}
                </h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expandable Locations List */}
      {showLocations && (
        <section className="py-16 bg-gray-800 text-white animate-fade-in border-t border-gray-700">
          <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
            <h4 className="text-2xl font-black italic mb-8 text-[#CD0000] uppercase">Our Active Branches:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((loc, index) => (
                <div key={index} className="flex flex-col p-6 bg-gray-900 rounded-3xl border border-gray-700 hover:border-[#CD0000] transition-all">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#CD0000] shrink-0" />
                    <div className="flex-grow">
                      <p className="font-black uppercase italic text-lg leading-tight">{loc.name}</p>
                      <p className="text-gray-400 text-sm mt-1">{loc.address}</p>
                    </div>
                  </div>

                  {/* Action Button for Kamrej or any branch with a URL */}
                  {loc.mapUrl && (
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-[#CD0000] font-black text-xs uppercase tracking-widest hover:text-white transition-colors"
                    >
                      View Exact Location <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Philosophy Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <h3 className="text-5xl font-black text-gray-900 tracking-tight italic uppercase">The Periodt Promise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm">
              <h4 className="text-2xl font-black mb-4 text-[#CD0000]">0% COMPROMISE</h4>
              <p className="text-gray-500 font-medium italic text-sm">Freshly baked buns and local farm-sourced vegetables daily.</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm">
              <h4 className="text-2xl font-black mb-4 text-[#CD0000]">SURAT PROUD</h4>
              <p className="text-gray-500 font-medium italic text-sm">Tailoring global gourmet flavors to our Diamond City's palate.</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm">
              <h4 className="text-2xl font-black mb-4 text-[#CD0000]">FAST & FRESH</h4>
              <p className="text-gray-500 font-medium italic text-sm">Premium gourmet experience served with QSR speed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;