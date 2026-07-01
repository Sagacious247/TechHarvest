import Course from "../models/course.model";

export const createCourse = async (
  data: {
    title: string;
    description: string;
    price: number;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    thumbnail?: string;
  }
) => {

  const course = await Course.create(data);

  return course;
};

export const getAllCourses = async () => {

  return await Course.find().sort({
    createdAt: -1,
  });

};
