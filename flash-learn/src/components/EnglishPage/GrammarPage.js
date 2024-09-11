import React, {useState} from 'react';
import { Grid, GridItem, Box, Text, Button, Radio, RadioGroup,Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function GrammarPage() {

    const [selectedOption, setSelectedOption] = useState('');

    //example question and options
    const question = "Select the correct use of a comma";
    const options = [
        "The dog, barked loudly at the cat.",
        "The dog barked, loudly at the cat.",
        "The dog barked loudly, at the cat."
    ];

    return(
        <Grid 
        templateRows = "auto 1fr"
        gap = "4"
        padding = "20px"
        minH = "100vh"
        bg = "gray.50"
        >

    {/* Heading */}
    <GridItem textAlign="center">
        <Text fontSize = "5xl" fontWeight = "bold" colour ="green">Grammar</Text>
    </GridItem>

    {/* Flashcard Section */}
    <GridItem display="flex" justifyContent="center">
                <Box
                    bg="white"
                    p="20px"
                    borderRadius="md"
                    boxShadow="lg"
                    width="60%"
                    textAlign="center"
                >
                    {/* Question */}
                    <Text fontSize="2xl" mb="4">{question}</Text>

                    {/* Options */}
                    <RadioGroup onChange={setSelectedOption} value={selectedOption}>
                        <Stack direction="column">
                            {options.map((option, index) => (
                                <Radio key={index} value={option}>
                                    {option}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>

                    {/* Submit Button */}
                    <Button mt="6" colorScheme="blue" onClick={() => alert(`You selected: ${selectedOption}`)}>
                        Submit Answer
                    </Button>
                </Box>
            </GridItem>
        </Grid>

    {/* Bottom Navigation */}
<GridItem area={'footer'} alignSelf="end" justifySelf="stretch">
<Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
    {/* English Button with Green Border */}
    <Box borderTop="4px solid green" pt="2" display="flex" alignItems="center" justifyContent="center">
        <Button w="95%" bg="white">
            English
        </Button>
    </Box>
    {/* Math Button */}
    <Box display="flex" alignItems="center" justifyContent="center">
        <Button w="95%" bg="white">
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

export default GrammarPage;

