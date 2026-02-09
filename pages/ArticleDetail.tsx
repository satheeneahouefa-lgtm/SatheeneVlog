
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_POSTS } from '../constants';
import { getArticleSummary } from '../services/gemini';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = MOCK_POSTS.find(p => p.id === id);
  const [summary, setSummary] = useState<string>('');

  useEffect(() => {
    if (post) {
      getArticleSummary(post.content).then(setSummary);
    }
  }, [post]);

  if (!post) return <div className="py-24 text-center font-serif text-2xl">Article introuvable.</div>;

  return (
    <div className="animate-fadeIn">
      <div className="w-full h-[70vh] relative">
        <img src={post.imageUrl} className="w-full h-full object-cover" alt={post.title} />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-24">
        <header className="text-center mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent mb-8 block font-bold">{post.category}</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">{post.title}</h1>
          <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase font-bold">Écrit par {post.author} • {post.date}</p>
        </header>

        {summary && (
          <div className="mb-20 p-12 bg-beige-soft border-l-2 border-accent text-xl italic font-serif text-gray-600 leading-relaxed text-center">
            "{summary}"
          </div>
        )}

        <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-10">
          {post.content.split('\n\n').map((p, i) => (
            <p key={i} className="text-lg">{p}</p>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-gray-100 flex justify-center">
          <Link to="/blog" className="text-[10px] tracking-[0.4em] text-gray-400 hover:text-accent font-bold uppercase transition-all">RETOUR AU JOURNAL</Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
