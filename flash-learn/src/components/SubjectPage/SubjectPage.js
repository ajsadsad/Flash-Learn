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
            <div>
                <NavLink to="/English">
                    <Button colorScheme="teal" size="6xl" fontSize="4xl" w="800px" h="100px">
                            English
                    </Button>
                </NavLink>
                <NavLink to="/Math">
                    <Button colorScheme="teal" size="6xl" fontSize="4xl" w="800px" h="100px">
                            Maths
                    </Button>
                </NavLink>
                <NavLink to="/Science">
                    <Button colorScheme="teal" size="6xl" fontSize="4xl" w="800px" h="100px">
                            Science
                    </Button>
                </NavLink>
            </div>
        </div>
    );
}

export default SubjectPage;