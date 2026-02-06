import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the client
// Ensure process.env.API_KEY is available in your environment
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key is missing. Please configure process.env.API_KEY.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }, // Speed over depth for a widget
      },
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, something went wrong while connecting to the AI.";
  }
};