// import api from "@/lib/api";
import api from "@/lib/studentApi";

export interface Enrollment {

  _id: string;

  student: string;

  course: string;

  amount: number;

  status: string;

}

export const createEnrollment = async (
  courseId: string
): Promise<Enrollment> => {

  const response = await api.post(
    "/enrollments",
    {
      courseId,
    }
  );

  return response.data.data;

};

export const getMyEnrollments = async () => {

  const response = await api.get(
    "/enrollments/me"
  );

  return response.data.data;

};