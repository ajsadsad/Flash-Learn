import React from 'react';
import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ScienceDetailPage() {
    return (
        <Grid
            templateAreas={`
                "header header header header"
                "addition subtraction division multiplication"
                "mentalMath equations anglesAndShapes combinationEquations"
                "footer footer footer footer"
            `}
            gridTemplateRows={'auto auto auto 1fr'}
            gridTemplateColumns={'repeat(4, 1fr)'}
            minH="100vh"
            gap="4"
            padding="20px"
            color="blackAlpha.700"
            fontWeight="bold"
        >
            {/* Header */}
            <GridItem area={'header'} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color="white">Science</Text>
            </GridItem>



            {/* Bottom Navigation */}
            <GridItem area={'footer'} alignSelf="end" justifySelf="stretch">
                <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
                    {/* English Button */}
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button as={Link} to="/english/details" w="95%" bg="white">
                            English
                        </Button>
                    </Box>
                    {/* Math Button  with Green Border */}
                    <Box borderTop="4px solid green" pt="2" display="flex" alignItems="center" justifyContent="center">
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

export default ScienceDetailPage;
