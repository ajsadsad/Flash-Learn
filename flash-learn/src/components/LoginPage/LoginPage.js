import { Button, Text, Input, Icon, Box } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { useState } from 'react'; 
import { FaBolt } from 'react-icons/fa'; 

function LoginPage() {
    const [userID, setUserID] = useState("");

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",  
            alignItems: "center",    
            justifyContent: "center", 
            height: "100vh",          
            gap: "20px",
            backgroundColor: "#DCDCDC",  
            padding: "20px"
        }}>

            <Icon as={FaBolt} 
                boxSize={40}
                bgGradient="linear(to-r, #0033FF, #00BBFF)" 
                color="white"
                borderRadius="full"
                padding="10px" 
                mb="10px"  
                boxShadow="xl"
            />

            <Box display="flex" alignItems="center" mb="20px">
                <Text 
                    fontSize="5xl"  
                    fontWeight="bold" 
                    color="#0033FF" 
                    fontFamily="'Baloo Bhai 2', cursive" 
                    textShadow="1px 1px 6px rgba(0,0,0,0.2)"
                >
                    Flash
                </Text>

                <Text 
                    fontSize="5xl" 
                    fontWeight="bold" 
                    color="white" 
                    fontFamily="'Baloo Bhai 2', cursive"  
                    textShadow="0px 0px 3px #0033FF, 2px 2px 6px rgba(0,0,0,0.2)"
                >
                    Learn
                </Text>
            </Box>

            <Input
                placeholder="Enter User ID" 
                size="lg"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                type="number"
                w="300px"
                mb="20px"
                border="4px solid #1e90ff" 
                borderRadius="10px"
                boxShadow="xl"
                color="black" 
                _placeholder={{ color: "gray.500" }} 
            />

            <NavLink to="/HomePage">
                <Button 
                    size="lg" 
                    fontSize="2xl" 
                    w="200px" 
                    h="60px" 
                    isDisabled={!userID}
                    bgGradient="linear(to-r, #0033FF, #00BBFF)" 
                    color="white" 
                    border="4px solid #1e90ff"
                    borderRadius="50px"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }}  
                    transition="0.3s"
                >
                    LogIn
                </Button>
            </NavLink>
        </div>
    );
}

export default LoginPage;
