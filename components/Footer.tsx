
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react';
import { NGO_NAME, SOCIAL_LINKS, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              {/*<img src={LOGO_URL} alt={NGO_NAME} className="h-10 w-auto invert brightness-0" />*/}
              <span className="text-xl font-bold text-white uppercase tracking-wider">{NGO_NAME}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed text-left md:text-justify">
              Founded in June 2020 during the COVID-19 pandemic, we are a Section 8 NGO dedicated to bringing dignity, relief, and opportunity to those we serve.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-rose-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-emerald-600 hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-700 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Donation Options */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Flexible Giving</h4>
            <p className="text-slate-400 text-xs leading-relaxed text-left md:text-justify">
              Donations can be made directly to Buuu Foundation. If you would like to support an ashram or welfare organisation we have helped in the past, please contact us for more information.
            </p>
            <div className="mt-6 flex flex-col space-y-2">
              <Link to="/donate" className="text-rose-500 font-bold text-sm hover:underline">Donate Now</Link>
              <Link to="/faq" className="text-slate-400 font-bold text-sm hover:text-white">View FAQ</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 group">
                <Phone className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
                <span className="group-hover:text-white transition-colors">T: {SOCIAL_LINKS.phone}</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <Mail className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
                <span className="group-hover:text-white transition-colors">E: {SOCIAL_LINKS.email}</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
                <span className="group-hover:text-white transition-colors">{SOCIAL_LINKS.address}</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="grid grid-cols-1 gap-3 text-sm font-medium">
              <li><Link to="/about" className="hover:text-rose-500 transition-colors">Our Story</Link></li>
              <li><Link to="/what-we-do" className="hover:text-rose-500 transition-colors">What We Do</Link></li>
              <li><Link to="/activities" className="hover:text-rose-500 transition-colors">Recent Activities</Link></li>
              <li><Link to="/faq" className="hover:text-rose-500 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-rose-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Tax & Acknowledgements */}
        <div className="border-t border-slate-800 pt-10 mb-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-xs text-slate-400 leading-relaxed">

          {/* Tax Exemptions */}
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
              Tax Exemptions
            </h5>
            <p className="text-gray-400 text-sm">
              Tax exemption details will be updated once applicable approvals are in place.
            </p>
          </div>

          {/* Acknowledgements */}
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
              Acknowledgements
            </h5>
            <p className="mb-2">
              We extend our heartfelt gratitude to <span className="text-slate-200 font-semibold">Aravind Sekar</span> for
              generously providing images featured on this website.
            </p>
            <p>
              We also acknowledge images sourced from Unsplash contributors, including{' '}
              <span className="text-slate-200 font-semibold">Anusha Barwa</span> and{' '}
              <span className="text-slate-200 font-semibold">Hush Naidoo Jade Photography</span>.
            </p>
          </div>

        </div>


        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {NGO_NAME}. Section 8 Registered (May 7, 2021). CIN: U85300TN2021NPL143341</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-slate-300">Privacy</Link>
            <Link to="/transparency" className="hover:text-slate-300">Transparency</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
