import { Box,Text,Input,Heading,Button,Checkbox,Card,CardBody,VStack,HStack,InputGroup,InputRightElement,IconButton} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/authUser";

function CreateAcc() {
  const navigate = useNavigate()
  const [passHide,setPassHide] = useState(false)
  const [verifPassHide,setVerifyPassHide] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [checked, setChecked] = useState(false);
    const isFormValid = 
    firstName.trim() !== "" &&
    surname.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    verifyPassword.trim() !== "" &&
    password === verifyPassword &&
    checked;

  const apiRegister = async () => {
    try { 
   const    newUser = {email:email.trim(),first_name:firstName.trim(),last_name:surname.trim(),password:password,password_confirmation:verifyPassword,birthday:"2000-01-02",role:4,gender:0}
const response = await createUser(newUser)
console.log("User registration completed",response)
localStorage.setItem("token",response.token)

    } catch (error) {
      alert("Registration failed")
      console.error("Failed registration")
      throw error
    }
  }
  return (
<Box height={900}>
<Card maxW={662} height={872} mt={20} padding={30} borderRadius={50} bgColor={"white"} boxShadow={"2xl"} ml={360} >
  <CardBody>
<Heading fontFamily="ChangingW00" textColor="black" textAlign={"center"} fontSize={38}>CREATE ACCOUNT</Heading>

 

{/* First Name and Surname Input */}
<HStack spacing={4} mt={50}> 
<VStack spacing={3}>

<Box w={"100%"} display="flex" justifyContent="flex-start">
  <Text fontFamily={"text"} textAlign="left"   fontSize={18}>First Name</Text>
  </Box>

  <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} borderColor={"#479AB1"} borderWidth={1} bgColor={"#EAFBFF"} _placeholder={{color:"#479AB1"}} borderRadius={16} width={264} height={58}  placeholder="Enter first name" fontFamily={"text"}></Input>

</VStack>

<VStack spacing={3} >

<Box w={"100%"} display="flex" justifyContent="flex-start">
    <Text fontFamily={"text"} fontSize={18}>Surname</Text>
</Box>

  <Input value={surname} onChange={(e) => setSurname(e.target.value)} borderColor={"#479AB1"} borderWidth={1} bgColor={"#EAFBFF"} borderRadius={16} width={264} height={58} fontFamily={"text"} placeholder="Enter surname" _placeholder={{color:"#479AB1"}}></Input>

</VStack>
</HStack>
{/*End */}



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



{/*Password Confirmation Input*/}
<VStack mt={10} spacing={3}>

<Box w={"100%"} display="flex" justifyContent="flex-start" >
    <Text fontFamily={"text"} fontSize={18}>Password Confirmation</Text>
</Box>
 
 <Box w={"100%"} display="flex" justifyContent="flex-start">
   <InputGroup>
 <Input value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} type={verifPassHide ? "text":"password"} borderColor={"#479AB1"} borderWidth={1} bgColor={"#EAFBFF"} borderRadius={16} width={542} height={58} fontFamily={"text"} placeholder="Enter password again" _placeholder={{color:"#479AB1"}}></Input>
        <InputRightElement>
         <IconButton mr={14} mt={5}   color={"#479AB1"}
        bg="transparent" _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }} aria-label={verifPassHide ? "Hide password" : "Show password"}
         icon={verifPassHide ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />} 
        onClick={() => setVerifyPassHide(!verifPassHide)} 
        />
        </InputRightElement>
      </InputGroup>
</Box> 

</VStack>
{/*End*/}

<HStack spacing={3} mt={7}>
  <Checkbox isChecked={checked} onChange={(e) => setChecked(e.target.checked)} />
  <Text fontFamily={"text"} textColor={"gray.500"} >I have read and understand the </Text>
   <Text textColor={"blue.500"} fontFamily={"text"}>Privacy Policy</Text>
</HStack>

<VStack>
  <Button isDisabled={!isFormValid} onClick={apiRegister} _hover={{bgColor:"#f6630eff"}} mt={9} mr={4} fontFamily={"text"} width={542} height={14} borderRadius={16} fontSize={20} textColor={"white"} bgColor={"#F27D3B"}>CREATE ACCOUNT</Button>
  <HStack>
    <Text fontFamily={"text"} textColor={"gray.500"}>Already have an account?</Text>
    <Text textColor={"blue.500"} fontFamily={"text"} onClick={() => navigate("/login")}>Log In</Text>
  </HStack>
</VStack>


  </CardBody>
</Card>
</Box>
  );
}

export default CreateAcc;
