
import React, { useState } from 'react';
import { User } from '../types';

interface AuthProps {
  onLogin: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      id: '1',
      email,
      username: email.split('@')[0],
      role: 'subscriber'
    });
  };

  return (
    <div className="py-32 px-4 flex justify-center bg-beige-soft min-h-screen items-center">
      <div className="max-w-md w-full bg-white p-16 soft-shadow border border-accent/10">
        <h2 className="text-4xl font-serif text-center mb-4">Rejoindre</h2>
        <p className="text-center text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold mb-16 italic">L'aventure commence ici.</p>
        <form onSubmit={handleSubmit} className="space-y-10">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="VOTRE EMAIL" className="w-full bg-transparent border-b border-accent/30 py-4 focus:outline-none focus:border-accent text-[10px] tracking-[0.4em] font-bold uppercase" required />
          <button type="submit" className="w-full py-5 bg-accent text-white text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-opacity-90 transition-all">S'INSCRIRE</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
