import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Box, Text, Button, VStack } from '@chakra-ui/react';
import BottomNav from '../BottomNav/BottomNav';
import useMakeGeminiRequest from '../../hooks/useGeminiApi';

const subject = "Punctuation";

function PunctuationPage() {
    const {geminiResponse, getGeminiResponse} = useMakeGeminiRequest;
    const [dbResponse, setDbResponse] = useState(null);
    const [questions1, setQuestions] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [flipped, setFlipped] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        if(dbResponse != null) {
            console.log(dbResponse.details)
        }
    }, [dbResponse]);

    useEffect(() => {
        const getDbResponse = async () => {
            try {
                let response = await fetch('http://localhost:5050/record/topics?subject=' + subject + '&year=3-4');
                setDbResponse(response.json());
            } catch (error) {
                console.error('Error fetching Questions', error);
            }
        };
        getDbResponse();
    },[]);

    // Example questions and options
    const questions = [
        {
            question: "Select the semi colon below",
            options: [
                ":",
                ";",
                "'"
            ],
            correctAnswer: ";"
        },
        {
            question: "Select the question mark below",
            options: [
                "?",
                "!",
                "/"
            ],
            correctAnswer: "?"
        }
    ];

    const handleSubmit = () => {
        const answerIsCorrect = selectedOption === questions[currentQuestion].correctAnswer;
        setIsCorrect(answerIsCorrect);
        setFlipped(true);
    };

    const handleNext = () => {
        setFlipped(false);
        setSelectedOption('');
        setIsCorrect(null);
        setCurrentQuestion((prevQuestion) => (prevQuestion + 1) % questions.length);
    };

    return (
        <Grid
            templateAreas={`"header header header"
                            "flashcard flashcard flashcard"
                            "footer footer footer"`}
            gridTemplateRows={'auto 1fr auto'}
            gridTemplateColumns={'1fr 1fr 1fr'}
            minH="100vh"
            gap="6"
            padding="20px"
            bg="#DCDCDC"
            color="blackAlpha.700"
            fontFamily="'Baloo Bhai 2', sans-serif"
            fontWeight="bold"
        >
            {/* Header */}
            <GridItem area={'header'} textAlign="center">
                <Text fontSize="5xl" fontWeight="bold" color="#282828" textShadow="1px 1px 6px rgba(0,0,0,0.2)">
                    Punctuation
                </Text>
            </GridItem>

            {/* Flashcard Section */}
            <GridItem area={'flashcard'} display="flex" justifyContent="center" alignItems="center">
                <Box
                    bg={flipped ? (isCorrect ? "green.300" : "red.500") : "white"}
                    p="30px"
                    borderRadius="md"
                    boxShadow="2xl"
                    width="80%"
                    height="500px"
                    textAlign="center"
                    transform={flipped ? "rotateY(180deg)" : "rotateY(0deg)"}
                    transition="transform 0.6s, background-color 0.6s"
                    bgGradient={!flipped && "linear-gradient(111.1deg, rgb(255, 175, 123) -4.8%, rgb(255, 115, 115) 82.7%, rgb(0, 40, 70) 97.2%)"}
                >
                    {!flipped ? (
                        <>
                            {/* Question */}
                            <Text fontSize="2xl" mb="4" color="black" fontStyle="italic" textDecoration="underline">
                                {questions[currentQuestion].question}
                            </Text>

                            {/* Options */}
                            <VStack spacing="4" align="stretch">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <Box
                                        key={index}
                                        p="4"
                                        border="2px solid"
                                        borderColor={selectedOption === option ? "black.500" : "gray.200"}
                                        borderRadius="md"
                                        cursor="pointer"
                                        _hover={{ borderColor: "blue.200" }}
                                        onClick={() => setSelectedOption(option)}
                                    >
                                        <Text color="black">{option}</Text>
                                    </Box>
                                ))}
                            </VStack>

                            {/* Submit Button */}
                            <Button mt="6" color="blackAlpha.700" onClick={handleSubmit} isDisabled={!selectedOption}>
                                Submit Answer
                            </Button>
                        </>
                    ) : (
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height="100%"
                            width="100%"
                            style={{ transform: "rotateY(180deg)" }}
                        >
                            <Text fontSize="4xl" color="black">
                                {isCorrect ? "Correct! Well done!" : `Incorrect! The correct answer is: ${questions[currentQuestion].correctAnswer}`}
                            </Text>
                        </Box>
                    )}
                </Box>

            {/* Next Button */}
            {flipped && (
                <GridItem area={'next-button'} display="flex" justifyContent="center" alignItems="center">
                    <Button onClick={handleNext} size="lg" mt="6" color="blackAlpha.700" marginLeft="40px"  >
                        <Text fontSize ="2x1" colour="black">
                        Next
                        </Text>
                    </Button>
                </GridItem>
            )}
            </GridItem>

            {/* Bottom Navigation */}
            <GridItem area={'footer'} alignSelf="end" justifySelf="stretch">
                <BottomNav></BottomNav>
            </GridItem>
        </Grid>
    );
}

export default PunctuationPage;