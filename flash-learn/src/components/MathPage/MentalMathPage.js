import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Box, Text, Button, Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useMakeGeminiRequest from '../../hooks/useGeminiApi';  

function MentalMathPage() {
    const [userAnswer, setUserAnswer] = useState('');
    const [flipped, setFlipped] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');

    const { geminiResponse, getGeminiResponse } = useMakeGeminiRequest();

    // Trigger the Gemini API call on component mount
    useEffect(() => {
        getGeminiResponse('Mathematics', 'Kindergarten to Year 2', 'mental math');
    }, [getGeminiResponse]);

    // Update state based on the API response
    useEffect(() => {
        if (geminiResponse) {
            setQuestion(geminiResponse.question || '');
            setCorrectAnswer(geminiResponse.correctAnswer || '');
        }
    }, [geminiResponse]);

    const handleSubmit = () => {
        const answerIsCorrect = userAnswer.trim() === correctAnswer;
        setIsCorrect(answerIsCorrect);
        setFlipped(true);
    };
    
    

    //Check if the response has returned
    if (!geminiResponse) {
        return <Text>Loading...</Text>;
    }
    const handleNext = () => {
        // Reset the state and get a new question
        setUserAnswer('');
        setFlipped(false);
        setIsCorrect(null);
        getGeminiResponse('Math', 'Kindergarten to Year 2', 'addition multiple choice');
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
                <Text fontSize="4xl" fontWeight="bold" color="black">Mental Math</Text> 
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
                                {question}
                            </Text>

                            {/* Input Box */}
                            <Input
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                placeholder="Enter your answer"
                                mb="4"
                                textAlign="center"
                            />

                            {/* Submit Button */}
                            <Button mt="6" _hover={{ transform: 'scale(1.1)'}} color="blackAlpha.700" onClick={handleSubmit} isDisabled={!setUserAnswer}>
                                Submit Answer
                            </Button>
                        </>
                    ) : (
                        <>
                            <Box display="flex" justifyContent="center" alignItems="center" height="100%" width="100%">
                                <Text fontSize="2xl" color="black" style={{ transform: "rotateY(180deg)" }}>
                                    {isCorrect ? "Correct! Well done!" : `Incorrect! The correct answer is: ${correctAnswer}`}
                                </Text>
                            </Box>
                        </>
                    )}
                </Box>

                {/* Next Button */}
            {flipped && (
                <GridItem area={'next-button'} display="flex" justifyContent="center" alignItems="center"  _hover={{ transform: 'scale(1.1)'}}>
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
                <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
                    {/* English Button*/}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button as={Link} to="/english/details" w="95%" bg="white" borderRadius="50px" color="black" _hover={{ bg: "#505050" }}>
                            English
                        </Button>
                    </Box>
                    {/* Math Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button as={Link} to="/math/details"w="95%" bg="#505050" borderRadius="50px" color="white" _hover={{ bg: "#505050" }}>
                            Math
                        </Button>
                    </Box>
                    {/* Science Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button w="95%" bg="white" borderRadius="50px" color="black" _hover={{ bg: "#505050" }}>
                            Science
                        </Button>
                    </Box>
                </Grid>
            </GridItem>
        </Grid>
    );
}

export default MentalMathPage;