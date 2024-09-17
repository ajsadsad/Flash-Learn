import React from 'react';
import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
            gap="4"
            padding="20px"
            color="blackAlpha.700"
            fontWeight="bold"
        >
            {/* Header */}
            <GridItem area={'header'} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color="white">SCIENCE</Text> {/* Updated color to white */}
            </GridItem>

            {/* Icons Section with Clickable Buttons */}
            <GridItem area={'grammar'} textAlign="center">
                <Button as={Link} to="" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Biology</Text>
                </Button>
            </GridItem>
            <GridItem area={'spelling'} textAlign="center">
                <Button as={Link} to="" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue"> 
                    <Text>Chemistry</Text>
                </Button>
            </GridItem>
            <GridItem area={'punctuation'} textAlign="center">
                <Button as={Link} to="" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Physics</Text>
                </Button>
            </GridItem>


            {/* Science Fact */}
            <GridItem area={''} textAlign="center" rowSpan={3}>
                <Box bg="blue.100" p="20px" borderRadius="md" h="100%">
                    <Text fontSize="lg" fontWeight="bold" mb="10px">Fact Of The Day</Text>
                    <Text>
                        Water boils at 100 degrees celsius
                    </Text>
                </Box>
            </GridItem>

            {/* Bottom Navigation */}
            <GridItem area={'footer'} alignSelf="end" justifySelf="stretch">
                <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
                    {/* English Button  */}
                    <Box display="flex" alignItems="center" justifyContent="center">
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
                    {/* Science Button with Green Border*/}
                    <Box borderTop="4px solid green" pt="2" display="flex" alignItems="center" justifyContent="center">
                        <Button as={Link} to="/science/details" w="95%" bg="white">
                            Science
                        </Button>
                    </Box>
                </Grid>
            </GridItem>
        </Grid>
    );
}

export default ScienceDetailPage;