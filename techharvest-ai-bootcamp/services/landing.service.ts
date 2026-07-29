import { getCourses, getCourse } from "./course.service";
import { CourseDetails } from "@/types/course";

export const getFeaturedCourse =
  async (): Promise<CourseDetails | null> => {

    const courses = await getCourses();

    const featuredCourse = courses.find(
      (course) => course.isFeatured
    );

    if (!featuredCourse) {
      return null;
    }

    return await getCourse(featuredCourse._id);

  };