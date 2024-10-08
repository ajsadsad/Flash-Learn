import React from 'react';
import { Grid, GridItem, Box, Text, Button, Icon, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import { FaComputer, FaShuttleSpace } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { SiAnimalplanet } from "react-icons/si";



function ScienceDetailPage() {
    return (
        <Grid
    templateAreas={`"header header header"
                    "design earth physical"
                    "material material living"
                    "definition definition definition"
                    "sentence sentence tips"
                    "footer footer footer"`}
    gridTemplateRows={'auto auto auto auto auto 1fr'}
    gridTemplateColumns={'1fr 1fr 1fr'}
    minH="100vh"
    gap="6"
    padding="20px"
    bg="#282C34" 
    color="blackAlpha.800"
    fontFamily="'Baloo Bhai 2', sans-serif"
    fontWeight="bold"
>
            {/* Header */}
            <GridItem area={'header'} textAlign="center" paddingBottom={30}>
                <Text 
                    fontSize="5xl" 
                    fontWeight="bold" 
                    color="white" 
                    textShadow="1px 1px 6px rgba(0,0,0,0.2)"
                >
                    Science
                </Text>
            </GridItem>

            
{/* Icons Section with Borders and More Visibility */}
<GridItem area={'design'} textAlign="center">
                <Button 
                    as={Link} 
                    to="/science/design" 
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
                        <Icon as={FaComputer} w={10} h={10} />
                        <Text fontSize="2xl">Design & Technology</Text>
                    </VStack>
                </Button>
            </GridItem>

            <GridItem area={'earth'} textAlign="center">
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
                        <Icon as={FaShuttleSpace} w={10} h={10} />
                        <Text fontSize="2xl">Earth & Space</Text>
                    </VStack>
                </Button>
            </GridItem>

            <GridItem area={'physical'} textAlign="center">
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

            <GridItem area={'material'} justifySelf="center" textAlign="center">
                <Button
                    as={Link}
                    to="/english/spelling"
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px"
                    borderRadius="50px"
                    w="600px"
                    h="100%"
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }}
                    transition="0.3s"
                    mb="20px"
                >
                    <VStack spacing={3}>
                        <Icon as={GiMaterialsScience} w={10} h={10} />
                        <Text fontSize="2xl">Material World</Text>
                    </VStack>
                </Button>
            </GridItem>

            <GridItem area={'living'} gridColumn="2 / span 2" justifySelf="center" textAlign="center">
                <Button
                    as={Link}
                    to="/english/spelling"
                    bgGradient="radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);"
                    p="20px"
                    borderRadius="50px"
                    w="600px"
                    h="100%"
                    border="4px solid #1e90ff"
                    color="white"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl', bg: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);' }}
                    transition="0.3s"
                    mb="20px"
                >
                    <VStack spacing={3}>
                        <Icon as={SiAnimalplanet} w={10} h={10} />
                        <Text fontSize="2xl">Living World</Text>
                    </VStack>
                </Button>
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
