
import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Box, Text, Button, VStack, Icon} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useMakeGeminiRequest from '../../hooks/useGeminiApi';
import { FaHouseUser, FaArrowCircleLeft } from 'react-icons/fa';


function DivisionPage() {
    const [selectedOption, setSelectedOption] = useState('');
    const [flipped, setFlipped] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [options, setOptions] = useState([]);
    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');


    const { geminiResponse, getGeminiResponse } = useMakeGeminiRequest();


        // Trigger the Gemini API call on component mount
        useEffect(() => {
            getGeminiResponse('Math', 'Kindergarten to Year 2', 'division multiple choice');
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

    const handleNext = () => {
        // Reset the state and get a new question
        setSelectedOption('');
        setFlipped(false);
        setIsCorrect(null);
        getGeminiResponse('Math', 'Kindergarten to Year 2', 'division multiple choice');
    };



        //Check if the response has returned
        if (!geminiResponse) {
            return <Text>Loading...</Text>;
        }


    return (
        <Grid
            templateAreas={`"homepage header button"
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
            <GridItem area={'homepage'} textAlign="center">
            <Button 
                    as={Link} 
                    to="/HomePage" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px" 
                    borderRadius="50px" 
                    w="25%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }} 
                    transition="0.3s"
                >
                    <VStack spacing={1}>
                        <Icon as={FaHouseUser} w={5} h={5} />
                        <Text>Home</Text>
                    </VStack>
                </Button>
                <Button 
                    as={Link} 
                    to="/math/details" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px" 
                    borderRadius="50px" 
                    w="25%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }} 
                    transition="0.3s"
                >
                    <VStack spacing={1}>
                        <Icon as={FaArrowCircleLeft} w={5} h={5} />
                        <Text>Back</Text>
                    </VStack>
                </Button>
            </GridItem>
            <GridItem area={'header'} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color="black">Division</Text> 
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
        <Button mt="6" _hover={{ transform: 'scale(1.1)'}} color="blackAlpha.700" onClick={handleSubmit} isDisabled={!selectedOption}>
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
                        <Button as={Link} to="/science/details" w="95%" bg="white" borderRadius="50px" color="black" _hover={{ bg: "#505050" }}>
                            Science
                        </Button>
                    </Box>
                </Grid>
            </GridItem>
        </Grid>
    );
}


export default DivisionPage;


 
