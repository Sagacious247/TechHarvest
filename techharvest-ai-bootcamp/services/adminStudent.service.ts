import api from "./adminAuth.service";
import { Student } from "@/types/student";
import { StudentsResponse } from "@/types/student";

interface StudentQuery {

  page?: number;

  limit?: number;

  search?: string;

  status?: string;

  paymentStatus?: string;

}

export const getStudents = async (
  query: StudentQuery = {}
): Promise<StudentsResponse> => {

  const response = await api.get(
    "/admin/students",
    {
      params: query,
    }
  );

  return response.data;

};

export const updateStudent = async (
  id: string,
  student: Partial<Student>
) => {

  const response = await api.patch(

    `/admin/students/${id}`,

    student

  );

  return response.data.data;

};

export const deleteStudent = async (
    id: string
) => {

    await api.delete(

        `/admin/students/${id}`

    );

};