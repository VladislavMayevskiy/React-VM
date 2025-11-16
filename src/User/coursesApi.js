import { array} from "./array";

export const getMyCourses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 400);
  });
};
