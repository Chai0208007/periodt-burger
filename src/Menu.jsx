import React from 'react';
import { menuImages } from './mock';
import { Download, ZoomIn, UtensilsCrossed, Smartphone } from 'lucide-react';

const Menu = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-[#CD0000] font-black tracking-[0.4em] text-sm uppercase mb-4 block animate-fade-in">
            Taste the Authority
          </span>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-none mb-6">
            THE <span className="text-[#CD0000]">PERIODT</span> MENU
          </h2>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto italic">
            Gourmet flavors, locally crafted. From Surat's favorite classics to our exotic signatures.
          </p>
        </div>
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap pointer-events-none select-none">
          PERIODT BURGER
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {menuImages.map((img, index) => (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Container with Gourmet Border */}
                <div className="relative overflow-hidden rounded-[3rem] border-[12px] border-gray-50 shadow-2xl transition-all duration-500 group-hover:border-red-50 group-hover:-translate-y-2">
                  <img
                    src={img}
                    alt={`Periodt Menu Page ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <button
                      onClick={() => window.open(img, '_blank')}
                      className="p-4 bg-white rounded-full text-gray-900 hover:bg-[#CD0000] hover:text-white transition-all transform translate-y-10 group-hover:translate-y-0"
                    >
                      <ZoomIn size={24} />
                    </button>
                    <a
                      href={img}
                      download={`Periodt-Menu-Page-${index + 1}`}
                      className="p-4 bg-[#CD0000] rounded-full text-white hover:bg-black transition-all transform translate-y-10 group-hover:translate-y-0 delay-75"
                    >
                      <Download size={24} />
                    </a>
                  </div>
                </div>

                {/* Info Bar below image */}
                <div className="mt-8 flex items-center justify-between px-4">
                  <div>
                    <h3 className="text-3xl font-black italic text-gray-900 tracking-tighter uppercase">
                      Menu Selection <span className="text-[#CD0000]">0{index + 1}</span>
                    </h3>
                    <p className="text-gray-400 font-bold text-sm tracking-widest uppercase mt-1">
                      Explore our varieties
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#CD0000]">
                    <UtensilsCrossed size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-gray-900 rounded-[3.5rem] text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-black uppercase tracking-widest mb-6">
                <Smartphone size={14} /> Quick Delivery
              </div>
              <h3 className="text-4xl md:text-6xl font-black italic mb-6 uppercase tracking-tighter">
                CRAVING <span className="text-[#CD0000]">PERIODT?</span>
              </h3>
              <p className="text-xl font-bold mb-12 text-gray-400 italic">Find us on your favorite food apps for gourmet delivery.</p>

              <div className="flex flex-wrap justify-center gap-6">
                {/* Zomato Red Button */}
                <div className="bg-[#E23744] text-white px-10 py-6 rounded-[2rem] font-black text-2xl flex items-center gap-4 shadow-xl transform hover:scale-105 transition-all cursor-default">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  ZOMATO
                </div>
                {/* Swiggy Orange Button */}
                <div className="bg-[#FC8019] text-white px-10 py-6 rounded-[2rem] font-black text-2xl flex items-center gap-4 shadow-xl transform hover:scale-105 transition-all cursor-default">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  SWIGGY
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#CD0000]/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#CD0000]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;