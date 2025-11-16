import {Box,Input,Heading,Text,Checkbox,Button,Image,VStack, HStack} from "@chakra-ui/react"
import {ReactComponent as Line} from "../Frame 1597878938.svg"
import Star from "../Star 2.svg"
export default function Section5() {
    return (
  <Box height={{md:888,base:1000}} width={{md:1440,base:375}} p={16} mt={{md:-200,base:-100}}  overflow="hidden" position="relative">
    <VStack gap={"80px"}>
<VStack gap={"16px"} >
<Heading textAlign={"center"} fontWeight={"bold"} fontSize={{md:56,base:32}} lineHeight="120%" letterSpacing="-0.01em">Ready to chat?</Heading>
<Text lineHeight="150%" letterSpacing="-0.01em" fontSize={{md:18,base:16}} width={{base:335}} textAlign={{base:"center"}}>Leave us your contact information and we will respond in no time</Text>
</VStack>

<VStack alignItems="flex-start" gap={"24px"}>
<VStack alignItems="flex-start" position="relative"  >
    <Text  textColor={"#2C2C2C"} textAlign={"left"} fontSize={16} lineHeight="150%" letterSpacing="-0.01em">Name</Text>
    <Input height={"48px"} width={{md:560,base:335}}  borderWidth={1} borderColor={"#2C2C2C"} borderRadius={12} bgColor="rgba(255, 255, 255, 0.1)"  backdropFilter="blur(4px)"/>
</VStack>

<VStack alignItems="flex-start" position="relative"   >
    <Text textColor={"#2C2C2C"} textAlign={"left"} fontSize={16} lineHeight="150%" letterSpacing="-0.01em">Email</Text>
    <Input height={"48px"} width={{md:560,base:335}} borderWidth={1} borderColor={"#2C2C2C"} borderRadius={12} bgColor="rgba(255, 255, 255, 0.1)"  backdropFilter="blur(4px)"/>
</VStack>

<VStack alignItems="flex-start" position="relative"  >
    <Text textColor={"#2C2C2C"} textAlign={"left"} fontSize={16} lineHeight="150%" letterSpacing="-0.01em">Message</Text>
    <Input height={"121px"} width={{md:560,base:335}} borderWidth={1} borderColor={"#2C2C2C"} borderRadius={12} bgColor="rgba(255, 255, 255, 0.1)"  backdropFilter="blur(4px)"/>
</VStack>
<HStack>
<Checkbox sx={{ "& .chakra-checkbox__control": { border: "1px solid #2C2C2C", borderRadius: "2px" }, "& .chakra-checkbox__control[data-checked]": { bg: "#000000", borderColor: "#000000" }, "& .chakra-checkbox__control[data-checked] svg": { color: "white" } }}/>

<Text fontSize={14} lineHeight="150%" letterSpacing="-0.01em"> I accept the <Text as="span" textColor={"#2C2C2C"} textDecoration="underline">Terms</Text></Text>
</HStack>

<Box width="100%" display="flex" justifyContent="center">
<Box px={"10px"} py={"9px"} border="1px dashed #114FF0" borderRadius="12px" width={"146px"} height={"68px"} >
  <Button _hover={{bgColor:"#114FF0"}} bg="#114FF0" fontWeight="medium" rightIcon={<Line style={{ transform: "rotate(-90deg)" }}/>} textColor="white" borderRadius="12px" fontSize={16} width={"122px"} height={"48px"} >Submit</Button>
</Box>
</Box>

</VStack>

</VStack>
<Image src={Star} alt="Star" position="absolute"  top={{md:"450px",base:"570px"}} left={{md:"-150px",base:"-130px"}} zIndex={-1}/>
        </Box>
    )
}