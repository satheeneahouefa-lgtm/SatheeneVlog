
import { GoogleGenAI } from "@google/genai";

// L'API_KEY est injectée via les variables d'environnement de Vercel ou du système
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDailyWellnessTip = async (mood?: string): Promise<string> => {
  if (!process.env.API_KEY) return "Prenez un moment pour respirer aujourd'hui.";
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Génère un court conseil de bien-être (max 150 caractères) pour quelqu'un qui se sent ${mood || 'un peu fatigué'}. Le ton doit être poétique, doux et élégant. En français.`,
    });
    return response.text || "Prenez une grande inspiration et savourez l'instant présent.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "L'élégance commence par la bienveillance envers soi-même.";
  }
};

export const getArticleSummary = async (content: string): Promise<string> => {
  if (!process.env.API_KEY) return "";
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Résume cet article de blog en une phrase poétique et inspirante : ${content.substring(0, 1000)}`,
    });
    return response.text || "";
  } catch (error) {
    return "";
  }
};
