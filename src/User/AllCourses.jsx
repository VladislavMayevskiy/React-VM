<<<<<<< HEAD
import {
  Box,
  Heading,
  HStack,
  VStack,
  SimpleGrid,
  Text,
  Image,
  Button,
  Progress,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { ReactComponent as Search } from "./image/search.svg";
import { ReactComponent as Sort } from "./image/sort 1.svg";
import { array } from "./array";

export default function AllCourses({ isOpen,setSelectedCourse,setActive,setPreviousPage}) {

  const [search, setSearch] = useState("");

  // Ділимо масив по макету
  const featured = array.slice(0, 3);
  const recommended = array.slice(3, 6);
  const popular = array.slice(0, 3);
  const all = array;

  // 🔥 ФІЛЬТР
  const filtered = all.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const CourseCard = ({ course }) => {
    return (
<VStack
  w={isOpen ? "373px" : "400px"}
  bg="white"
  border="1px solid #B4D6DF"
  borderRadius="20px"
  p="20px"
  spacing="6px"
  align="stretch"
  minH="380px" 
   // ← ключове!
>


  {/* IMAGE */}
  <Image
    src={course.imageUrl}
    w="100%"
    h="132px"
    objectFit="cover"
    borderRadius="12px"
    mb={3}
  />

  {/* BADGE */}
  <Box
    bg="#FCE0B5"
    color="#A94710"
    px="8px"
    py="2px"
    borderRadius="6px"
    w="fit-content"
  >
    <Text fontFamily="Lato" fontWeight="500" fontSize="14px">
      {course.modules} Modules
    </Text>
  </Box>

  {/* TITLE */}
  <Text
    fontFamily="Lato"
    fontWeight="700"
    fontSize="22px"
    noOfLines={2}
  >
    {course.title}
  </Text>

  {/* DESCRIPTION */}
  <Text
    fontFamily="Lato"
    fontSize="16px"
    color="#434645"
    noOfLines={2}
  >
    {course.description}
  </Text>

  {/* BOTTOM BLOCK — ПЗДЦ ЯК У FIGMA */}
  <HStack justify="space-between" mt="auto" pt="8px">
    <HStack>
      <Text fontFamily="Lato" fontSize="14px" color="#434645">
        {course.status === "completed" ? "Completed" : "Not started"}
      </Text>

      {course.status === "completed" && (
        <Box
          w="8px"
          h="8px"
          bg="#76B16B"
          borderRadius="full"
        />
      )}
    </HStack>

    <Button
      w="100px"
      h="44px"
      bg="white"
      border="1px solid #B4D6DF"
      borderRadius="10px"
      fontFamily="Lato"
      fontSize="14px"
      _hover={{bgColor:"white"}}
        onClick={() => {
    setSelectedCourse(course.id);
    setActive("CoursePage");
    setPreviousPage("Courses");
  }}
    >
      {course.status === "completed" ? "View" : "Start"}
    </Button>
  </HStack>

</VStack>


    );
  };

  return (
    <Box width="100%" fontFamily="Lato">

      {/* FEATURED */}
      <Heading fontSize="32px" lineHeight={"150%"} fontFamily={"Lato"} fontWeight={"medium"} mb={4}>
        Featured
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={10}>
        {featured.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </SimpleGrid>

      {/* RECOMMENDED */}
      <Heading fontSize="32px" lineHeight={"150%"} fontFamily={"Lato"} fontWeight={"medium"} mb={4}>
        Recommended
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={10}>
        {recommended.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </SimpleGrid>

      {/* MOST POPULAR */}
      <Heading fontSize="32px" lineHeight={"150%"} fontFamily={"Lato"} fontWeight={"medium"} mb={4}>
        Most popular
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={10}>
        {popular.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </SimpleGrid>


      {/* ALL COURSES */}
      <HStack justify="space-between" align="center" mb={6}>
        <Heading fontSize="32px" lineHeight={"150%"} fontFamily={"Lato"} fontWeight={"medium"}>
          All courses
        </Heading>

        <HStack gap={3}>
          <InputGroup>
            <InputLeftElement>
              <Search />
            </InputLeftElement>

            {/* 🔥 Додаємо керування пошуком */}
            <Input
              placeholder="Search"
              bg="white"
              border="1px solid #C7C7C7"
              w="320px"
              h="40px"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>

          <Button
            bg="white"
            border="1px solid #B4D6DF"
            borderRadius="6px"
            h="40px"
            w="101px"
            leftIcon={<Sort />}
            textColor="#0070C1"
          >
            Filter
          </Button>
        </HStack>
      </HStack>

      {filtered.length === 0 ? (
  <VStack py={20} spacing={4} width="100%">
    <Text fontSize="20px" fontWeight="600" color="#0C0C0C" fontFamily="Lato">
      No courses found
    </Text>

    <Button
      onClick={() => setSearch("")}
      bg="white"
      border="1px solid #B4D6DF"
      borderRadius="6px"
      px={5}
      py={2}
      fontFamily="Lato"
      textColor="#0070C1"
    >
      Clear search
    </Button>
  </VStack>
) : (
  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
    {filtered.map((course) => (
        <CourseCard
      key={course.id}
      course={course}
      setActive={setActive}
      setSelectedCourse={setSelectedCourse}
    />
    ))}
  </SimpleGrid>
)}


    </Box>
  );
}

=======
import {Box} from "@chakra-ui/react"

export default function AllCourses() {
    return (
        <Box>jffmfmf</Box>
    )
}
>>>>>>> 27a55a12e99e8a5e3919ec5f170c47290b5ff5ff
