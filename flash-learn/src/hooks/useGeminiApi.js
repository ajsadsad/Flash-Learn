import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from 'react';

export default function useMakeGeminiRequest() {
    const [geminiResponse, setResponse] = useState(null);

    const getGeminiResponse = async (subject, level, questionType) => {
        try {
            const apikey = "AIzaSyC_1f8r2mROw-xgvGPq0xUUNmjql3q2yKM";
            const genAI = new GoogleGenerativeAI(apikey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `Generate a ${questionType} question for ${subject} at ${level}. The response should be in JSON format with the question as a key and the answers as an array.`;

            const result = await model.generateContent(prompt);
            const response = await result.response.json();  
            setResponse(response);
        } catch (error) {
            console.error("Error fetching Gemini API response:", error);
        }
    };

    return { geminiResponse, getGeminiResponse };

    };

  