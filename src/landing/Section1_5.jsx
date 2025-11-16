import {Flex,Box,Button, HStack} from "@chakra-ui/react"

export default function Section1_5() {
    return (
<Box width={1440} height={72} mt={{md:"-95px",base:-10}} position="relative" overflow="hidden" zIndex={1}>
  <HStack spacing={{md:"32px",base:"10px"}} position="absolute" >

<Box width={{md:"442px",base:"287px"}} height={{md:"72px",base:"52px"}} borderRadius={12} display="flex" justifyContent="center" alignItems="center" textAlign="center" fontSize={{md:20,base:14}} fontWeight={"semibold"} lineHeight="120%" letterSpacing="-0.01em" textColor="black" bgColor="rgba(17, 79, 240, 0.03)" backdropFilter="blur(10px)">
    DELIVER EDUCATION, YOUR WAY
    </Box>

    <Box width={{md:"721px",base:"479px"}}height={{md:"72px",base:"52px"}} fontSize={{md:20,base:14}} fontWeight={"semibold"}  letterSpacing="-0.01em" lineHeight="120%" borderRadius={12} bgColor="rgba(17, 79, 240, 0.03)" textColor="black"   display="flex" justifyContent="center" alignItems="center" textAlign="center">
      GROW YOUR AUDIENCE WITHOUT GIVING UP YOUR IDENTITY
    </Box>

    <Box width={{md:"750px",base:"287px"}} height={{md:"72px",base:"52px"}} fontSize={{md:20,base:14}} fontWeight={"semibold"}  letterSpacing="-0.01em" lineHeight="120%" borderRadius={12} bgColor="rgba(17, 79, 240, 0.03)" backdropFilter="blur(10px)" textColor="black"   display="flex" justifyContent="center" alignItems="center" textAlign="center" >
      FULL CONTROL over your content, pricing, and branding
    </Box>
  </HStack>
</Box>



    )
}