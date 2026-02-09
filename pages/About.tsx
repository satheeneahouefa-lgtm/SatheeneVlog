
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-32 px-4 md:px-12 max-w-6xl mx-auto animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-20 items-start">
        <div className="md:col-span-2">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop" alt="Satheene" className="w-full grayscale-[20%]" />
        </div>
        <div className="md:col-span-3 py-10">
          <span className="text-[10px] tracking-[0.5em] text-accent mb-8 block font-bold uppercase">L'HISTOIRE</span>
          <h1 className="text-6xl font-serif mb-12">Satheene</h1>
          <div className="space-y-10 text-gray-500 font-light text-xl leading-relaxed italic">
            <p>"SatheeneVlog est né d'un besoin de calme. Dans un monde qui crie, j'ai voulu créer un espace qui murmure."</p>
            <p>Mon approche est minimaliste : moins de superflu, plus d'intention. Que ce soit dans la mode ou le bien-être, je cherche l'équilibre qui apaise.</p>
            <p className="font-serif text-accent text-3xl pt-10">Avec douceur,</p>
            <p className="font-serif text-4xl">Satheene</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
