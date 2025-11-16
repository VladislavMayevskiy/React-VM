import { Box, Flex, Text, HStack, Image, Divider, VStack } from "@chakra-ui/react";
import Facebook from "../logo/Facebook.svg";
import Inst from "../logo/Instagram.svg";
import X from "../logo/X.svg";
import LinkedIn from "../logo/LinkedIn.svg";
import Yt from "../logo/Youtube.svg";

export default function Footer() {
  return (
    <Box width={{ md: "1440px", base: "375px" }} height={{ md: "313px", base: "287px" }} >
      <Box width={{ md: "1408px", base: "335px" }} className="footer-poppins" height={{ md: "281px", base: "255px" }} bgColor="#114FF0" borderRadius="20px" px={{ md: "80px", base: "24px" }} py={{ md: "64px", base: "32px" }} position="relative" display="flex" flexDirection="column" justifyContent="space-between" mx="auto">
        
        {/*Desktop*/}
        <Flex justify="space-between" align="center" mt={7} display={{ md: "flex", base: "none" }}>
          <Text fontWeight="medium" fontSize="36px" letterSpacing="-0.01em" textColor="white">LOGO</Text>
          <HStack spacing="12px">
            <Image src={Facebook} alt="Facebook" w="24px" h="24px" />
            <Image src={Inst} alt="Instagram" w="24px" h="24px" />
            <Image src={X} alt="X" w="24px" h="24px" />
            <Image src={LinkedIn} alt="LinkedIn" w="24px" h="24px" />
            <Image src={Yt} alt="YouTube" w="24px" h="24px" />
          </HStack>
        </Flex>

        <Divider borderColor="#FFFFFF" borderWidth="1px" width={{ base: "287px", md: "100%" }} display={{ md: "flex", base: "none" }} />

        <Flex justify="center">
          <HStack spacing="30px" fontSize="14px" lineHeight="150%" display={{ md: "flex", base: "none" }}>
            <Text textDecoration="underline" color="white">Privacy Policy</Text>
            <Text textDecoration="underline" color="white">Terms of Service</Text>
            <Text textDecoration="underline" color="white">Cookies Settings</Text>
          </HStack>
        </Flex>

        {/*Mobile*/}
        <VStack spacing="30px" display={{ base: "flex", md: "none" }} align="center" >
          <Flex justify="space-between" align="center" width="100%" mt={"-100px"}>
            <Text fontWeight="medium" fontSize="24px" letterSpacing="-0.01em" textColor="white">LOGO</Text>
            <HStack spacing="12px">
              <Image src={Facebook} alt="Facebook" width="24px" height="24px" />
              <Image src={Inst} alt="Instagram" width="24px" height="24px" />
              <Image src={X} alt="X" width="24px" height="24px" />
              <Image src={LinkedIn} alt="LinkedIn" width="24px" height="24px" />
              <Image src={Yt} alt="YouTube" width="24px" height="24px" />
            </HStack>
          </Flex>

          <Divider borderColor="#FFFFFF" borderWidth="1px" width="100%" />

          <VStack spacing="10px" fontSize="14px" lineHeight="150%" textAlign="center">
            <Text textDecoration="underline" color="white">Privacy Policy</Text>
            <Text textDecoration="underline" color="white">Terms of Service</Text>
            <Text textDecoration="underline" color="white">Cookies Settings</Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}
