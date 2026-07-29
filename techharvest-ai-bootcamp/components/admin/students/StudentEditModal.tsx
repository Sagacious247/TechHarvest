"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/common/Modal";
import StudentForm from "./StudentForm";

import { Student } from "@/types/student";

interface Props {
  open: boolean;
  student: Student;
  onClose: () => void;
  onSave: (student: Student) => Promise<void>;
}

export default function StudentEditModal({
  open,
  student,
  onClose,
  onSave,
}: Props) {

  const [form, setForm] =
    useState<Student>(student);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    setForm(student);

  }, [student]);

  async function handleSubmit() {

    try {

      setLoading(true);

      await onSave(form);

      onClose();

    } finally {

      setLoading(false);

    }

  }

  return (

    <Modal
      open={open}
      title="Edit Student"
      onClose={onClose}
      width="max-w-4xl"
    >

      <StudentForm
        student={form}
        onChange={setForm}
      />

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={onClose}
          className="px-6 py-3 border rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>

      </div>

    </Modal>

  );

}