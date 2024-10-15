import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useCallback } from 'react';

export default function useMakeGeminiRequest() {
    const [geminiResponse, setResponse] = useState(null);

    const getGeminiResponse = useCallback(async (subject, level, questionType) => {
        try {
            const apikey = "AIzaSyC_1f8r2mROw-xgvGPq0xUUNmjql3q2yKM";
            const genAI = new GoogleGenerativeAI(apikey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `
        Generate a ${questionType} question for ${subject} at ${level}.
        The question and all answers should be text-based only.
        There should only be three question options.
        Please clearly specify which answer is correct in the response.
        If the focus is grammar, the question should relate to sentence structure, verb conjugation, or correct word usage.
        If the focus is punctuation, the question should be about identifying or using punctuation marks like commas, periods, semicolons, dash, apostrophe, question mark, exclamation mark.
        If the focus is spelling, the question should involve identifying correct spellings or choosing between correctly and incorrectly spelled words.
        If the focus is addition, the question should involve adding two numbers together or choosing the correct answer from the equation.
        If the focus is subtraction, the question should involve subtracting two numbers from each other or choosing the correct answer from the equation.
        If the focus is multiplication, the question should involve multiplying two numbers or choosing the correct answer from the equation.
        If the focus is division, the question should involve dividing two numbers choosing the correct answer from the equation.
        The response should be in JSON format with "question" as a key, "answers" as an array of strings, and "correctAnswer" as the correct answer.`; 


            const result = await model.generateContent(prompt);

            // Extract the text from the response
            const rawContent = result.response.candidates[0]?.content.parts[0]?.text;
    
            // Log the raw response for debugging purposes
            console.log("Raw content:", rawContent);
    
             // Remove code block markers from the response
             const cleanedContent = rawContent.replace(/```json|```/g, '').trim();
    
            // Parse the cleaned string as JSON
            const jsonResponse = JSON.parse(cleanedContent);
    
            // Set the parsed response
            setResponse(jsonResponse);
            
        } catch (error) {
            console.error("Error fetching Gemini API response:", error);
        }
    }, []); // Empty dependency array ensures it's only created once

    return { geminiResponse, getGeminiResponse };
}
  