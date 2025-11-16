import {
  Box,
  Button,
  VStack,
  HStack,
  Heading,
  Divider,
  Text,
  Image,
} from "@chakra-ui/react";

import { ReactComponent as Arrow } from "./image/chevron down.svg";
import { ReactComponent as CoursesIcon } from "./image/heroicons-outline/academic-cap.svg";
import { ReactComponent as MyCoursesIcon } from "./image/heroicons-outline/book-open.svg";
import { ReactComponent as ProfileIcon } from "./image/heroicons-outline/user.svg";
import { ReactComponent as SettingsIcon } from "./image/heroicons-outline/cog-6-tooth.svg";
import { ReactComponent as LogOut } from "./image/heroicons-outline/arrow-left-start-on-rectangle.svg";

export default function SideBar({
  active,
  previousPage,
  setActive,
  isOpen,
  setIsOpen,
}) {
  // Якщо ми на CoursePage → активна вкладка = previousPage
  const current = active === "CoursePage" ? previousPage : active;

  const baseButtonStyle = {
    width: isOpen ? "205px" : "48px",
    height: "44px",
    justifyContent: isOpen ? "flex-start" : "center",
    px: isOpen ? "12px" : 0,
    iconSpacing: isOpen ? 3 : 0,
    fontFamily: "Lato",
    borderRadius: "10px",
    sx: {
      "&:hover": { bgColor: "#F5F7F9" },
    },
  };

  const activeStyle = {
    bg: "#DDECF7",
    border: "1px solid #0070C1",
    color: "#0070C1",
    borderRadius: "10px",
    _hover: { bgColor: "#DDECF7" },

    sx: {
      svg: {
        color: "#0070C1",
        fill: "#0070C1 !important",
      },
      "svg path": {
        stroke: "#0070C1 !important",
        fill: "#0070C1 !important",
      },
    },
  };

  const getButtonProps = (id) => ({
    ...baseButtonStyle,
    _hover: { bgColor: current === id ? "#DDECF7" : "white" },
    ...(current === id ? activeStyle : {}),
  });

  return (
    <Box
      bg="white"
      p="24px"
      h="100vh"
      transition="0.25s"
      width={isOpen ? "241px" : "96px"}
      overflow="hidden"
      borderRight="1px"
      borderColor="#B4D6DF"
      position="fixed"
    >
      <VStack align="stretch" spacing={4}>

        {/* HEADER */}
        <HStack justify={isOpen ? "space-between" : "center"}>
          <Heading size="lg">LMS</Heading>

          <Button
            position="absolute"
            top="24px"
            right="-1px"
            variant="ghost"
            p={0}
            onClick={() => setIsOpen(!isOpen)}
            transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"}
            transition="0.25s"
            width="24px"
            h="42px"
            borderColor="#B4D6DF"
            borderWidth="1px"
            bg="white"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Arrow />
          </Button>
        </HStack>

        <Divider
          width={isOpen ? "180%" : "380%"}
          ml={isOpen ? "-100px" : "-25px"}
          borderColor="#B4D6DF"
        />

        {/* MENU */}
        <VStack spacing={2} align="stretch">
          <Button
            variant="ghost"
            leftIcon={<CoursesIcon />}
            onClick={() => setActive("Courses")}
            {...getButtonProps("Courses")}
          >
            {isOpen && "Courses"}
          </Button>

          <Button
            variant="ghost"
            leftIcon={<MyCoursesIcon />}
            onClick={() => setActive("MyCourses")}
            {...getButtonProps("MyCourses")}
          >
            {isOpen && "My courses"}
          </Button>

          <Button
            variant="ghost"
            leftIcon={<ProfileIcon />}
            onClick={() => setActive("Profile")}
            {...getButtonProps("Profile")}
          >
            {isOpen && "Profile"}
          </Button>

          <Button
            variant="ghost"
            leftIcon={<SettingsIcon />}
            onClick={() => setActive("Settings")}
            {...getButtonProps("Settings")}
          >
            {isOpen && "Settings"}
          </Button>
        </VStack>

        {/* FOOTER */}
        <VStack mt="600px" spacing={3}>
          <HStack align="center">
            <Image width="32px" height="32px" />
            {isOpen && <Text>expfffjfjfjfj</Text>}
          </HStack>

          <Button
            variant="ghost"
            leftIcon={<LogOut />}
            {...getButtonProps("Logout")}
          >
            {isOpen && "Log Out"}
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
