import { Button } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

function HomePage() {
    return(
    <div>

        <NavLink to= "/English">
            <Button colorScheme='teal' size='lg'>
                English
            </Button>
        </NavLink>
        <Button colorScheme='teal' size='lg'>
            Math
        </Button>
        <Button colorScheme='teal' size='lg'>
            Science
        </Button>
    </div>
    );
}

export default HomePage;