import React from 'react';
import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function MathDetailPage() {
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
                <Text fontSize="4xl" fontWeight="bold" color="white">Math</Text>
            </GridItem>

            {/* Icons Section with Clickable Buttons */}
            <GridItem area={'addition'} textAlign="center">
                <Button as={Link} to="/math/addition" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Addition</Text>
                </Button>
            </GridItem>
            <GridItem area={'subtraction'} textAlign="center">
                <Button as={Link} to="/math/subtraction" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue"> 
                    <Text>Subtraction</Text>
                </Button>
            </GridItem>
            <GridItem area={'division'} textAlign="center">
                <Button as={Link} to="/math/division" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Division</Text>
                </Button>
            </GridItem>
            <GridItem area={'multiplication'} textAlign="center">
                <Button as={Link} to="/math/multiplication" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Multiplication</Text>
                </Button>
            </GridItem>

            {/* Second Row of Buttons */}
            <GridItem area={'mentalMath'} textAlign="center">
                <Button as={Link} to="/math/mental-math"  bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Mental Math</Text>
                </Button>
            </GridItem>
            <GridItem area={'equations'} textAlign="center">
                <Button as={Link} to="/math/equations"  bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Equations</Text>
                </Button>
            </GridItem>
            <GridItem area={'anglesAndShapes'} textAlign="center">
                <Button as={Link} to="/math/angles-and-shapes" bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Angles & Shapes</Text>
                </Button>
            </GridItem>
            <GridItem area={'combinationEquations'} textAlign="center">
                <Button as={Link} to="/math/combination-equations"  bg="gray.200" p="20px" borderRadius="md" w="100%" h="100%" border="10px solid darkblue">
                    <Text>Combination Equations</Text>
                </Button>
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

export default MathDetailPage;
