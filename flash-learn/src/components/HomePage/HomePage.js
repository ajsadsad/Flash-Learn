import { Button } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

function HomePage() {
    return(
    <div>

        <NavLink to= "/English">
            <Button colorScheme='teal' size='lg'>
                K - 2
            </Button>
        </NavLink>
        <NavLink to= "/Math">
            <Button colorScheme='teal' size='lg'>
                3 - 4
            </Button>
        </NavLink>
        <NavLink to= "/Science">
            <Button colorScheme='teal' size='lg'>
                5 - 6
            </Button>
        </NavLink>
    </div>
    );
}

export default HomePage;