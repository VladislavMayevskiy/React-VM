import {Text,Button,Flex } from "@chakra-ui/react";

export default function Header() {
    return (
<Flex align="center" justify="space-between" width={{md:"100%",base:"375px"}} p="16px " zIndex={2} >
  <Text fontWeight="bold" fontSize="20px">LOGO</Text>
  <Button textColor="black" bgColor={"white"} borderRadius="12px" px="24px" height="48px" _hover={{ bg: "white" }} zIndex={1}>
    Contact
  </Button>
</Flex>

    )
} 