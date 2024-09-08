import BottomNav from "../BottomNav/BottomNav"
import { Grid, GridItem } from '@chakra-ui/react'

function MathPage() {
    return(
        <div>
            <Grid
                templateAreas={`"header header"
                                "topics topics"
                                "footer footer"`}
                gridTemplateRows={'10% 1fr 5%'}
                gridTemplateColumns={'1fr 1fr'}
                h='100vh'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' bg='orange.300' area={'header'}>
                    Header
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={'topics'}>
                    Topics
                </GridItem>
                <GridItem bg='blue.300' area={'footer'}>
                    <BottomNav/>
                </GridItem>
            </Grid>
        </div>
    );
}

export default MathPage;