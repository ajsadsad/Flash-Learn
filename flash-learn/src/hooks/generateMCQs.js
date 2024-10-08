import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from 'react'

export default function useMakeGeminiRequest() {

    const[geminiResponse, setResponse] = useState("default");


    const apikey = application.env.REACT_APP_API_KEY.value;

    const subject = "Maths"; // TODO: get subject based off the subject selected
    const level = "Kindergarten to year 2"; // TODO: get level based off the level selected.
    const request = "Generate a Multiple choice question on " + subject +  " that requires a student from " + level + " to select from three choices. Please place this into a JSON format response with the question being a category, and the answers each having its own category."

    const getGeminiResponse = async (request) => {
        try {
            const genAI = new GoogleGenerativeAI(apikey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
            const result = await model.generateContent(request);
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