import React from 'react';
import { Grid, GridItem, Box, Text, Button, Icon, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBook, FaPencilAlt, FaGlobe } from 'react-icons/fa'; // Adding icons for fun subjects


function ScienceDetailPage() {
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
                    Science
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
                        <Text fontSize="2xl">Design & Technology</Text>
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
                        <Text fontSize="2xl">Earth & Space</Text>
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
                        <Text fontSize="2xl">Physical World</Text>
                    </VStack>
                </Button>
            </GridItem>








           {/* Bottom Navigation */}
           <GridItem area={'footer'} alignSelf="end" justifySelf="stretch">
                <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
                    {/* English Button with Green Border */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button w="95%" bg="white" borderRadius="50px" color="black" _hover={{ bg: "#505050" }}>
                            English
                        </Button>
                    </Box>
                    {/* Math Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button w="95%" bg="white" borderRadius="50px" color="black" _hover={{ bg: "#505050" }}>
                            Math
                        </Button>
                    </Box>
                    {/* Science Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button w="95%" bg="#505050" borderRadius="50px" color="white" _hover={{ bg: "#505050" }}>
                            Science
                        </Button>
                    </Box>
                </Grid>
            </GridItem>
        </Grid>
    );
}

export default ScienceDetailPage;
