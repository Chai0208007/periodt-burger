import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { restaurantInfo } from './mock';
import { Button } from './components/ui/button';

const Contact = () => {
  const contactDetails = [
    {
      icon: <Phone size={32} />,
      title: "Call Us",
      value: restaurantInfo.phone,
      link: `tel:${restaurantInfo.phone.replace(/\s/g, '')}`,
      label: "Direct Line"
    },
    {
      icon: <MessageSquare size={32} />,
      title: "WhatsApp",
      value: "Chat Now",
      link: "https://wa.me/917984474448",
      label: "Instant Support"
    },
    {
      icon: <Mail size={32} />,
      title: "Email Us",
      value: restaurantInfo.email,
      link: `mailto:${restaurantInfo.email}`,
      label: "Official Inquiry"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <span className="text-[#CD0000] font-black tracking-[0.4em] text-sm uppercase">Get In Touch</span>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            WE ARE <span className="text-[#CD0000]">HERE.</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium italic">"Have a question or just want to talk burgers? Reach out."</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {contactDetails.map((item, i) => (
            <a
              href={item.link}
              key={i}
              target={item.link.startsWith('http') ? "_blank" : "_self"}
              rel="noreferrer"
              className="p-10 bg-gray-50 rounded-[3rem] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-red-100 group text-center"
            >
              <div className="text-[#CD0000] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-2">{item.label}</h3>
              <p className="text-2xl font-black text-gray-900 uppercase italic">{item.value}</p>
            </a>
          ))}
        </div>

        {/* Location & Map Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-gray-900 rounded-[4rem] overflow-hidden shadow-2xl">
          <div className="p-12 md:p-20 space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#CD0000]/10 text-[#CD0000] font-black text-xs tracking-widest uppercase border border-[#CD0000]/20">
              <MapPin size={14} /> Our Headquarters
            </div>
            <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase leading-none">
              VISIT US IN <br /> <span className="text-[#CD0000]">KAMREJ.</span>
            </h2>
            <div className="space-y-6 text-gray-400">
              <div className="flex gap-4">
                <Clock className="text-[#CD0000] shrink-0" />
                <div>
                  <p className="font-black text-white uppercase tracking-widest text-sm">Operating Hours</p>
                  <p className="font-medium italic">Mon - Sun: 11:00 AM - 11:30 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-[#CD0000] shrink-0" />
                <div>
                  <p className="font-black text-white uppercase tracking-widest text-sm">Address</p>
                  <p className="font-medium italic leading-relaxed">
                    Periodt Burger, Kamrej Char Rasta,<br />
                    Surat, Gujarat 394185
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Button className="bg-[#CD0000] text-white px-10 py-7 rounded-2xl font-black text-lg hover:bg-white hover:text-black transition-all">
                GET DIRECTIONS
              </Button>
            </a>
          </div>

          {/* Embed Google Map */}
          <div className="h-[500px] lg:h-full min-h-[500px] bg-gray-800 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59508.38423455322!2d72.91574925!3d21.22097745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0525381f15%3A0xc3f173872cf3a7f8!2sKamrej%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-700"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;