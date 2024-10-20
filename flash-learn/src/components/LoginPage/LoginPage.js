import { Button, Text, Input } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { useState } from 'react'; 

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
            backgroundColor: "#DCDCDC",  // Light gray background
            padding: "20px"
        }}>
            <Text fontSize="3xl" mb="20px" fontWeight="bold" color="#282828" textShadow="1px 1px 6px rgba(0,0,0,0.2)"> 
                Enter User ID
            </Text>

            <Input
                placeholder="Enter User ID" 
                size="lg"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                type="number"
                w="300px"
                mb="20px"
                border="4px solid #1e90ff"  // Blue border similar to buttons
                borderRadius="10px"
                boxShadow="xl"
                color="black"  // Ensures black text when typing
                _placeholder={{ color: "gray.500" }}  // Placeholder text color
            />

            <NavLink to="/HomePage">
                <Button 
                    size="lg" 
                    fontSize="2xl" 
                    w="200px" 
                    h="60px" 
                    isDisabled={!userID}
                    bgGradient="linear(to-r, #0033FF, #00BBFF)"  // Blue gradient from MathDetailPage
                    color="white"  // White text color for contrast
                    border="4px solid #1e90ff"
                    borderRadius="50px"
                    boxShadow="xl"
                    _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }}  // Hover effect from MathDetailPage
                    transition="0.3s"
                >
                    LogIn
                </Button>
            </NavLink>
        </div>
    );
}

export default LoginPage;
