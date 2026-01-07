import React from 'react';
import { CheckCircle2, Star, TrendingUp, ShieldCheck, Briefcase, Zap } from 'lucide-react';
import { restaurantInfo } from './mock';

const Franchise = () => {
    // This function handles the WhatsApp redirect reliably
    const handleWhatsAppClick = (modelType) => {
        const phoneNumber = "+917984474448";
        const message = `Hi, I am interested in the Periodt Burger ${modelType} Franchise Model. Please share details.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="text-[#CD0000] font-black tracking-[0.4em] text-sm uppercase mb-4 block">
                        Partner with the Best
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8">
                        JOIN THE <br /><span className="text-[#CD0000]">REVOLUTION</span>
                    </h1>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap pointer-events-none select-none uppercase">
                    PARTNERSHIP
                </div>
            </section>

            {/* Franchise Models Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Standard Model */}
                        <div className="group p-10 bg-gray-50 rounded-[3rem] border-b-8 border-gray-200 hover:border-[#CD0000] transition-all duration-500">
                            <h3 className="text-3xl font-black italic uppercase mb-2">Standard Model</h3>
                            <p className="text-gray-500 font-medium italic mb-8">Perfect for food courts and compact spaces.</p>

                            <ul className="space-y-4 mb-10">
                                {['Compact Design', 'Full Staff Training', 'Supply Chain Support'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-sm text-gray-700">
                                        <CheckCircle2 size={18} className="text-[#CD0000]" /> {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleWhatsAppClick('Standard')}
                                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#CD0000] transition-colors shadow-lg"
                            >
                                Request Details on WhatsApp
                            </button>
                        </div>

                        {/* Premium Model */}
                        <div className="group p-10 bg-white rounded-[3rem] border-8 border-red-50 shadow-2xl relative transform hover:-translate-y-2 transition-all duration-500">
                            <h3 className="text-3xl font-black italic uppercase mb-2">Premium Model</h3>
                            <p className="text-gray-500 font-medium italic mb-8">Our flagship experience with seating and full menu.</p>

                            <ul className="space-y-4 mb-10">
                                {['Full Dine-in Setup', 'Exclusive Menu Items', 'Priority Tech Support'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-sm text-gray-900">
                                        <CheckCircle2 size={18} className="text-[#CD0000]" /> {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleWhatsAppClick('Premium')}
                                className="w-full bg-[#CD0000] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-colors shadow-lg"
                            >
                                Enquire Now on WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Franchise;