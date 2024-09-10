import { Button } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

function HomePage() {
    return(
    <div style={
        {"display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center"}}>
        <div>
            <NavLink to= "/English">
                <Button colorScheme='teal' size='lg'>
                    English
                </Button>
            </NavLink>
            <NavLink to= "/Math">
                <Button colorScheme='teal' size='lg'>
                    Maths
                </Button>
            </NavLink>
            <NavLink to= "/Science">
                <Button colorScheme='teal' size='lg'>
                    Science
                </Button>
            </NavLink>
        </div>
        <div>
        <NavLink to= "/easy">
                <Button colorScheme='teal' size='lg'>
                    K - 2
                </Button>
            </NavLink>
            <NavLink to= "/moderate">
                <Button colorScheme='teal' size='lg'>
                    3 - 4
                </Button>
            </NavLink>
            <NavLink to= "/hard">
                <Button colorScheme='teal' size='lg'>
                    5 - 6
                </Button>
            </NavLink>
        </div>
    </div>
    );
}

export default HomePage;

//TODO: 
// format the levels to display at the bottom and be highlighted when selected
// Format the subjects so it is in the center on the page