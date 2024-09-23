import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect, useCallback } from 'react';

export default function useMakeGeminiRequest() {

    const[geminiResponse, setResponse] = useState("");

    const handleGetResponse = useCallback(async () => {
        try {
            const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
            const prompt =
            "Provide a a multiple choice question that requires a student aged from 5 to 7 years old to select from three choices of how to fix the punctuation of a randomly generated short length sentence. Please place this into a JSON format response with the question being a category, and the answers each having its own category. "

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            setResponse(text);
            console.log(text);
        } catch {
            console.log("Failed");
        } finally {
            console.log("Complete");
        }
    }, []);

    useEffect(() => {
        handleGetResponse();
    },[handleGetResponse])

    return geminiResponse;
}