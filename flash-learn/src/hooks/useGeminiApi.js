import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from 'react'

export default function useMakeGeminiRequest() {

    const[geminiResponse, setResponse] = useState("default");

    const getGeminiResponse = async (prompt) => {
        try {
            const genAI = new GoogleGenerativeAI("AIzaSyC_1f8r2mROw-xgvGPq0xUUNmjql3q2yKM");
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            setResponse(text);
        } catch {

        } finally {

        }
    }
    getGeminiResponse();

    return { geminiResponse, getGeminiResponse }
}
// Example prompt
// const prompt = "Provide a a multiple choice question that requires a student aged from 5 to 7 years old to select from three choices of how to fix the punctuation of a randomly generated short length sentence. Please place this into a JSON format response with the question being a category, and the answers each having its own category. "