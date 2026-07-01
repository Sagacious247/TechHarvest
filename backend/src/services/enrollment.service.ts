import Enrollment from "../models/enrollment.model";

export const createEnrollment = async (
  studentId: string,
  course: string,
  amount: number
) => {
  return await Enrollment.create({
    student: studentId,
    course,
    amount,
    status: "pending",
    paymentStatus: "pending",
  });
};

export const activateEnrollment = async (
  enrollmentId: string
) => {
  return await Enrollment.findByIdAndUpdate(
    enrollmentId,
    {
      status: "active",
      paymentStatus: "paid",
      enrolledAt: new Date(),
    },
    { new: true }
  );
};

export const getEnrollmentByStudent = async (
  studentId: string
) => {
  return await Enrollment.find({
    student: studentId,
  }).populate("student");
};