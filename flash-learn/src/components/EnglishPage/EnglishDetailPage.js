import React from 'react';
import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function EnglishDetailPage() {
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
                <Text fontSize="4xl" fontWeight="bold" color="white">ENGLISH</Text> {/* Updated color to white */}
            </GridItem>

            {/* Icons Section with Clickable Buttons */}
            <GridItem area={'grammar'} textAlign="center">
                <Button as={Link} to="/english/grammar" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Grammar</Text>
                </Button>
            </GridItem>
            <GridItem area={'spelling'} textAlign="center">
                <Button as={Link} to="/english/spelling" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue"> 
                    <Text>Spelling</Text>
                </Button>
            </GridItem>
            <GridItem area={'punctuation'} textAlign="center">
                <Button as={Link} to="/english/punctuation" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Punctuation</Text>
                </Button>
            </GridItem>

            {/* Word of the Day */}
            <GridItem area={'wordOfTheDay'} textAlign="center">
                <Box bg="gray.100" p="20px" borderRadius="md">
                    <Text fontSize="lg" mb="10px">Word of the Day</Text>
                    <Text fontSize="2xl" fontWeight="bold">Inundate</Text>
                </Box>
            </GridItem>

            {/* Definition Section */}
            <GridItem area={'definition'} textAlign="center">
                <Box bg="gray.200" p="20px" borderRadius="md">
                    <Text fontSize="lg" fontWeight="bold">Definition</Text>
                    <Text>"To overwhelm someone with things or people to deal with."</Text>
                </Box>
            </GridItem>

            {/* Use It in a Sentence Section */}
            <GridItem area={'sentence'} textAlign="center">
                <Box bg="gray.200" p="20px" borderRadius="md">
                    <Text fontSize="lg" fontWeight="bold">Use it in a Sentence</Text>
                    <Text>"The teacher inundated the students with homework before the holiday break."</Text>
                </Box>
            </GridItem>

            {/* Essay Writing Tips */}
            <GridItem area={'tips'} textAlign="left" rowSpan={3}>
                <Box bg="blue.100" p="20px" borderRadius="md" h="100%">
                    <Text fontSize="lg" fontWeight="bold" mb="10px">Essay Writing Tips</Text>
                    <Text>
                        Many students and even professional writers struggle with figuring out where and how to start their essays...
                    </Text>
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

export default EnglishDetailPage;