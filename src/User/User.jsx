import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import ContentSwitcher from "./ContentSwitcher";
import { useState } from "react";

export default function UserPage() {
  const [active, setActive] = useState("Courses");
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Для CoursePage, щоб Sidebar знав яка вкладка активна
  const [previousPage, setPreviousPage] = useState("Courses");

  return (
    <Flex bg="#F5F7F9">
      
      {/* SIDEBAR */}
      <SideBar
        active={active}
        setActive={setActive}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        previousPage={previousPage}
      />

      {/* MAIN CONTENT */}
      <Box
        flex="1"
        ml={isOpen ? "241px" : "96px"}
        p="24px"
        minH="100vh"
        transition="0.3s ease"
      >
        <ContentSwitcher
          active={active}
          setActive={setActive}
          isOpen={isOpen}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          previousPage={previousPage}
          setPreviousPage={setPreviousPage}
        />
      </Box>

    </Flex>
  );
}
