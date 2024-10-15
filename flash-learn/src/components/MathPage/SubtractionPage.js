
import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Box, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useMakeGeminiRequest from '../../hooks/useGeminiApi';


function SubtractionPage() {
    const [selectedOption, setSelectedOption] = useState('');
    const [flipped, setFlipped] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [options, setOptions] = useState([]);
    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');


    const { geminiResponse, getGeminiResponse } = useMakeGeminiRequest();


        // Trigger the Gemini API call on component mount
        useEffect(() => {
            getGeminiResponse('Math', 'Kindergarten to Year 2', 'subtraction multiple choice');
        }, [getGeminiResponse]);
   
        // Update state based on the API response
        useEffect(() => {
            if (geminiResponse) {
                setQuestion(geminiResponse.question || '');  
                setOptions(geminiResponse.answers || []);  
                setCorrectAnswer(geminiResponse.correctAnswer || geminiResponse.answers[0]);
                console.log("Gemini Response:", geminiResponse); // Debugging the response


            }
        }, [geminiResponse]);  
   


    const handleSubmit = () => {
        const answerIsCorrect = selectedOption === correctAnswer;
       
        // Log to ensure correct comparison
        console.log("Selected option:", selectedOption);
        console.log("Correct answer:", correctAnswer);


        setIsCorrect(answerIsCorrect);
        setFlipped(true);
    };


        // Conditional rendering to check if the response has returned
        if (!geminiResponse) {
            return <Text>Loading...</Text>;
        }


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
            color="blackAlpha.700"
            fontWeight="bold"
        >
            {/* Header */}
            <GridItem area={'header'} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color="white">Subtraction</Text>
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


        {/* Options */}
        <VStack spacing="4" align="stretch">
            {options.map((option, index) => (
                <Box
                    key={index}
                    p="4"
                    border="2px solid"
                    borderColor={selectedOption === option ? "black.500" : "gray.200"}
                    borderRadius="md"
                    cursor="pointer"
                    _hover={{ borderColor: "blue.200" }}
                    onClick={() => setSelectedOption(option)}
                    textAlign="left"
                >
                    {/* Check if the option is an object or a string */}
                    <Text color="black">
                        {typeof option === 'object' ? option.text : option}
                    </Text>
                </Box>
            ))}
        </VStack>


        {/* Submit Button */}
        <Button mt="6" color="blackAlpha.700" onClick={handleSubmit} isDisabled={!selectedOption}>
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
                    {/* English Button with Green Border */}
                    <Box borderTop="4px solid green" pt="2" display="flex" alignItems="center" justifyContent="center">
                        <Button as={Link} to="/english/details" w="95%" bg="white">
                            English
                        </Button>
                    </Box>
                    {/* Math Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button as={Link} to="/math/details" w="95%" bg="white">
                            Math
                        </Button>
                    </Box>
                    {/* Science Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button w="95%" bg="white">
                            Science
                        </Button>
                    </Box>
                </Grid>
            </GridItem>
        </Grid>
    );
}


export default SubtractionPage;


 
