import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { useState } from 'react';

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
            type: SchemaType.OBJECT,
            properties: {
              a: {
                type: SchemaType.STRING,
                description: "option 1",
                nullable: false,
              },
              b: {
                type: SchemaType.STRING,
                description: "option 2",
                nullable: false,
              },
              c:{
                type: SchemaType.STRING,
                description: "option 3",
                nullable: false,
              },
              d: {
                type: SchemaType.STRING,
                description: "option 4",
                nullable: false,
              },
            },
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

export default function useMakeGeminiRequest() {

    const [geminiResponse, setGeminiResponse] = useState("");

    const getGeminiResponse = async (topic) => {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            // await client.connect();
            // const db = client.db("Flash-Learn");
            // var currSubject = await db.collection('Subjects').findOne({'name' : subject.toString()});
            // var difficulty = await db.collection('Classes').find({'year' : '3-4'}).toArray();
            // var topic = await db.collection('Topics').findOne({
            //   'subject' : new ObjectId(currSubject._id.toString()),
            //   'year': "3-4"
            // });

            var prompt = "Generate 5 differnt multiple choice question, with four options, aimed at children aged between 9-10 years old, that tests their understanding on " + topic;

            const genAI = new GoogleGenerativeAI("AIzaSyC_1f8r2mROw-xgvGPq0xUUNmjql3q2yKM");
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

            for(var i = 0; i < testJson.length; i++) {
              var obj = testJson[i];
              for(var key in obj){
                console.log(obj[key]);
              }
            }

        } catch(err) {
            console.error(err);
        } finally {

        }
    }
    return { geminiResponse, getGeminiResponse }
}
// Example prompt
// const prompt = "Provide a a multiple choice question that requires a student aged from 5 to 7 years old to select from three choices of how to fix the punctuation of a randomly generated short length sentence. Please place this into a JSON format response with the question being a category, and the answers each having its own category. "