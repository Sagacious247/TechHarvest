import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEnrollment extends Document {
  student: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  amount: number;
  status: "pending" | "active" | "cancelled";
  enrolledAt?: Date | null;
}

const enrollmentSchema = new Schema<IEnrollment>(
  {

    student: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "active",
        "cancelled",
      ],
      default: "pending",
    },

    enrolledAt: {
      type: Date,
      default: null,
    },

  },
  {
    timestamps: true,
  }
);

/**
 * Prevent duplicate enrollment
 * One student can only enroll in one course once.
 */
enrollmentSchema.index(
  {
    student: 1,
    course: 1,
  },
  {
    unique: true,
  }
);

const Enrollment: Model<IEnrollment> =
  mongoose.model<IEnrollment>(
    "Enrollment",
    enrollmentSchema
  );

export default Enrollment;