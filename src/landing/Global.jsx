import { Box } from "@chakra-ui/react"
import Section1 from "./Section1"
import Section15 from "./Section1_5"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Footer from "./Footer"
import Header from "./Header";

export default function Global () {
    return (
        <Box width={{md:"1440px"}} height={{base:"5187px",md:"4506px"}} overflow={"hidden"}>
<Section1/>
<Section15/>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Footer/>

        </Box>
    )
}
