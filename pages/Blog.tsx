
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_POSTS, CATEGORIES } from '../constants';
import { Category } from '../types';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'TOUS'>('TOUS');

  const filteredPosts = activeCategory === 'TOUS' 
    ? MOCK_POSTS 
    : MOCK_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="py-24 px-4 md:px-12 max-w-7xl mx-auto animate-fadeIn">
      <header className="text-center mb-24">
        <h1 className="text-6xl font-serif mb-12">Le Journal</h1>
        <div className="flex flex-wrap justify-center gap-10 border-b border-gray-100 pb-10">
          <button onClick={() => setActiveCategory('TOUS')} className={`text-[10px] tracking-[0.4em] uppercase font-bold transition-all ${activeCategory === 'TOUS' ? 'text-accent border-b-2 border-accent' : 'text-gray-300 hover:text-gray-500'}`}>TOUS</button>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] tracking-[0.4em] uppercase font-bold transition-all ${activeCategory === cat ? 'text-accent border-b-2 border-accent' : 'text-gray-300 hover:text-gray-500'}`}>{cat}</button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
        {filteredPosts.map((post) => (
          <article key={post.id} className="group">
            <Link to={`/blog/${post.id}`}>
              <div className="aspect-[3/4] overflow-hidden mb-8 bg-beige-soft">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[9px] tracking-[0.3em] uppercase text-gray-400 font-bold">
                  <span className="text-accent">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-3xl font-serif leading-tight group-hover:text-accent transition-colors">{post.title}</h2>
                <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3 italic">"{post.excerpt}"</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
