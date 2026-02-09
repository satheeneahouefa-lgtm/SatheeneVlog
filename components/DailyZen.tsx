
import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { getDailyWellnessTip } from '../services/gemini';

const DailyZen: React.FC = () => {
  const [tip, setTip] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const fetchTip = async () => {
    setLoading(true);
    const newTip = await getDailyWellnessTip();
    setTip(newTip);
    setLoading(false);
  };

  useEffect(() => {
    fetchTip();
  }, []);

  return (
    <div className="bg-white p-10 soft-shadow border border-accent/10 relative text-center">
      <Sparkles size={20} className="text-accent/30 mx-auto mb-6" />
      <h3 className="text-[10px] tracking-[0.3em] text-accent mb-6 font-bold uppercase">L'Inspiration du moment</h3>
      <p className={`text-2xl italic font-serif leading-relaxed transition-opacity duration-700 ${loading ? 'opacity-30' : 'opacity-100'}`}>
        "{tip}"
      </p>
      <button 
        onClick={fetchTip}
        disabled={loading}
        className="mt-10 flex items-center justify-center mx-auto space-x-2 text-[10px] tracking-widest text-gray-400 hover:text-accent transition-colors uppercase"
      >
        <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
        <span>AUTRE CONSEIL</span>
      </button>
    </div>
  );
};

export default DailyZen;
