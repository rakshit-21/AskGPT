import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const runChat = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash"  // updated model name
    });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = await response.text();

    // Format the response with markdown-like HTML support
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
      .replace(/\*(.*?)\*/g, "<em>$1</em>")             // Italic
      .replace(/\n/g, "<br />");                        // Line breaks

    return formattedText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error. Please try again.";
  }
};

export default runChat;
