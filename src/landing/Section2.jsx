import { Box, Flex, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";
import Circle2 from "../Ellipse 3.svg";

export default function Section2() {
  return (
    <Box  height={{md:"586px",base:"550px"}} mt={-200} position="relative" >
      <Image src={Circle2} alt="Circle" position="absolute" mt={{ md: "400px", base: "400px" }} ml={{md:"162px",base:"-110px"}} zIndex={-1} />
      <VStack>
        <Flex display={{ base: "none", md: "flex" }} position="relative" zIndex="1" gap="300px" width="1312px" height="186px" ml="64px" mt="200px">
          <Heading fontWeight="bold">Education, Delivered</Heading>
          <VStack gap="12px" h="186px" w="640px">
            <Text fontSize="18px" lineHeight="150%" letterSpacing="-0.01em" width="600px" textAlign="left" fontWeight="medium">Have you got great educational content but need a platform to distribute it? Our platform gives education content creators everything they need to package, distribute, and monetise courses for schools.</Text>
            <Text fontSize="18px" lineHeight="150%" letterSpacing="-0.01em" width="600px" fontWeight="medium">With seamless integration, secure payment options, and powerful teaching tools, you stay in control of your brand while reaching the schools that matter most.</Text>
          </VStack>
        </Flex>
        <HStack display={{ base: "flex", md: "none" }} flexDir="column" align="flex-start" spacing="16px" width="335px" mt="60px">
          <Heading fontWeight="bold" fontSize="32px" width="335px">Education, Delivered</Heading>
          <VStack align="flex-start" spacing="12px" width="335px">
            <Text fontSize="16px" lineHeight="150%" letterSpacing="-0.01em" width="335px" fontWeight="medium">Have you got great educational content but need a platform to distribute it? Our platform gives education content creators everything they need to package, distribute, and monetise courses for schools.</Text>
            <Text fontSize="16px" lineHeight="150%" letterSpacing="-0.01em" width="335px" fontWeight="medium">With seamless integration, secure payment options, and powerful teaching tools, you stay in control of your brand while reaching the schools that matter most.</Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
