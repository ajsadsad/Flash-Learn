import React from 'react';
import { Grid, GridItem, Box, Text, Button, Icon, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaDivide, FaTimes} from 'react-icons/fa';
import { GiBrain } from "react-icons/gi";
import {PiShapes } from "react-icons/pi";
import { BiMath } from "react-icons/bi";
import { TbLetterA, TbLetterB } from "react-icons/tb";

function MathDetailPage() {
    return (
        <Grid
            templateAreas={`
                "header header header header"
                "addition subtraction division multiplication"
                "mentalMath equations anglesAndShapes combinationEquations"
                "footer footer footer footer"
            `}
            gridTemplateRows={'auto auto auto auto'}
            gridTemplateColumns= {'repeat(4, 1fr)'}
            minH="100vh"
            gap="6"
            padding="20px"
            bg="#DCDCDC"
            color="blackAlpha.800"
            fontFamily="'Baloo Bhai 2', sans-serif"
            fontWeight="bold"
        >
            {/* Header */}
            <GridItem area={'header'} textAlign="center">
                <Text 
                    fontSize="5xl" 
                    fontWeight="bold" 
                    color="#282828" 
                    textShadow="1px 1px 6px rgba(0,0,0,0.2)"
                >
                    Math
                </Text>
            </GridItem>

            {/* Icons Section with Clickable Buttons */}
            <GridItem area={'addition'} textAlign="center">
    <Button 
        as={Link} 
        to="/math/addition" 
        bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
        p="20px" 
        borderRadius="50px" 
        w="100%" 
        h="100%" 
        border="4px solid #1e90ff"
        color="white"
        boxShadow="xl"
        _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
        transition="0.3s"
    >
        <VStack spacing={2}>
            <Icon as={FaPlus} boxSize={9} />
            <Text fontSize="3xl">Addition</Text>
        </VStack>
    </Button>
</GridItem>

<GridItem area={'subtraction'} textAlign="center">
    <Button 
        as={Link} 
        to="/math/subtraction" 
        bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
        p="20px" 
        borderRadius="50px" 
        w="100%" 
        h="100%" 
        border="4px solid #1e90ff"
        color="white"
        boxShadow="xl"
        _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
        transition="0.3s"
    >
        <VStack spacing={2}>
            <Icon as={FaMinus} boxSize={9} />
            <Text fontSize="3xl">Subtraction</Text>
        </VStack>
    </Button>
</GridItem>

<GridItem area={'division'} textAlign="center">
    <Button 
        as={Link} 
        to="/math/division" 
        bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
        p="20px" 
        borderRadius="50px" 
        w="100%" 
        h="100%" 
        border="4px solid #1e90ff"
        color="white"
        boxShadow="xl"
        _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
        transition="0.3s"
    >
        <VStack spacing={2}>
            <Icon as={FaDivide} boxSize={9} />
            <Text fontSize="3xl">Division</Text>
        </VStack>
    </Button>
</GridItem>

<GridItem area={'multiplication'} textAlign="center">
    <Button 
        as={Link} 
        to="/math/multiplication" 
        bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
        p="20px" 
        borderRadius="50px" 
        w="100%" 
        h="100%" 
        border="4px solid #1e90ff"
        color="white"
        boxShadow="xl"
        _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
        transition="0.3s"
    >
        <VStack spacing={2}>
            <Icon as={FaTimes} boxSize={9} />
            <Text fontSize="3xl">Multiplication</Text>
        </VStack>
    </Button>
</GridItem>
            

            {/* Second Row of Buttons */}
            <GridItem area={'mentalMath'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/math/mental-math" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
                    p="20px" 
                    borderRadius="50px" 
                    w="100%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
                    transition="0.3s"
                >
                    <VStack spacing={2}>
                        <Icon as={GiBrain} boxSize={9} />
                        <Text fontSize="3xl">MentalMath</Text>
                    </VStack>
                </Button>
            </GridItem>
                    

            <GridItem area={'equations'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/math/equations" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
                    p="20px" 
                    borderRadius="50px" 
                    w="100%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
                    transition="0.3s"
                >
                <VStack>
                    <HStack spacing={2}>
            <Icon as={TbLetterA} boxSize={9} />
            <Icon as={FaPlus} boxSize={7} />
            <Icon as={TbLetterB} boxSize={9} />
        </HStack>
        <Text fontSize="3xl">Equations</Text>
               </VStack>
                    
    </Button>
</GridItem>

            <GridItem area={'anglesAndShapes'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/math/angles-and-shapes" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
                    p="20px" 
                    borderRadius="50px" 
                    w="100%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
                    transition="0.3s"
                >
                    <VStack spacing={2}>
            <Icon as={PiShapes} boxSize={9} />
            <Text fontSize="3xl">Angles And Shapes</Text>
        </VStack>
    </Button>
</GridItem>

            <GridItem area={'combinationEquations'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/math/combination-equations" 
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
                    p="20px" 
                    borderRadius="50px" 
                    w="100%" 
                    h="100%" 
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
                    transition="0.3s"
                >
                    <VStack spacing={2}>
            <Icon as={BiMath} boxSize={9} />
            <Text fontSize="3xl">Combination</Text>
        </VStack>
    </Button>
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

export default MathDetailPage;