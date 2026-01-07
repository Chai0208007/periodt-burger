import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Smartphone } from 'lucide-react';
import { restaurantInfo } from './mock';
import logo from '../logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#0B1120] text-gray-400 py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand Section with ORIGINAL COLOR Logo */}
                <div className="space-y-6">
                    <Link to="/" className="block">
                        <img
                            src={logo}
                            alt="Periodt Burger Logo"
                            className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                        // Removed brightness-0 and invert to show original colors
                        />
                    </Link>
                    <p className="text-sm font-medium leading-relaxed max-w-xs italic">
                        Deliciously Bold, Perfectly Crafted. Experience the best gourmet burgers in Surat!
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm">Navigation</h4>
                    <ul className="space-y-2 text-sm font-bold uppercase tracking-tight">
                        <li><Link to="/" className="hover:text-[#ff0000] transition-colors">Home</Link></li>
                        <li><Link to="/menu" className="hover:text-[#ff0000] transition-colors">Menu</Link></li>
                        <li><Link to="/about" className="hover:text-[#ff0000] transition-colors">About Us</Link></li>
                        <li><Link to="/franchise" className="hover:text-[#ff0000] transition-colors">Franchise</Link></li>
                        <li><Link to="/contact" className="hover:text-[#ff0000] transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm">Contact</h4>
                    <div className="space-y-3">
                        <a href="https://wa.me/917984476448" className="flex items-center gap-3 hover:text-white transition-colors">
                            <Phone size={18} className="text-[#ff0000]" />
                            <span className="text-sm font-bold">+91 79844 76448</span>
                        </a>
                        <a href="mailto:info@periodtburger.com" className="flex items-center gap-3 hover:text-white transition-colors">
                            <Mail size={18} className="text-[#ff0000]" />
                            <span className="text-sm font-bold lowercase italic">info@periodtburger.com</span>
                        </a>
                    </div>
                    {/* Partner Section in Footer */}
                    <div className="pt-4 space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Delivery Partners</p>
                        <div className="flex gap-2">
                            <div className="bg-[#E23744] text-white px-3 py-1.5 rounded-lg text-[9px] font-black">ZOMATO</div>
                            <div className="bg-[#FC8019] text-white px-3 py-1.5 rounded-lg text-[9px] font-black">SWIGGY</div>
                        </div>
                    </div>
                </div>

                {/* Social Media & Timing */}
                <div className="space-y-6">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm">Follow Us</h4>
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/people/Peridot-Burger-Official/100092350171217/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 rounded-full hover:bg-[#ff0000] hover:text-white transition-all transform hover:scale-110"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/periodtburger?igsh=MWEzMmN5Z3M3MjJocg=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 rounded-full hover:bg-[#ff0000] hover:text-white transition-all transform hover:scale-110"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Opening Hours</p>
                        <p className="text-sm font-bold text-white tracking-tight">11:00 AM - 11:30 PM</p>
                    </div>
                </div>

            </div>

            {/* Copyright Line */}
            <div className="mt-16 pt-8 border-t border-gray-800/50 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                    © 2026 <span className="text-[#ff0000]">Periodt Burger</span>. Serving Surat with 6+ Outlets.
                </p>
            </div>
        </footer>
    );
};

export default Footer;