import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  fullName: string;
  email: string;
  phone: string;
  occupation?: string;
  experience?: string;

  paymentStatus: string;
  paymentReference?: string | null;
  amountPaid: number;
  paymentDate?: Date | null;
}

const studentSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    occupation: {
      type: String,
      default: "",
      trim: true,
    },

    experience: {
      type: String,
      default: "",
      trim: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },

    paymentReference: {
      type: String,
      default: null,
    },

    amountPaid: {
      type: Number,
      default: 0,
    },

    paymentDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IStudent>("Student", studentSchema);