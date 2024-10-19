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
            gap: "20px"         
        }}>
            <Text fontSize="3xl" mb="20px" fontWeight="bold"> 
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
            />

            <NavLink to="/HomePage">
                <Button 
                    colorScheme="teal" 
                    size="lg" 
                    fontSize="2xl" 
                    w="200px" 
                    h="60px" 
                    isDisabled={!userID}
                >
                    LogIn
                </Button>
            </NavLink>
        </div>
    );
}

export default LoginPage;
