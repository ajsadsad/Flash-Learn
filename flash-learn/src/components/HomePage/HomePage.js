import { Button, Text } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

function HomePage() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",  
            alignItems: "center",    
            justifyContent: "center", 
            height: "100vh",          
            gap: "60px"               
        }}>
            {/* Title */}
            <Text fontSize="3xl" mb="20px" fontWeight="bold"> 
                Select your year group
            </Text>

            <NavLink to="/Subject">
                <Button colorScheme="teal" size="6xl" fontSize="4xl" w="800px" h="100px" >
                    K - 2
                </Button>
            </NavLink>
            <NavLink to="/Subject">
                <Button colorScheme="teal" size="6xl" fontSize="4xl" w="800px" h="100px" >
                    3 - 4
                </Button>
            </NavLink>
            <NavLink to="/Subject">
                <Button colorScheme="teal" size="6xl" fontSize="4xl" w="800px" h="100px" >
                    5 - 6
                </Button>
            </NavLink>
        </div>
    );
}

export default HomePage;