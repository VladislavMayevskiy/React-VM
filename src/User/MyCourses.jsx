import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Heading,
  Tabs,
  TabList,
  Tab,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  SimpleGrid,
  Image,
  Text,
  Progress,
  Flex,
  Spinner,
  Center,
  useColorModeValue,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { getMyCourses } from "./coursesApi.js";
import { ReactComponent as Search } from "./image/search.svg";
import { ReactComponent as Sort } from "./image/sort 1.svg";

const TABS = [
  { key: "all", label: "All courses" },
  { key: "in_progress", label: "In progress" },
  { key: "not_started", label: "Not started" },
  { key: "completed", label: "Completed" },
];

export default function MyCourses({ isOpen, setSelectedCourse, setActive, setPreviousPage }) {
  const [courses, setCourses] = useState([]);
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cardBg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMyCourses();
        setCourses(data);
      } catch (e) {
        setError("Не вдалося завантажити курси");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filteredCourses = useMemo(() => {
    let list = [...courses];

    if (tab !== "all") list = list.filter((c) => c.status === tab);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((c) => c.title.toLowerCase().includes(q));
    }

    return list;
  }, [courses, tab, search]);

  if (loading)
    return (
      <Center py={16}>
        <Spinner size="lg" />
      </Center>
    );

  if (error)
    return (
      <Center py={16}>
        <Text>{error}</Text>
      </Center>
    );

  return (
    <Box width="100%">
      <Heading fontFamily="Lato" fontSize="32px" mb={4}>
        My courses
      </Heading>

      {/* Filters row */}
      <HStack mb={5} justify="space-between" flexWrap="wrap" gap={4}>
        {/* Tabs */}
        <HStack>
          <Tabs variant="unstyled" onChange={(index) => setTab(TABS[index].key)}>
            <TabList gap={3}>
              {TABS.map((item) => (
                <Tab
                  key={item.key}
                  px="28px"
                  py="10px"
                  borderRadius="32px"
                  fontFamily="Lato"
                  fontSize="16px"
                  fontWeight="500"
                  border="1px solid #E7EDF5"
                  color="#0C0C0C"
                  bg="white"
                  width="140px"
                  height="48px"
                  _selected={{
                    bg: "#C6E3EE",
                    borderColor: "#C6E3EE",
                    color: "#0C0C0C",
                  }}
                  _hover={{ bg: "#EAF4F8" }}
                >
                  {item.label}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </HStack>

        {/* Search + Sort */}
        <HStack gap={3}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search />
            </InputLeftElement>
            <Input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              bg="white"
              borderColor="#C7C7C7"
              width="320px"
              height="40px"
              fontFamily="Lato"
            />
          </InputGroup>

          <Button
            borderRadius="6px"
            leftIcon={<Sort />}
            borderColor="#B4D6DF"
            textColor="#0070C1"
            bg="white"
            width="101px"
            height="40px"
            fontSize="16px"
          >
            Filter
          </Button>
        </HStack>
      </HStack>

      {/* COURSES LIST */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {filteredCourses.map((course) => (
          <HStack
            key={course.id}
            bg={cardBg}
            borderRadius="20px"
            border="1px solid #B4D6DF"
            w={isOpen ? "566px" : "638px"}
            h="268px"
            p="24px"
            spacing={6}
            align="flex-start"
          >
            {/* IMAGE */}
            <Image
              src={course.imageUrl}
              alt={course.title}
              w="220px"
              h="220px"
              borderRadius="12px"
              objectFit="cover"
            />

            {/* RIGHT SIDE */}
            <VStack align="stretch" spacing={3} h="full" justify="space-between">
              {/* BADGE */}
              <HStack>
                <Box
                  bg="#FCE0B5"
                  color="#A94710"
                  px="7px"
                  py="2px"
                  borderRadius="6px"
                  width="81px"
                  height="25px"
                >
                  <HStack spacing="5px">
                    <Text fontFamily="Lato" fontSize="14px">
                      {course.modules}
                    </Text>
                    <Text fontFamily="Lato" fontSize="14px">
                      Modules
                    </Text>
                  </HStack>
                </Box>
              </HStack>

              {/* TITLE */}
              <Text
                fontFamily="Lato"
                fontSize="22px"
                fontWeight="bold"
                noOfLines={2}
                maxW="300px"
              >
                {course.title}
              </Text>

              {/* PROGRESS */}
              <VStack align="stretch" spacing={2} w="100%">
                <HStack>
                  <Text fontFamily="Lato" color="#434645">
                    Progress:
                  </Text>
                  <Text fontFamily="Lato" fontWeight="600">
                    {course.progress}%
                  </Text>
                </HStack>

                <Progress
                  value={course.progress}
                  size="sm"
                  borderRadius="full"
                  bg="#E8F0FB"
                  sx={{ "> div": { background: "#76B16B" } }}
                />
              </VStack>

              {/* BUTTON */}
              <Button
                bg="white"
                borderColor="#B4D6DF"
                borderWidth="1px"
                textColor="#0C0C0C"
                width="100px"
                height="44px"
                borderRadius="10px"
                onClick={() => {
                  setSelectedCourse(course.id);
                  setPreviousPage("MyCourses");
                  setActive("CoursePage");
                }}
              >
                Continue
              </Button>
            </VStack>
          </HStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
