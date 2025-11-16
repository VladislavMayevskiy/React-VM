import { Box,Text,Input,Heading,Button,Card,CardBody,VStack,HStack} from "@chakra-ui/react";
import { useState } from "react";
import { forgotPassword } from "../api/forgotPassword.js";

function ForgotPass() {
  const [email, setEmail] = useState("");
    const isFormValid = 
    email.trim() !== ""

    const apiForgotPassword = async() => {
      try {
const request = {email:email}
const response = await forgotPassword(request)
console.log("Check email",response)
      } catch (error) {
        console.error(error.message)
        throw error
      }
    }
  return (
<Box height={900}>
<Card maxW={676} height={451} mt={20} padding={30} borderRadius={50} bgColor={"white"} boxShadow={"2xl"} ml={360} >
  <CardBody>
<Heading fontFamily="ChangingW00" textColor="black" textAlign={"center"} fontSize={38}>FORGOT PASSWORD</Heading>
<Text mt={5} fontFamily={"text"} textColor={"gray.500"}>Enter your email. We will send you a link to change your password.</Text>


{/*Email Input*/}
<VStack mt={10} spacing={3}>

<Box w={"100%"} display="flex" justifyContent="flex-start" >
    <Text fontFamily={"text"} fontSize={18}>Email Address</Text>
</Box>
 
 <Box w={"100%"} display="flex" justifyContent="flex-start">
  <Input value={email} onChange={(e) => setEmail(e.target.value)} borderColor={"#479AB1"} borderWidth={1} bgColor={"#EAFBFF"} borderRadius={16} width={542} height={58} fontFamily={"text"} placeholder="Enter email address" _placeholder={{color:"#479AB1"}}></Input>
</Box> 

</VStack>
{/*End */}


<VStack>
  <Button isDisabled={!isFormValid} onClick={apiForgotPassword} _hover={{bgColor:"#f6630eff"}} mt={9} mr={4} fontFamily={"text"} width={542} height={14} borderRadius={16} fontSize={20} textColor={"white"} bgColor={"#F27D3B"}>SUBMIT</Button>
  <HStack>
  </HStack>
</VStack>


  </CardBody>
</Card>
</Box>
  );
}

export default ForgotPass;
