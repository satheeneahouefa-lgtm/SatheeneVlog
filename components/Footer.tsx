
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-accent/20 pt-16 pb-8 px-4 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-serif mb-6">SatheeneVlog</h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs italic">
            Célébrer la douceur de vivre, un article à la fois.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] font-semibold tracking-widest mb-6 uppercase">Menu</h4>
          <ul className="space-y-4 text-[13px] text-gray-500 uppercase tracking-tight">
            <li><Link to="/" className="hover:text-accent">Maison</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Le Blog</Link></li>
            <li><Link to="/about" className="hover:text-accent">À Propos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold tracking-widest mb-6 uppercase">Légal</h4>
          <ul className="space-y-4 text-[13px] text-gray-500 uppercase tracking-tight">
            <li><Link to="/privacy" className="hover:text-accent">Confidentialité</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold tracking-widest mb-6 uppercase">Social</h4>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent"><Instagram size={18} /></a>
            <a href="mailto:satheenevlog@gmail.com" className="text-gray-400 hover:text-accent"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-accent/10 pt-8 text-[10px] tracking-[0.2em] text-gray-400 uppercase flex justify-between">
        <p>© 2024 SatheeneVlog.</p>
        <p>Douceur & Sérénité</p>
      </div>
    </footer>
  );
};

export default Footer;
