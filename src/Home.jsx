import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Zap, Award } from 'lucide-react';
import { Button } from './components/ui/button';
import { restaurantInfo } from './mock';
import homeImg from '../home.jpg';
import logo from '../logo.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      {/* Adjusted padding for better vertical balance */}
      <section className="relative pt-24 pb-24 lg:pt-28 lg:pb-28 overflow-hidden bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side: Refined Typography */}
          <div className="lg:w-1/2 text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-50 text-[#CD0000] font-black text-xs tracking-widest uppercase border border-red-100 shadow-sm">
              <Star size={14} fill="currentColor" /> {restaurantInfo.stats.outlets} Outlets Across Surat
            </div>

            <div className="space-y-2">
              {/* REDUCED FONT SIZES: 
                  Mobile: text-5xl (was text-2xl/6xl)
                  Tablet: text-7xl 
                  Large Desktop: text-8xl (was 110px) 
              */}
              <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-[900] text-gray-900 leading-[1.0] tracking-tighter uppercase">
                "Eat Bold <br />
                <span className="text-[#CD0000] italic">Stay-Classy!"</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-500 max-w-lg font-medium leading-relaxed italic">
              Gourmet burgers crafted for those who don't settle for average. <span className="text-gray-900 font-bold">Periodt.</span>
            </p>

            {/* Partnership Button Section */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/menu">
                <Button className="bg-[#CD0000] text-white px-8 py-6 rounded-2xl font-black text-base hover:bg-black transition-all shadow-xl">
                  EXPLORE MENU
                </Button>
              </Link>

              <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-1">Order via</p>
                <div className="flex items-center gap-2">
                  <div className="bg-[#E23744] text-white px-3 py-1.5 rounded-lg font-black text-[10px] shadow-sm tracking-widest">
                    ZOMATO
                  </div>
                  <div className="bg-[#FC8019] text-white px-3 py-1.5 rounded-lg font-black text-[10px] shadow-sm tracking-widest">
                    SWIGGY
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Image Layout */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative z-10 p-2 bg-white rounded-[3rem] shadow-2xl border border-gray-50 transform hover:scale-[1.01] transition-transform duration-500">
              <img
                src={homeImg}
                alt="Periodt Burger Outlet"
                // Fixed height for stability across screens
                className="rounded-[2.5rem] w-full h-[400px] md:h-[550px] object-cover"
              />
            </div>

            {/* Floating Stats Card - Slightly scaled down for elegance */}
            <div className="absolute -bottom-4 -right-2 lg:-right-4 z-20 bg-white p-5 rounded-[2rem] shadow-2xl border-b-4 border-[#CD0000] animate-float">
              <div className="flex items-center gap-4">
                <div className="bg-red-50 p-2 rounded-xl">
                  <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900 leading-none">{restaurantInfo.stats.customers}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Happy Fans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST BAR --- */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { icon: <ShieldCheck />, title: "TOP QUALITY", desc: "Fresh Ingredients" },
            { icon: <Zap />, title: "FAST SERVE", desc: "Hot & Ready" },
            { icon: <Award />, title: "GOURMET", desc: "Expert Chefs" },
            { icon: <Star />, title: "ZERO ROYALTY", desc: "For Partners" },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2 group">
              <div className="text-[#CD0000] bg-red-50 p-3 rounded-2xl group-hover:bg-[#CD0000] group-hover:text-white transition-all duration-300">
                {React.cloneElement(feature.icon, { size: 24, strokeWidth: 2.5 })}
              </div>
              <h4 className="font-black text-base tracking-tight uppercase leading-none">{feature.title}</h4>
              <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;