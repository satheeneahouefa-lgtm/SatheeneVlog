
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_POSTS } from '../constants';
import Newsletter from '../components/Newsletter';
import DailyZen from '../components/DailyZen';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero" 
            className="w-full h-full object-cover grayscale-[30%] opacity-80"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 font-serif leading-tight">L'Éclat Doux</h1>
          <p className="text-sm md:text-lg tracking-[0.5em] uppercase text-gray-700 mb-12">Art de vivre • Sérénité • Style</p>
          <Link to="/blog" className="inline-block px-12 py-5 bg-white text-gray-800 border border-gray-100 text-[10px] tracking-[0.4em] uppercase hover:bg-beige-soft transition-all font-bold">
            ENTRER DANS LE JOURNAL
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 px-4 md:px-12 bg-white max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="aspect-[3/4] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Satheene" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.4em] text-accent mb-6 block font-bold uppercase">L'ÉDITO</span>
            <h2 className="text-5xl font-serif mb-10 leading-tight">Ralentir pour mieux voir.</h2>
            <p className="text-gray-500 leading-relaxed mb-10 text-lg font-light italic">
              "SatheeneVlog est né d'une quête de simplicité. Ici, on célèbre les petits rituels, les matières nobles et la lumière qui change tout."
            </p>
            <Link to="/about" className="text-[10px] tracking-[0.3em] text-accent border-b border-accent pb-2 hover:text-gray-800 hover:border-gray-800 transition-all font-bold uppercase">MA VISION</Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-32 px-4 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl font-serif">Dernières pensées</h2>
            <Link to="/blog" className="text-[10px] tracking-widest text-gray-400 hover:text-accent uppercase font-bold">TOUT LIRE</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {MOCK_POSTS.map(post => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <div className="overflow-hidden mb-8 aspect-[4/5] bg-beige-soft">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <span className="text-[9px] tracking-[0.3em] uppercase text-accent mb-4 block font-bold">{post.category}</span>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-500 font-light line-clamp-2 italic">"{post.excerpt}"</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Daily AI Tip */}
      <section className="py-32 px-4 md:px-12 bg-white flex justify-center">
        <div className="max-w-3xl w-full">
          <DailyZen />
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
