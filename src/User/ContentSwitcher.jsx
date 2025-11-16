import AllCourses from "./AllCourses";
import MyCourses from "./MyCourses.jsx";

import Profile from "./Profile";
import Settings from "./Settings";
<<<<<<< HEAD
import CoursePage from "./ CoursePage.jsx";

export default function ContentSwitcher({
  active,
  isOpen,
  selectedCourse,
  setSelectedCourse,
  setActive,
  previousPage,
  setPreviousPage
}) {

  switch (active) {

    case "CoursePage":
      return (
        <CoursePage
          id={selectedCourse}
          previousPage={previousPage}
          setActive={setActive}
        />
      );

    case "Courses":
      return (
        <AllCourses
          isOpen={isOpen}
          setSelectedCourse={setSelectedCourse}
          setActive={setActive}
          setPreviousPage={setPreviousPage}
        />
      );

    case "MyCourses":
      return (
        <MyCourses
          isOpen={isOpen}
          setSelectedCourse={setSelectedCourse}
          setActive={setActive}
          setPreviousPage={setPreviousPage}
        />
      );
=======

export default function ContentSwitcher({ active }) {
  switch (active) {
    case "AllCourses":
      return <AllCourses />;

    case "MyCourses":
      return <MyCourses />;
>>>>>>> 27a55a12e99e8a5e3919ec5f170c47290b5ff5ff

    case "Profile":
      return <Profile />;

    case "Settings":
      return <Settings />;

    default:
<<<<<<< HEAD
      return (
        <AllCourses
          isOpen={isOpen}
          setSelectedCourse={setSelectedCourse}
          setActive={setActive}
          setPreviousPage={setPreviousPage}
        />
      );
=======
      return <AllCourses />;
>>>>>>> 27a55a12e99e8a5e3919ec5f170c47290b5ff5ff
  }
}
