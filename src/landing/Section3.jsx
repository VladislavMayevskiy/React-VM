import { Box, Heading, Button, Flex, VStack, Text, Image } from "@chakra-ui/react";
import Background from "../Layout/220.svg";
import { ReactComponent as Line } from "../Frame 1597878938.svg";
import FirstIcon from "../Layout/Polygon 2.svg";
import SecondIcon from "../Layout/Frame 1597878918.svg";
import ThirdIcon from "../Layout/Frame 1597878920.svg";
import FourIcon from "../Layout/Frame 1597878921.svg";

export default function Section3() {
  return (
    <Box width={{ base: "375px", md: "1440px" }} height={{ base: "1186px", md: "1060px" }} mt={{md:-4,base:"87px"}} >
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "center", md: "flex-start" }} gap={{ md: "42px" }} p={{ md: "15px" }}>
        
        {/* blue card */}
        <Box bgImage={`url(${Background})`} bgSize="cover" bgPos="center" borderRadius={{ base: "12px", md: "0" }} width={{ base: "335px", md: "702px" }} height={{ base: "126px", md: "1060px" }} py={{base:"40px"}} p={{md: "24px" }} display="flex" flexDir="column" justifyContent={{ base: "center", md: "space-between" }} alignItems={{md:"flex-start",base:"center"}}>
          <Heading  textColor="white" fontSize={{ base: "32px", md: "32px" }}>Key Benefits</Heading>
          <Flex justify="center" mt={{ base: "auto", md: "855px" }}>
            <Box  p="8px" border="1px dashed #5A88FF" borderRadius="14px" w={{ base: "335px", md: "178px" }} display={{ base: "none", md: "flex" }} justifyContent="center">
              <Button _hover={{ bgColor: "white" }} bgColor="white" fontWeight={400} rightIcon={<Line />} textColor="#114FF0" borderRadius="12px" fontSize={{ base: "14px", md: "16px" }} w={{ base: "300px", md: "154px" }} h={{ base: "44px", md: "48px" }}>Contact Us</Button>
            </Box>
          </Flex>
        </Box>

        <VStack align="flex-start" spacing={{ base: "16px", md: "16px" }} mt={{ base: "24px", md: "5" }}>
          {[
            { icon: FirstIcon, title: "Your Brand, Your Way", text: "Offer schools a platform that carries your name, logo, and identity." },
            { icon: SecondIcon, title: "Monetise with Ease", text: "Sell courses directly to schools with built-in e-commerce and licensing tools." },
            { icon: ThirdIcon, title: "Scalable & Secure", text: "Handle any number of schools, classes, and learners with enterprise-grade security." },
            { icon: FourIcon, title: "All-in-One Solution", text: "No need for external tools: host, deliver, manage, and sell in one platform." },
          ].map((item, i) => (
            <Box key={i} bgColor="#F7F9FF" borderRadius="12px" border="1px dashed #C2D1FF" p={{ base: "20px", md: "32px" }} width={{ base: "335px", md: "662px" }} height={{ base: "206px", md: "240px" }}>
              <Image mt={{base:"10px"}} src={item.icon} alt={item.title} width={{ base: "32px", md: "24px" }} height={{ base: "32px", md: "24px" }} />
             
              <Heading mt={{ base: "18px", md: "20px" }} fontSize={{ base: "22px", md: "32px" }} fontWeight="semibold" lineHeight="120%" letterSpacing="-0.01em">{item.title}</Heading>
              <Text mt={{ base: "12px", md: "8px" }} fontSize={{ base: "16px", md: "20px" }} lineHeight="150%" letterSpacing="-0.01em">{item.text}</Text>
            </Box>
          ))}
                 <Box  p="8px" border="1px dashed #5A88FF" borderRadius="14px" width={{ base: "335px", md: "178px" }} display={{ base: "flex", md: "none" }} justifyContent="center">
              <Button _hover={{ bgColor: "#114FF0" }} bgColor="#114FF0" fontWeight={400} lineHeight="150%" letterSpacing="-0.01em" rightIcon={<Line />} textColor="white" borderRadius="12px" fontSize={{ base: "16px", md: "16px" }} width={{ base: "311px", md: "154px" }} height={{ base: "44px", md: "48px" }}>Contact Us</Button>
            </Box>
        </VStack>
      
      </Flex>
    </Box>
  );
}
