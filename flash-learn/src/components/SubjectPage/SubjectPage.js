import { Button, Text } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
import React from 'react'

function SubjectPage() {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",  
            alignItems: "center",    
            justifyContent: "center", 
            height: "100vh",          
            gap: "60px"       
        }}>
            <Text fontSize="3xl" mb="20px" fontWeight="bold"> 
                Select a Subject
            </Text>
                <NavLink to="/english/details">
                    <Button colorScheme="teal" size="6xl" fontSize="4xl" w="800px" h="100px">
                            English
                    </Button>
                </NavLink>
                <NavLink to="/math/details">
                    <Button colorScheme="teal" size="6xl" fontSize="4xl" w="800px" h="100px">
                            Maths
                    </Button>
                </NavLink>
                <NavLink to="/science/details">
                    <Button colorScheme="teal" size="6xl" fontSize="4xl" w="800px" h="100px">
                            Science
                    </Button>
                </NavLink>
        </div>
    );
}

export default SubjectPage;