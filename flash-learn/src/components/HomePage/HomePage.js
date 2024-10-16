import { Button, Text, VStack, Grid, GridItem, Box} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import React from 'react';

function HomePage() {
    return (
        <Grid
            templateAreas={`"header"
                            "subjects"
                            "footer"`}
            gridTemplateRows={'auto 1fr auto'}
            gridTemplateColumns={'1fr'}
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
                    Select your year group
                </Text>
            </GridItem>

            {/* Subject Selection Section */}
            <GridItem 
                area={'subjects'} 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center" 
                minH="60vh"
            >
                <VStack spacing="10" w="100%" alignItems="center">
                        <Button
                            as={Link} to="/Subject"
                            bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
                            p="20px" 
                            borderRadius="50px" 
                            w="800px" 
                            h="100px" 
                            border="4px solid #1e90ff"
                            color="white"
                            boxShadow="xl"
                            _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
                            transition="0.3s"
                        >
                            <Box display="flex" alignItems="center">
                                <Text fontSize="4xl">K - 2</Text>
                            </Box>
                        </Button>

                        <Button
                             as= {Link} to="/Subject" 
                            bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
                            p="20px" 
                            borderRadius="50px" 
                            w="800px" 
                            h="100px" 
                            border="4px solid #1e90ff"
                            color="white"
                            boxShadow="xl"
                            _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
                            transition="0.3s"
                        >
                            <Box display="flex" alignItems="center">
                                <Text fontSize="4xl">3 - 4</Text>
                            </Box>
                        </Button>
                

                        <Button
                            as= {Link} to="/Subject"
                            bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);" 
                            p="20px" 
                            borderRadius="50px" 
                            w="800px" 
                            h="100px" 
                            border="4px solid #1e90ff"
                            color="white"
                            boxShadow="xl"
                            _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }} 
                            transition="0.3s"
                        >
                            <Box display="flex" alignItems="center">
                                <Text fontSize="4xl">5 - 6</Text>
                            </Box>
                        </Button>
                </VStack>
            </GridItem>
        </Grid>
    );
}

export default HomePage;