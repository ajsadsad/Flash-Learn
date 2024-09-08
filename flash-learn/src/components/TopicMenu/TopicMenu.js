import { Button } from "@chakra-ui/react"
import BottomNav from "../BottomNav/BottomNav"

function TopicMenu() {
    return(
    <div>
        <Button colorScheme='teal' size='lg'>
            English
        </Button>

        <BottomNav/>
    </div>
    );
}

export default TopicMenu;