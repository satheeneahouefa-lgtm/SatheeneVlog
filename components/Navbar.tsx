
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'MAISON', path: '/' },
    { name: 'LE BLOG', path: '/blog' },
    { name: 'À PROPOS', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-accent/20 px-4 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest text-gray-800">
          SATHEENEVLOG
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest hover:text-accent transition-colors ${
                isActive(link.path) ? 'text-accent border-b border-accent' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-xs text-gray-400">{user.username}</span>
                <button onClick={onLogout} className="text-[10px] tracking-tighter hover:underline text-gray-500">SORTIE</button>
              </div>
            ) : (
              <Link to="/auth" className="p-2 hover:bg-beige-soft rounded-full transition-colors">
                <UserIcon size={20} className="text-gray-600" />
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-accent/20 py-8 px-4 flex flex-col items-center space-y-6 animate-fadeIn">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-sm tracking-widest ${isActive(link.path) ? 'text-accent' : 'text-gray-600'}`}>
              {link.name}
            </Link>
          ))}
          <Link to={user ? "#" : "/auth"} onClick={() => { if(user) onLogout(); setIsOpen(false); }} className="text-sm tracking-widest text-gray-400">
            {user ? 'DÉCONNEXION' : 'CONNEXION'}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
