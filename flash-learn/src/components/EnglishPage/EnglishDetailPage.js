import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Box, Text, Button, Icon, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBook, FaPencilAlt, FaGlobe } from 'react-icons/fa'; // Adding icons for fun subjects
import useMakeGeminiRequest from '../../hooks/useGeminiApi'; //import api
import BottomNav from '../BottomNav/BottomNav';

function EnglishDetailPage() {
    // Call the Gemini API hook
    const { geminiResponse, getGeminiResponse } = useMakeGeminiRequest();
    const [wordOfTheDay, setWordOfTheDay] = useState('');
    const [wordBank, setWordBank] = useState([]);

    // useEffect(() => {
    //     const word = getRandomWord(wordbank.words);
    //     setWordOfTheDay(word);
    // }, []); // Empty dependency array to run once on mount

    // // Get a random word from the word bank
    // const getRandomWord = (words) => {
    //     return words[Math.floor(Math.random() * words.length)];
    // };

    // Use useEffect to make the API call when the word of the day is set
    // useEffect(() => {
    //     if (wordOfTheDay) {
    //         const prompt = `Create a sentence using the word "${wordOfTheDay}" for educational purposes.`;
    //         getGeminiResponse(prompt);
    //         const prompt2 = `Write the definition of the word "${wordOfTheDay}" for educational purposes.`;
    //         getGeminiResponse(prompt2);
    //     }
    // }, [wordOfTheDay, getGeminiResponse]);

    // useEffect(() => {
    //     const fetchWordBank = async () => {
    //         try {
    //             const response = await fetch('http://localhost:5050/record/word');
    //             const data = await response.json();
    //             setWordBank(data.words);
    //         } catch (error) {
    //             console.error('Error fetching word bank:', error);
    //         }
    //     };

    //     fetchWordBank();
    // }, []);

    // useEffect(() => {
    //     const word = getRandomWord(wordBank);
    //     setWordOfTheDay(word);
    // }, [wordBank]);

    // const getRandomWord = (words) => {
    //     return words[Math.floor(Math.random() * words.length)];
    // };
    return (
        <Grid
            templateAreas={`"header header header"
                            "grammar spelling punctuation"
                            "wordOfTheDay wordOfTheDay tips"
                            "definition definition tips"
                            "sentence sentence tips"
                            "footer footer footer"`}
            gridTemplateRows={'auto auto auto auto auto 1fr'}
            gridTemplateColumns={'1fr 1fr 1fr'}
            minH="100vh"
            gap="6"
            padding="20px"
            bg="#DCDCDC"
            color="blackAlpha.800"
            fontFamily="'Baloo Bhai 2', sans-serif"
            fontWeight="bold" >
            {/* Header */}
            <GridItem area={'header'} textAlign="center">
                <Text
                    fontSize="5xl"
                    fontWeight="bold"
                    color="#282828"
                    textShadow="1px 1px 6px rgba(0,0,0,0.2)"
                >
                    English
                </Text>
            </GridItem>

            {/* Icons Section with Borders and More Visibility */}
            <GridItem area={'grammar'} textAlign="center">
                <Button
                    as={Link}
                    to="/english/grammar"
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px"
                    borderRadius="50px"
                    w="100%"
                    h="100%"
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }}
                    transition="0.3s"
                >
                    <VStack spacing={3}>
                        <Icon as={FaBook} w={10} h={10} />
                        <Text fontSize="2xl">Grammar</Text>
                    </VStack>
                </Button>
            </GridItem>
            <GridItem area={'spelling'} textAlign="center">
                <Button
                    as={Link}
                    to="/english/spelling"
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px"
                    borderRadius="50px"
                    w="100%"
                    h="100%"
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }}
                    transition="0.3s"
                >
                    <VStack spacing={3}>
                        <Icon as={FaPencilAlt} w={10} h={10} />
                        <Text fontSize="2xl">Spelling</Text>
                    </VStack>
                </Button>
            </GridItem>
            <GridItem area={'punctuation'} textAlign="center">
                <Button
                    as={Link}
                    to="/english/punctuation"
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px"
                    borderRadius="50px"
                    w="100%"
                    h="100%"
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }}
                    transition="0.3s"
                >
                    <VStack spacing={3}>
                        <Icon as={FaGlobe} w={10} h={10} />
                        <Text fontSize="2xl">Punctuation</Text>
                    </VStack>
                </Button>
            </GridItem>

            {/* Word of the Day Section */}
            <GridItem area={'wordOfTheDay'} textAlign="center">
                <Box bg="radial-gradient(263px at 100.2% 3%, rgb(12, 85, 141) 31.1%, rgb(205, 181, 93) 36.4%, rgb(244, 102, 90) 50.9%, rgb(199, 206, 187) 60.7%, rgb(249, 140, 69) 72.5%, rgb(12, 73, 116) 72.6%);" p="30px" borderRadius="50px" boxShadow="2xl" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" mb="10px" color="white">Word of the Day</Text>
                    <Text fontSize="5xl" fontWeight="bold" color="white">
                        {wordOfTheDay}
                        {/* Inundate */}
                        </Text>
                </Box>
            </GridItem>

            {/* Definition Section */}
            <GridItem area={'definition'} textAlign="center">
                <Box bg="linear-gradient(111.1deg, rgb(0, 40, 70) -4.8%, rgb(255, 115, 115) 82.7%, rgb(255, 175, 123) 97.2%);" p="30px" borderRadius="50px" boxShadow="2xl" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">Definition</Text>
                    <Text fontSize="1xl" color="white">
                        {geminiResponse || "The teacher inundated the students with homework 2before the holiday break."}
                        "To overwhelm someone with things or people to deal with."
                        </Text>
                </Box>
            </GridItem>

            {/* Use It in a Sentence Section */}
            <GridItem area={'sentence'} textAlign="center">
                <Box bg="linear-gradient(111.1deg, rgb(0, 40, 70) -4.8%, rgb(255, 115, 115) 82.7%, rgb(255, 175, 123) 97.2%);" p="30px" borderRadius="50px" boxShadow="2xl" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">Use it in a Sentence</Text>
                    <Text fontSize="1xl" color="white" >
                        {geminiResponse || "The teacher inundated the students with homework 2before the holiday break."}
                        {/* "The teacher inundated the students with homework before the holiday break." */}
                    </Text>
                </Box>
            </GridItem>

            {/* Essay Writing Tips Section */}
            <GridItem area={'tips'} textAlign="left" rowSpan={3}>
                <Box bg="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" border="4px solid #1e90ff" p="30px" borderRadius="50px" boxShadow="2xl" h="100%" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white" mb="10px">Essay Writing Tips</Text>
                    <Text fontSize="lg" color="white" >
                    Many students and even professional writers struggle with figuring out where and how to start their essays, no matter how long they’ve been writing. But if you’ve been assigned a certain topic or know you have a specific point or idea that you want to prove or get across, a great way to get started is to start not from the beginning, but at the end. It might seem counterproductive, but you’ll have a much better time working backward and putting all your focus on proving your point or explaining your perspective...
                    </Text>
                </Box>
            </GridItem>

            {/* Bottom Navigation */}
            <GridItem area={'footer'} alignSelf="end" justifySelf="stretch">
                <BottomNav></BottomNav>
            </GridItem>
        </Grid>
    );
}

export default EnglishDetailPage;