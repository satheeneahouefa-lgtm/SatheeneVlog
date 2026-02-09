
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="py-32 px-4 md:px-12 max-w-4xl mx-auto animate-fadeIn">
      <div className="text-center mb-24">
        <h1 className="text-6xl font-serif mb-8">Contact</h1>
        <p className="text-gray-400 italic text-lg font-light">Pour une collaboration ou un simple mot doux.</p>
      </div>

      {sent ? (
        <div className="text-center p-20 bg-beige-soft animate-fadeIn">
          <h2 className="text-3xl font-serif mb-4 text-accent">Merci.</h2>
          <p className="text-gray-500 font-light">Votre message a été envoyé avec succès.</p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <input type="text" placeholder="NOM" className="w-full bg-transparent border-b border-accent/30 py-4 focus:outline-none focus:border-accent text-[10px] tracking-[0.4em] font-bold" required />
            <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-accent/30 py-4 focus:outline-none focus:border-accent text-[10px] tracking-[0.4em] font-bold" required />
          </div>
          <textarea placeholder="MESSAGE" rows={6} className="w-full bg-transparent border-b border-accent/30 py-4 focus:outline-none focus:border-accent text-[10px] tracking-[0.4em] font-bold" required></textarea>
          <button type="submit" className="w-full py-6 bg-accent text-white text-[10px] tracking-[0.5em] font-bold uppercase hover:bg-opacity-90 transition-all flex items-center justify-center gap-4">
            ENVOYER <Send size={14} />
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
