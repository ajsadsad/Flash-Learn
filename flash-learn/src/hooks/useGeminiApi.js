// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { useState } from 'react'

// export default function useMakeGeminiRequest() {

//     const[geminiResponse, setResponse] = useState("default");

//     const getGeminiResponse = async (prompt) => {
//         try {
//             const genAI = new GoogleGenerativeAI("AIzaSyC_1f8r2mROw-xgvGPq0xUUNmjql3q2yKM");
//             const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
//             const result = await model.generateContent(prompt);
//             const response = await result.response;
//             const text = response.text();
//             setResponse(text);
//         } catch {

//         } finally {

//         }
//     }
//     getGeminiResponse();

//     return { geminiResponse, getGeminiResponse }
// }
// // Example prompt
// // const prompt = "Provide a a multiple choice question that requires a student aged from 5 to 7 years old to select from three choices of how to fix the punctuation of a randomly generated short length sentence. Please place this into a JSON format response with the question being a category, and the answers each having its own category. "

// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { useState } from 'react'

// export default function useMakeGeminiRequest() {

//     const[geminiResponse, setResponse] = useState("default");

//     const getGeminiResponse = async (prompt) => {
//         try {
//             const genAI = new GoogleGenerativeAI([process.env.React_App_API_KEY]);
//             const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
//             const result = await model.generateContent(prompt);
//             const response = await result.response;
//             const text = response.text();
//             setResponse(text);
//         } catch {

//         } finally {

//         }
//     }
//     getGeminiResponse();

//     return { geminiResponse, getGeminiResponse }
// }
// // Example prompt
// // const prompt = "Provide a a multiple choice question that requires a student aged from 5 to 7 years old to select from three choices of how to fix the punctuation of a randomly generated short length sentence. Please place this into a JSON format response with the question being a category, and the answers each having its own category. "

import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from 'react';

    const useMakeGeminiRequest = () => {
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

    export default useMakeGeminiRequest;



    // console.log("Full result:", result);
    //         console.log("Response object:", result.response);
// // Inspect the result to find the correct data path
// console.log("Full result:", result);

// // Assuming the response is within result.response and contains a candidates array
// if (result.response && result.response.candidates && result.response.candidates.length > 0) {
//     const responseText = result.response.candidates[0].content;
//     setResponse(responseText);
// } else {
//     console.warn("No candidates found in the response:", result.response);
// }

// } catch (error) {
// console.error("Error fetching Gemini API response:", error);
// }
// };