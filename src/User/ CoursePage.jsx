import { Box, Heading, Text, Button, HStack, VStack, Image, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { array } from "./array";
import {ReactComponent as Arrow} from "./image/chevron down1.svg"
export default function CoursePage({ id, previousPage, setActive }) {
  const course = array.find((c) => c.id === Number(id));

  const [openModule, setOpenModule] = useState(null);

  if (!course) {
    return (
      <Box p={6}>
        <Text>Course not found</Text>
      </Box>
    );
  }

  return (
    <Box fontFamily="Lato" >
      <HStack mb={5} >
       <Text onClick={() => setActive(previousPage || "Courses")} fontSize="16px" textColor={"#434645"} >
            {previousPage} 
          </Text>
          <Text>/</Text>
          <Text  fontSize="16px" textColor={"#1F2221"} >
        {course.title}
          </Text>
          </HStack>
      <HStack spacing={4} align="flex-start">

        <Box p={"24px"} bgColor={"white"} minH={"892px"} width={"732px"} borderColor={"#B4D6DF"} borderWidth={"1px"} borderRadius={"10px"}>

          {/* TITLE */}
          <Heading fontFamily={"Lato"} fontSize="32px" fontWeight="medium" mb={4}>
            {course.title}
          </Heading>
            <Text mb={4} textColor={"#434645"} fontSize={"16px"} fontFamily={"Lato"}>
                {course.description}
            </Text>
          {/* BADGES */}
          <HStack spacing={3} mb={4}>
            <Box bgColor={"#CAE0C3"} px={3} py={1} borderRadius="6px">
              <Text fontWeight={"medium"} letterSpacing={"150%"} fontSize="14px">{course.modules} Modules</Text>
            </Box>

            <Box bgColor={"#CAE0C3"} px={3} py={1} borderRadius="6px">
              <Text fontSize="14px" letterSpacing={"150%"}>{course.units} Units</Text>
            </Box>

            <Box bgColor={"#CAE0C3"} px={3} py={1} borderRadius="6px">
              <Text fontSize="14px" letterSpacing={"150%"}>{course.hours} hours</Text>
            </Box>

            <Box bgColor={"#CAE0C3"} px={3} py={1} borderRadius="6px">
              <Text fontSize="14px" letterSpacing={"150%"}>Instructor: {course.instructor}</Text>
            </Box>
          </HStack>

          {/* START BUTTON */}
          <Button
            bg="#0070C1"
           textColor={"white"}
            borderRadius="10px"
            px={6}
            py={3}
            mb={6}
            _hover={{ bg: "#005A9E" }}
            width={"134px"}
            height={"44px"}
          >
            Start course
          </Button>
            <Divider borderColor={"#B4D6DF"} borderWidth={"0.5px"} mb={5}/>
          <Heading fontSize="20px" fontWeight={"bold"} fontFamily={"Lato"} mb={3}>About this course</Heading>
          <Text fontSize="14px" lineHeight={"150%"} fontFamily={"Lato"} color="#434645" mb={6}>
            {course.about}
          </Text>

          {/* WHAT YOU'LL ACHIEVE */}
          <Heading fontSize="20px" fontWeight={"bold"} fontFamily={"Lato"} mb={3}>What you'll achieve</Heading>
          <VStack align="stretch" spacing={2}>
            {course.achievements.map((a, i) => (
              <Text fontSize={"14px"} fontFamily={"Lato"} key={i}>• {a}</Text>
            ))}
          </VStack>

        </Box>

        <Box width={"400px"} minH={"892px"} flex="1" bg="white" p={4} borderColor={"#B4D6DF"} borderWidth={"1px"} borderRadius="12px">
          <Image
            src={course.imageUrl}
            borderRadius="10px"
            mb={4}
            h="200px"
            width={"100%"}
            objectFit="cover"
          />

          <Heading fontSize="20px" fontWeight={"bold"} fontFamily={"Lato"} mb={3}>Course content</Heading>

          {course.content.map((module, index) => (
            <Box key={index} mb={4}>

              <VStack
                align={"start"}
                cursor="pointer"
                onClick={() => setOpenModule(openModule === index ? null : index)}
              >
                <Text fontWeight="bold" fontSize={"15px"} fontFamily={"Lato"}>{module.title}</Text>
                <Text fontSize={"14px"} fontFamily={"Lato"}>{module.str}</Text>
                            {openModule === index && (
                <VStack align="stretch" mt={2} spacing={2}>
                  {module.units.map((unit, i) => (
                    <Box
                      key={i}
                      px={3}
                      py={"13px"}
                      borderColor={"#CAE0C3"}
                      borderWidth={"1px"}
                      height={"45px"}
                      borderRadius="8px"
                      bg="white"
                      minW={"352px"}
                    >
                      <Heading fontFamily={"Lato"} fontSize={"15px"} fontWeight={"medium"}>{unit}</Heading>
                    </Box>
                  ))}
                </VStack>
              )}
          <HStack mt={"1px"} mb={"1px"}>
                <Text textColor="#479AB1" fontSize={"14px"}>
  {openModule === index ? "Hide Module details" : "Show Module details"} 
</Text>
<Arrow style={{ transform: openModule === index ? "rotate(0deg)" : "rotate(180deg)" }} />

    </HStack>  
    <Divider borderRadius={"0.5px"} borderColor={"#B4D6DF"}/>
              </VStack>

              {/* Units */}
  
            </Box>
          ))}

        </Box>

      </HStack>
    </Box>
  );
}
