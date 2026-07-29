"use client";

import Modal from "@/components/common/Modal";

interface Props {

    open: boolean;

    studentName: string;

    loading: boolean;

    onClose: () => void;

    onConfirm: () => void;

}

export default function DeleteStudentModal({

    open,

    studentName,

    loading,

    onClose,

    onConfirm,

}: Props) {

    return (

        <Modal

            open={open}

            title="Delete Student"

            onClose={onClose}

            width="max-w-lg"

        >

            <div className="space-y-6">

                <p className="text-gray-600">

                    Are you sure you want to permanently delete

                    <strong> {studentName}</strong>?

                </p>

                <p className="text-red-600 text-sm">

                    This action cannot be undone.

                </p>

                <div className="flex justify-end gap-4">

                    <button

                        onClick={onClose}

                        className="border rounded-lg px-5 py-2"

                    >

                        Cancel

                    </button>

                    <button

                        onClick={onConfirm}

                        disabled={loading}

                        className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-5 py-2"

                    >

                        {loading

                            ? "Deleting..."

                            : "Delete Student"}

                    </button>

                </div>

            </div>

        </Modal>

    );

}