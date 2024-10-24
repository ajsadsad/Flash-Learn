import React from 'react';
import { Grid, GridItem, Box, Text, Button, Icon, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaFlask, FaAtom, FaMicroscope, FaHouseUser, FaArrowCircleLeft } from 'react-icons/fa'; 

function ScienceDetailPage() {
    return (
        <Grid
            templateAreas={`"homepage header buttons"
                            "biology chemistry physics"
                            "factOfTheDay factOfTheDay factOfTheDay"
                            "definition definition definition"
                            "experiment experiment experiment"
                            "footer footer footer"`}
            gridTemplateRows={'auto auto auto auto auto 1fr'}
            gridTemplateColumns={'1fr 1fr 1fr'}
            minH="100vh"
            gap="6"
            padding="20px"
            bg="#DCDCDC"
            color="blackAlpha.800"
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
                    w="50%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }} 
                    transition="0.3s"
                >
                    <VStack spacing={1}>
                        <Icon as={FaHouseUser} w={5} h={5} />
                        <Text>HomePage</Text>
                    </VStack>
                </Button>
                <Button 
                    as={Link} 
                    to="/Subject" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px" 
                    borderRadius="50px" 
                    w="50%" 
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
                <Text 
                    fontSize="5xl" 
                    fontWeight="bold" 
                    color="#282828" 
                    textShadow="1px 1px 6px rgba(0,0,0,0.2)"
                >
                    Science
                </Text>
            </GridItem>

            {/* Icons Section with Clickable Buttons */}
            <GridItem area={'biology'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/science/biology" 
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
                        <Icon as={FaMicroscope} w={10} h={10} />
                        <Text fontSize="2xl">Biology</Text>
                    </VStack>
                </Button>
            </GridItem>

            <GridItem area={'chemistry'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/science/chemistry" 
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
                        <Icon as={FaFlask} w={10} h={10} />
                        <Text fontSize="2xl">Chemistry</Text>
                    </VStack>
                </Button>
            </GridItem>

            <GridItem area={'physics'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/science/physics" 
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
                        <Icon as={FaAtom} w={10} h={10} />
                        <Text fontSize="2xl">Physics</Text>
                    </VStack>
                </Button>
            </GridItem>

            {/* Fact of the Day Section */}
            <GridItem area={'factOfTheDay'} textAlign="center">
                <Box bg="radial-gradient(263px at 100.2% 3%, rgb(12, 85, 141) 31.1%, rgb(205, 181, 93) 36.4%, rgb(244, 102, 90) 50.9%, rgb(199, 206, 187) 60.7%, rgb(249, 140, 69) 72.5%, rgb(12, 73, 116) 72.6%);" p="30px" borderRadius="50px" boxShadow="2xl" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" mb="10px" color="white">Fact of the Day</Text>
                    <Text fontSize="5xl" fontWeight="bold" color="white">Water boils at 100°C</Text>
                </Box>
            </GridItem>

            {/* Definition Section */}
            <GridItem area={'definition'} textAlign="center">
                <Box bg="linear-gradient(111.1deg, rgb(0, 40, 70) -4.8%, rgb(255, 115, 115) 82.7%, rgb(255, 175, 123) 97.2%);" p="30px" borderRadius="50px" boxShadow="2xl" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">Definition</Text>
                    <Text fontSize="1xl" color="white"> "The boiling point of water is 100°C at sea level."</Text>
                </Box>
            </GridItem>

            {/* Experiment Section */}
            <GridItem area={'experiment'} textAlign="center">
                <Box bg="linear-gradient(111.1deg, rgb(0, 40, 70) -4.8%, rgb(255, 115, 115) 82.7%, rgb(255, 175, 123) 97.2%);" p="30px" borderRadius="50px" boxShadow="2xl" _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">Try This Experiment</Text>
                    <Text fontSize="1xl" color="white">"Observe how water boils at different temperatures depending on altitude."</Text>
                </Box>
            </GridItem>

            {/* Bottom Navigation */}
            <GridItem area={'footer'} alignSelf="end" justifySelf="stretch">
                <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
                    {/* English Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button as={Link} to="/english/details" w="95%" bg="white" borderRadius="50px" color="black" _hover={{ bg: "#505050" }}>
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
                        <Button  as={Link} to="/science/details" w="95%" bg="#505050" borderRadius="50px" color="white" _hover={{ bg: "#505050" }}>
                            Science
                        </Button>
                    </Box>
                </Grid>
            </GridItem>
        </Grid>
    );
}

export default ScienceDetailPage;
