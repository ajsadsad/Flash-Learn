import { Button } from "@chakra-ui/react"
import React from 'react'
import '/Users/hfgilani/Desktop/SPR2024/SIS/Flash-Learn/flash-learn/src/components/HomePage/HomePage.css'
import '/Users/hfgilani/Desktop/SPR2024/SIS/Flash-Learn/flash-learn/src/App.css'

function HomePage() {
    return(
    <div className="container">
        <div className="button-container">
            <Button className="english">
                    English
            </Button>
            <Button className="maths">
                    Maths
            </Button>
        </div>
        <div className="button-container-row">
            <Button className="science">
                    Science
            </Button>
        </div>
    </div>
    );
}

export default HomePage;

//TODO: 
// format the levels to display at the bottom and be highlighted when selected
// Format the subjects so it is in the center on the page