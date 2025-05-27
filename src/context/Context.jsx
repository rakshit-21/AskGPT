// src/context/Context.js
import { createContext, useState } from 'react';
import runChat from '../config/gemini';

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [PrevPrompts, setPrevPrompts] = useState([]);

  // Word-by-word animation with delay
  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    }, 75 * index);
  };

  const newChat=()=>{
    setLoading(false)
    setShowResult(false)
  }

  const onSent = async (prompt) => {
    const finalPrompt = prompt || input;
    if (!finalPrompt.trim()) return;

    setLoading(true);
    setShowResult(true);
    setRecentPrompt(finalPrompt);

    // Add to previous prompts if not already present
    setPrevPrompts(prev => (
      prev.includes(finalPrompt) ? prev : [...prev, finalPrompt]
    ));

    try {
      const response = await runChat(finalPrompt);

      // Format *...* to <b>...</b>
      const responseArray = response.split("*");
      let formattedResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        formattedResponse += (i % 2 === 1)
          ? `<b>${responseArray[i]}</b>`
          : responseArray[i];
      }

      const words = formattedResponse.split(" ");
      setResultData(""); // Reset before typing
      words.forEach((word, index) => {
        delayPara(index, word + " ");
      });

    } catch (error) {
      setResultData("Something went wrong while fetching response from Gemini.");
      console.error(error);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <context.Provider
      value={{
        onSent,
        recentPrompt,
        setRecentPrompt,
        loading,
        resultData,
        showResult,
        PrevPrompts,
        input,
        setInput,
        newChat
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
