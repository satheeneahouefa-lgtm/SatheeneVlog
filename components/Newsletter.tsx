
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section className="bg-beige-soft py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-6">Le Bulletin Doux</h2>
        <p className="text-gray-500 mb-10 italic font-light text-lg">
          Rejoignez notre communauté et recevez mes inspirations hebdomadaires.
        </p>
        
        {status === 'success' ? (
          <div className="bg-white p-8 border border-accent/20 animate-fadeIn">
            <p className="text-accent font-serif italic">Bienvenue dans l'aventure. Merci de votre confiance.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-0 border-b border-accent/30 pb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 px-4 py-4 focus:outline-none bg-transparent text-sm italic"
            />
            <button
              type="submit"
              className="px-8 py-4 text-[10px] tracking-[0.4em] text-accent uppercase hover:text-gray-800 transition-all font-bold"
            >
              S'ABONNER
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
