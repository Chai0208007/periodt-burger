import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../logo.png';

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setShow(false);
                setIsOpen(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="Periodt Burger" className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform" />
                </Link>

                {/* Desktop Links - All Pages Restored */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    <Link to="/" className="text-[13px] font-black uppercase tracking-widest text-gray-900 hover:text-[#CD0000] transition-colors">Home</Link>
                    <Link to="/menu" className="text-[13px] font-black uppercase tracking-widest text-gray-900 hover:text-[#CD0000] transition-colors">Menu</Link>
                    <Link to="/about" className="text-[13px] font-black uppercase tracking-widest text-gray-900 hover:text-[#CD0000] transition-colors">About Us</Link>
                    <Link to="/contact" className="text-[13px] font-black uppercase tracking-widest text-gray-900 hover:text-[#CD0000] transition-colors">Contact Us</Link>
                    <Link to="/franchise" className="text-[13px] font-black uppercase tracking-widest text-gray-900 hover:text-[#CD0000] transition-colors">Franchise</Link>
                </div>

                {/* Partner Badges & Mobile Toggle */}
                <div className="flex items-center gap-2">
                    <div className="hidden lg:flex gap-2 mr-2">
                        <div className="bg-[#E23744] px-4 py-1.5 rounded-full text-[10px] font-black text-white shadow-sm transition-transform hover:scale-105 cursor-default">ZOMATO</div>
                        <div className="bg-[#FC8019] px-4 py-1.5 rounded-full text-[10px] font-black text-white shadow-sm transition-transform hover:scale-105 cursor-default">SWIGGY</div>
                    </div>

                    {/* Hamburger Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-900 focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="flex flex-col p-8 gap-6 font-black uppercase text-center tracking-widest text-gray-900">
                    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#CD0000]">Home</Link>
                    <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-[#CD0000]">Menu</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#CD0000]">About Us</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#CD0000]">Contact Us</Link>
                    <Link to="/franchise" onClick={() => setIsOpen(false)} className="hover:text-[#CD0000]">Franchise</Link>

                    {/* Mobile Partner Badges */}
                    <div className="flex justify-center gap-4 pt-6 border-t border-gray-50">
                        <div className="bg-[#E23744] text-white px-5 py-2 rounded-xl text-[10px] font-black">ZOMATO</div>
                        <div className="bg-[#FC8019] text-white px-5 py-2 rounded-xl text-[10px] font-black">SWIGGY</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;