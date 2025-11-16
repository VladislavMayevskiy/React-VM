import { Box,Text,Input,Heading,Button,Card,CardBody,VStack,HStack,InputGroup,InputRightElement,IconButton} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/loginUser"

function LogIn() {
  const navigate = useNavigate()
  const [passHide,setPassHide] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const isFormValid = 
    email.trim() !== "" &&
    password.trim() !== "" 

   const apiLogin = async() => {
    try {
const user = {email:email,password:password}
const response = await loginUser(user)
console.log("Login completed",response)
  if (response && (response.status === 200 || response.data?.success)) {
    window.location.href = "/home";
  }  
} catch (error) {
      console.log("Failed login",error.message)
    }
   } 
  return (
<Box height={900}>
<Card maxW={662} height={565} mt={20} padding={30} borderRadius={50} bgColor={"white"} boxShadow={"2xl"} ml={360} >
  <CardBody>
<Heading fontFamily="ChangingW00" textColor="black" textAlign={"center"} fontSize={38}>LOG IN</Heading>


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


{/*Password Input*/}
<VStack mt={10} spacing={3}>

<Box w={"100%"} display="flex" justifyContent="flex-start" >
    <Text fontFamily={"text"} fontSize={18}>Password</Text>
</Box>
 
 <Box w={"100%"} display="flex" justifyContent="flex-start">
   <InputGroup>
 <Input value={password} onChange={(e) => setPassword(e.target.value)} type={passHide ? "text":"password"} borderColor={"#479AB1"} borderWidth={1} bgColor={"#EAFBFF"} borderRadius={16} width={542} height={58} fontFamily={"text"} placeholder="Enter email address" _placeholder={{color:"#479AB1"}}></Input>
        <InputRightElement> 
            <IconButton mr={14} mt={5}   color={"#479AB1"}
        bg="transparent" _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }} aria-label={passHide? "Hide password" : "Show password"} 
        icon={passHide ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />} 
        onClick={() => setPassHide(!passHide)} 
           />
        </InputRightElement>
      </InputGroup>
</Box> 

</VStack>
{/*End*/}


<HStack spacing={3} mt={3}>
   <Text textColor={"blue.500"} fontFamily={"text"} onClick={() => navigate("/ForgotPass")}>Forgot Password?</Text>
</HStack>

<VStack>
  <Button isDisabled={!isFormValid} onClick={apiLogin} _hover={{bgColor:"#f6630eff"}} mt={9} mr={4} fontFamily={"text"} width={542} height={14} borderRadius={16} fontSize={20} textColor={"white"} bgColor={"#F27D3B"}>LOG IN</Button>
  <HStack>
  </HStack>
</VStack>


  </CardBody>
</Card>
</Box>
  );
}

export default LogIn;
