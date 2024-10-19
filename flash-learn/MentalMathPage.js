import React, { useState } from 'react';
import { Grid, GridItem, Box, Text, Button, Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function MentalMathPage() {
    const [userAnswer, setUserAnswer] = useState('');
    const [flipped, setFlipped] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    // Example question and correct answer
    const question = "What is 7 + 5 - 4?";
    const correctAnswer = "8";

    const handleSubmit = () => {
        const answerIsCorrect = userAnswer.trim() === correctAnswer;
        setIsCorrect(answerIsCorrect);
        setFlipped(true);
    };

    return (
        <Grid
            templateAreas={`"header header header"
                            "flashcard flashcard flashcard"
                            "footer footer footer"`}
            gridTemplateRows={'auto 1fr auto'}
            gridTemplateColumns={'1fr 1fr 1fr'}
            minH="100vh"
            gap="4"
            padding="20px"
            bg="#DCDCDC"  
            color="blackAlpha.700"
            fontFamily="'Baloo Bhai 2', sans-serif"
            fontWeight="bold"
        >
            {/* Header */}
            <GridItem area={'header'} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color="white">Mental Math</Text>
            </GridItem>

            {/* Flashcard Section */}
            <GridItem area={'flashcard'} display="flex" justifyContent="center" alignItems="center">
                <Box
                    bg={flipped ? (isCorrect ? "green.300" : "red.300") : "white"}
                    p="20px"
                    borderRadius="md"
                    boxShadow="lg"
                    width="60%"
                    textAlign="center"
                    transform={flipped ? "rotateY(180deg)" : "rotateY(0deg)"}
                    transition="transform 0.6s"
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
                            <Button mt="6" color="blackAlpha.700" onClick={handleSubmit} isDisabled={!userAnswer.trim()}>
                                Submit Answer
                            </Button>
                        </>
                    ) : (
                        <Text fontSize="2xl" color="black" style={{ transform: "rotateY(180deg)" }}>
                            {isCorrect ? "Correct! Well done!" : `Incorrect! The correct answer is: ${correctAnswer}`}
                        </Text>
                    )}
                </Box>
            </GridItem>

            {/* Bottom Navigation */}
            <GridItem area={'footer'} alignSelf="end" justifySelf="stretch">
                <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
                    {/* English Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button as={Link} to="/english/details" w="95%" bg="#505050" borderRadius="50px" color="white" _hover={{ bg: "#505050" }}>
                            English
                        </Button>
                    </Box>
                    {/* Math Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button as={Link} to="/math/details" w="95%" bg="white" borderRadius="50px" color="black" _hover={{ bg: "#505050" }}>
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
