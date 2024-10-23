import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { useState, useEffect } from 'react';

const schema = {
    description : "Multiple choice question",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        question: {
          type: SchemaType.STRING,
          description: "question",
          nullable: false,
        },
        options: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
            description: "answers",
            nullable: false,
          },
        },
        answer: {
          type: SchemaType.STRING,
          description: "Correct answer to question",
          nullable: false,
        },
      },
      required: ["question", "options", "answer"],
    },
  };

const useMakeGeminiRequest = (topic, year, studentId) => {

    const [geminiResponse, setGeminiResponse] = useState("");
    const [prompt, setPrompt] = useState(null);
    const test = ""; 

    useEffect(() => {
      const getGeminiResponse = async() => {
        try {
          await fetch('http://localhost:5050/record/topics?subject=' + topic + '&year=K-2')
          .then((res) => res.json())
          .then((res) => {
            if(res.length > 1) {
              let testString = "Generate 5 differnt multiple choice question, with four options, aimed at children aged between 9-10 years old, that tests their understanding on";
              for(let i in res) {
                testString.concat(' ', res[i].details);
              }
            } else {
              setPrompt("Generate 5 differnt multiple choice question, with four options, aimed at children aged between 9-10 years old, that tests their understanding on " + res.details);
            }
          })
        } catch(err) {
            console.error(err);
        } finally {
        }
      }
      getGeminiResponse();
  }, []);

  useEffect(() => {

    const getGeminiResponse = async() => {
      const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const testJson = JSON.parse(text);
      setGeminiResponse(testJson);
    }
    getGeminiResponse(); 
  }, [prompt]);

  return { geminiResponse }
}
export default useMakeGeminiRequest;
// Example prompt
// const prompt = "Provide a a multiple choice question that requires a student aged from 5 to 7 years old to select from three choices of how to fix the punctuation of a randomly generated short length sentence. Please place this into a JSON format response with the question being a category, and the answers each having its own category. "