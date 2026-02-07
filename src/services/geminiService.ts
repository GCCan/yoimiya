import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

export const generateResponse = async (prompt: string): Promise<string> => {
  // The API key must be obtained exclusively from the environment variable process.env.API_KEY
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error("API Key is missing. Please configure process.env.API_KEY.");
    return "Error: API Key is missing. Please check your configuration.";
  }

  // Initialize the client inside the function to prevent top-level initialization errors
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        // Disable thinking for faster response times in a chat widget
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, something went wrong while connecting to the AI.";
  }
};