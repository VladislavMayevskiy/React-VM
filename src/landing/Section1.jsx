import { Box, Image, Text, Heading, Flex, VStack, Button } from "@chakra-ui/react";
import Triangle from "../Polygon 2.svg";
import Elipse from "../Ellipse 2.svg";
import Star from "../Star 1.svg";
import Kub from "../Cub.svg";
import { ReactComponent as Line } from "../Frame 1597878938.svg";
import Header from "./Header";

export default function Section1() {
  return (
    <Box position="relative" width={{ base: "100%", md: "100%", lg: "1440px" }} maxW="1440px" height={{ base: "682px", md: "820px", lg: "920px" }} mx="auto" zIndex={0} px={{ base: 4, md: 8, lg: 0 }} py={{ base: 8, md: 10, lg: 0 }} overflow="hidden">
      <Box position="relative" zIndex={5}><Header /></Box>

      <Image src={Triangle} alt="Triangle" position="absolute" mt={{ base: "-30px", md: "-10px", lg: "0px" }} ml={{ base: "20px", md: "120px", lg: "227px" }} width={{ base: "100px", md: "180px", lg: "auto" }} zIndex={1} />
      <Image src={Elipse} alt="Elipse" position="absolute" mt={{ base: "-235px", md: "-220px", lg: "-207px" }} ml={{ base: "175px", md: "1160px", lg: "1100px" }} width={{ base: "257px", md: "280px", lg: "auto" }} zIndex={1} />
      <Image src={Star} alt="Star" position="absolute" mt={{ base: "360px", md: "340px", lg: "370px" }} ml={{ base: "-134px", md: "-170px", lg: "-202px" }} width={{ base: "276px", md: "290px", lg: "auto" }} zIndex={1} />
      <Image src={Kub} alt="Kub" position="absolute" mt={{ base: "420px", md: "470px", lg: "500px" }} ml={{ base: "300px", md: "1300px", lg: "1330px" }} width={{ base: "190px", md: "200px", lg: "auto" }} zIndex={1} overflow="hidden" />

      <Flex position="relative" mt={{ base: "80px", md: "40px", lg: "20px" }} width={{ base: "100%", md: "1000px", lg: "1280px" }} height={{ base: "auto", md: "600px", lg: "700px" }} justify="center" align="center" mx="auto">
        <VStack gap={{ base: "62px", md: "50px", lg: "62px" }} spacing={{ base: "24px", md: "26px", lg: "28px" }} width={{ base: "100%", md: "720px", lg: "858px" }} textAlign="center" justify="center" zIndex={2}>
          <Heading fontSize={{ base: "30px", md: "44px", lg: "56px" }} lineHeight="120%" letterSpacing="-0.01em" color="#1A1A1A" width={{ base: "335px", md: "720px", lg: "858px" }} mx="auto">Empower Schools with Your Own Branded Learning Platform</Heading>
          <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }} lineHeight="150%" color="#4B4B4B" letterSpacing="-0.01em" w={{ base: "335px", md: "720px", lg: "auto" }} mx="auto">Sell your courses and educational content directly to schools and students — all under your brand.</Text>
          <Box px={{ base: "6px", md: "8px", lg: "10px" }} py={{ base: "6px", md: "8px", lg: "9px" }} border="1px dashed #114FF0" borderRadius="12px" w={{ base: "150px", md: "160px", lg: "178px" }} h={{ base: "56px", md: "60px", lg: "68px" }} mx="auto">
            <Button _hover={{ bgColor: "#114FF0" }} bg="#114FF0" fontWeight="medium" rightIcon={<Line />} color="white" borderRadius="12px" fontSize={{ base: 14, md: 15, lg: 16 }} w={{ base: "128px", md: "140px", lg: "154px" }} h={{ base: "40px", md: "44px", lg: "48px" }}>Learn more</Button>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
