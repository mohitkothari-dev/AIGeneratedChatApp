import { GoogleGenerativeAI } from '@google/generative-ai';
import { handleApiError } from '../utils/errorHandling';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing Gemini API key. Please add VITE_GEMINI_API_KEY to your environment variables.');
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export async function getChatResponse(prompt: string): Promise<string> {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error('Empty response from Gemini API');
    }
    
    return text;
  } catch (error) {
    const handledError = handleApiError(error);
    console.error('Error getting chat response:', handledError);
    throw handledError;
  }
}