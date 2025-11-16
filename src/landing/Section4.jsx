import { Box, Text, Heading, VStack, HStack, Image } from "@chakra-ui/react";
import FirstIcon from "../Layout/Frame 1597878905.svg";
import SecondIcon from "../Layout/Frame 15978789052.svg";
import ThirdIcon from "../Layout/Frame 15978789051.svg";
import FourthIcon from "../Layout/Frame 15978789053.svg";
import BgCub from "../Rectangle 1721.svg";

export default function Section4() {
  return (
    <Box width={{ base: "100%", md: "1416px" }} height={{ base: "auto", md: "833px" }} mx="auto">
      <Heading textAlign="center" mt={{ base: "80px", md: "200px" }} mb={{ base: "40px", md: "80px" }} lineHeight="120%" letterSpacing="-0.01em" fontSize={{ base: "32px", md: "56px" }} fontWeight="bold">How It Works</Heading>

      <VStack spacing={{ base: "24px", md: "18px" }} align="center" display={{ base: "flex", md: "none" }} zIndex={1}>
        {[{icon: FirstIcon, title: "Brand Your Platform", text: "We customise the platform with your branding and domain."},
          {icon: SecondIcon, title: "Upload Your Content", text: "Add courses, resources, assessments, and interactive content."},
          {icon: ThirdIcon, title: "Sell to Schools and Students", text: "We customise the platform with your branding and domain."},
          {icon: FourthIcon, title: "Support Teachers & Learners", text: "Schools get easy access to your content, and you get recurring revenue."}
        ].map((item, i) => (
          <Box key={i} bgColor="rgba(17,79,240,0.03)" width={"335px"} height={"263px"} borderRadius="12px" p="24px" display="flex" flexDirection="column" alignItems="center" textAlign="center" backdropFilter="blur(10px)">
            <Image src={item.icon} alt={item.title} boxSize={"69px"} mb={"10px"}  mt={"5px"}/>
            <Heading  fontSize={"22px"} textColor={"#2C2C2C"} fontWeight="semibold"mb={"10px"} mt={"10px"}>{item.title}</Heading>
            <Text  className="footer-roboto" fontSize={"16px"} textColor={"#2C2C2C"}  lineHeight="150%" letterSpacing="-0.01em">{item.text}</Text>
          </Box>
        ))}
            <Image src={BgCub} alt="bg" ml="490px" mt="-53px" display={{ base: "block", md: "none" }} zIndex={-1} />
      </VStack>

      <VStack spacing="18px" mt="80px" display={{ base: "none", md: "flex" }}>
        <HStack spacing="18px">
          <Box bgColor="rgba(17,79,240,0.03)" backdropFilter="blur(10px)" w="634px" h="133px" borderRadius="12px" p="32px" display="flex" alignItems="flex-start" gap="16px">
            <Image src={FirstIcon} alt="Icon1" />
            <VStack align="start" spacing="8px">
              <Heading fontSize="24px" fontWeight="semibold" lineHeight="120%" letterSpacing="-0.01em">Brand Your Platform</Heading>
              <Text className="footer-roboto" fontSize="16px" lineHeight="150%" letterSpacing="-0.01em">We customise the platform with your branding and domain.</Text>
            </VStack>
          </Box>
          <Box bgColor="rgba(17,79,240,0.03)" backdropFilter="blur(10px)" w="634px" h="133px" borderRadius="12px" p="32px" display="flex" alignItems="flex-start" gap="16px">
            <Image src={SecondIcon} alt="Icon2" />
            <VStack align="start" spacing="8px">
              <Heading fontSize="24px" fontWeight="semibold" lineHeight="120%" letterSpacing="-0.01em">Upload Your Content</Heading>
              <Text className="footer-roboto" fontSize="16px" lineHeight="150%" letterSpacing="-0.01em">Add courses, resources, assessments, and interactive content.</Text>
            </VStack>
          </Box>
        </HStack>

        <HStack spacing="18px">
          <Box bgColor="rgba(17,79,240,0.03)" backdropFilter="blur(10px)" w="634px" h="133px" borderRadius="12px" p="32px" display="flex" alignItems="flex-start" gap="16px">
            <Image src={ThirdIcon} alt="Icon3" />
            <VStack align="start" spacing="8px">
              <Heading fontSize="24px" fontWeight="semibold" lineHeight="120%" letterSpacing="-0.01em">Sell to Schools and Students</Heading>
              <Text className="footer-roboto" fontSize="16px" lineHeight="150%" letterSpacing="-0.01em">Offer your platform directly to institutions and learners.</Text>
            </VStack>
          </Box>
          <Box bgColor="rgba(17,79,240,0.03)" backdropFilter="blur(10px)" w="634px" h="133px" borderRadius="12px" p="32px" display="flex" alignItems="flex-start" gap="16px">
            <Image src={FourthIcon} alt="Icon4" />
            <VStack align="start" spacing="8px">
              <Heading fontSize="24px" fontWeight="semibold" lineHeight="120%" letterSpacing="-0.01em">Support Teachers & Learners</Heading>
              <Text className="footer-roboto" fontSize="16px" lineHeight="150%" letterSpacing="-0.01em">Schools get easy access to your content, and you get recurring revenue.</Text>
            </VStack>
          </Box>
        </HStack>
      </VStack>

      <Image src={BgCub} alt="bg" ml="1100px" mt="-45px" display={{ base: "none", md: "block" }} />
    </Box>
  );
}
