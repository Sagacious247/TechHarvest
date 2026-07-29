// "use client";

// import StudentTable from "@/components/admin/students/StudentTable";
// import { useStudents } from "@/hooks/useStudents";
// import StudentEditModal from "@/components/admin/students/StudentEditModal";

// import { useState } from "react";
// import StudentDetailsModal from "@/components/admin/students/StudentDetailsModal";
// import { Student } from "@/types/student";
// import { updateStudent } from "@/services/adminStudent.service";
// import { deleteStudent } from "@/services/adminStudent.service";
// import DeleteStudentModal from "@/components/admin/students/DeleteStudentModal";

// export default function StudentsPage() {
//     const [selectedStudent, setSelectedStudent] =
//      useState<Student | null>(null);

//     const [openProfile, setOpenProfile] =
//      useState(false);

//     const [editingStudent, setEditingStudent] =
//      useState<Student | null>(null);

//     const [editOpen, setEditOpen] =
//      useState(false);

//      const [deleteOpen, setDeleteOpen] =
//   useState(false);

// const [deletingStudent, setDeletingStudent] =
//   useState<Student | null>(null);

// const [deleting, setDeleting] =
//   useState(false);

//   const {
//     students,
//     pagination,
//     loading,
//     error,
//     search,
//     setSearch,
//     page,
//     setPage,
//     fetchStudents
//   } = useStudents();

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return (
//       <div className="text-red-600">
//         {error}
//       </div>
//     );
//   }

//   return (

//     <div className="space-y-6">

//       <div className="flex justify-between items-center">

//         <div>

//           <h1 className="text-3xl font-bold">

//             Students

//           </h1>

//           <p className="text-gray-500">

//             Manage registered students.

//           </p>

//         </div>

//       </div>

//       <input

//         placeholder="Search student..."

//         value={search}

//         onChange={(e)=>
//           setSearch(e.target.value)
//         }

//         className="border rounded-lg px-4 py-3 w-full max-w-md"

//       />

//       <StudentTable
//     students={students}

//     onView={(student) => {
//         setSelectedStudent(student);
//         setOpenProfile(true);
//     }}

//     onEdit={(student) => {
//         setEditingStudent(student);
//         setEditOpen(true);
//     }}

//     onDelete={(student)=>{
//         setDeletingStudent(student);
//         setDeleteOpen(true);
//     }}
// />

//       {pagination && (

//         <div className="flex justify-between items-center">

//           <button

//             disabled={!pagination.hasPrevious}

//             onClick={() =>
//               setPage(page - 1)
//             }

//             className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"

//           >

//             Previous

//           </button>

//           <p>

//             Page {pagination.page} of {pagination.totalPages}

//           </p>

//           <button

//             disabled={!pagination.hasNext}

//             onClick={() =>
//               setPage(page + 1)
//             }

//             className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"

//           >

//             Next

//           </button>

//         </div>

//       )}

// <StudentDetailsModal
//     student={selectedStudent}
//     open={openProfile}
//     onClose={() => {

//         setOpenProfile(false);

//         setSelectedStudent(null);

//     }}
// />

// {editingStudent && (

// <StudentEditModal
//     open={editOpen}

//     student={editingStudent}

//     onClose={() => {

//         setEditOpen(false);

//         setEditingStudent(null);

//     }}

//     onSave={async (student) => {

//         await updateStudent(
//             student._id,
//             student
//         );
//         alert("Student updated successfully.");

//         setEditOpen(false);

//         setEditingStudent(null);

//         await fetchStudents();

//     }}
// />

// )}

// {deletingStudent && (

// <DeleteStudentModal

//     open={deleteOpen}

//     studentName={deletingStudent.fullName}

//     loading={deleting}

//     onClose={() => {

//         setDeleteOpen(false);

//         setDeletingStudent(null);

//     }}

//     onConfirm={async () => {

//         try {

//             setDeleting(true);

//             await deleteStudent(

//                 deletingStudent._id

//             );

//             await fetchStudents();

//             setDeleteOpen(false);

//             setDeletingStudent(null);

//             alert("Student deleted successfully.");

//         } finally {

//             setDeleting(false);

//         }

//     }}

// />

// )}

//     </div>

//   );

// }



"use client";

import { useState } from "react";

import StudentTable from "@/components/admin/students/StudentTable";
import StudentEditModal from "@/components/admin/students/StudentEditModal";
import StudentDetailsModal from "@/components/admin/students/StudentDetailsModal";
import DeleteStudentModal from "@/components/admin/students/DeleteStudentModal";

import { useStudents } from "@/hooks/useStudents";

import { Student } from "@/types/student";

import {
  updateStudent,
  deleteStudent,
} from "@/services/adminStudent.service";

export default function StudentsPage() {
  const [selectedStudent, setSelectedStudent] =
    useState<Student | null>(null);

  const [editingStudent, setEditingStudent] =
    useState<Student | null>(null);

  const [deletingStudent, setDeletingStudent] =
    useState<Student | null>(null);

  const [openProfile, setOpenProfile] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [deleting, setDeleting] =
    useState(false);

  const {
    students,
    pagination,
    loading,
    error,
    search,
    setSearch,
    page,
    setPage,
    fetchStudents,
  } = useStudents();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        Loading students...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Students
          </h1>

          <p className="text-gray-500">
            Manage registered students.
          </p>
        </div>

      </div>

      {/* Search */}

      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search students..."
        className="
          w-full
          md:max-w-md
          rounded-xl
          border
          px-4
          py-3
        "
      />

      {/* Table */}

      <div className="w-full overflow-x-auto rounded-xl border bg-white">

        <StudentTable
          students={students}
          onView={(student) => {
            setSelectedStudent(student);
            setOpenProfile(true);
          }}
          onEdit={(student) => {
            setEditingStudent(student);
            setEditOpen(true);
          }}
          onDelete={(student) => {
            setDeletingStudent(student);
            setDeleteOpen(true);
          }}
        />

      </div>

      {/* Pagination */}

      {pagination && (

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <button
            disabled={!pagination.hasPrevious}
            onClick={() => setPage(page - 1)}
            className="rounded-lg bg-gray-200 px-5 py-2 disabled:opacity-50"
          >
            Previous
          </button>

          <p className="font-semibold text-center">
            Page {pagination.page} of {pagination.totalPages}
          </p>

          <button
            disabled={!pagination.hasNext}
            onClick={() => setPage(page + 1)}
            className="rounded-lg bg-gray-200 px-5 py-2 disabled:opacity-50"
          >
            Next
          </button>

        </div>

      )}

      {/* Profile */}

      <StudentDetailsModal
        student={selectedStudent}
        open={openProfile}
        onClose={() => {
          setOpenProfile(false);
          setSelectedStudent(null);
        }}
      />

      {/* Edit */}

      {editingStudent && (

        <StudentEditModal
          open={editOpen}
          student={editingStudent}
          onClose={() => {
            setEditOpen(false);
            setEditingStudent(null);
          }}
          onSave={async (student) => {

            await updateStudent(
              student._id,
              student
            );

            await fetchStudents();

            setEditOpen(false);

            setEditingStudent(null);

          }}
        />

      )}

      {/* Delete */}

      {deletingStudent && (

        <DeleteStudentModal
          open={deleteOpen}
          studentName={deletingStudent.fullName}
          loading={deleting}
          onClose={() => {
            setDeleteOpen(false);
            setDeletingStudent(null);
          }}
          onConfirm={async () => {

            try {

              setDeleting(true);

              await deleteStudent(
                deletingStudent._id
              );

              await fetchStudents();

              setDeleteOpen(false);

              setDeletingStudent(null);

            } finally {

              setDeleting(false);

            }

          }}
        />

      )}

    </div>
  );
}