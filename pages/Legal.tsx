
import React from 'react';

export const Privacy: React.FC = () => (
  <div className="max-w-3xl mx-auto py-32 px-4">
    <h1 className="text-4xl font-serif mb-16">Confidentialité</h1>
    <div className="prose prose-sm text-gray-500 font-light space-y-8 italic">
      <p>Vos données sont précieuses et sont traitées avec le plus grand respect. Nous ne vendons jamais vos informations.</p>
    </div>
  </div>
);

export const Mentions: React.FC = () => (
  <div className="max-w-3xl mx-auto py-32 px-4">
    <h1 className="text-4xl font-serif mb-16">Mentions Légales</h1>
    <div className="prose prose-sm text-gray-500 font-light italic">
      <p>SatheeneVlog Édition Digitale.</p>
      <p>satheenevlog@gmail.com</p>
    </div>
  </div>
);

export const Terms: React.FC = () => (
  <div className="max-w-3xl mx-auto py-32 px-4">
    <h1 className="text-4xl font-serif mb-16">Conditions</h1>
    <div className="prose prose-sm text-gray-500 font-light italic">
      <p>En naviguant ici, vous acceptez nos conditions de douceur et de bienveillance.</p>
    </div>
  </div>
);
