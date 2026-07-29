import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

export interface IReceipt extends Document {
  receiptNumber: string;

  student: mongoose.Types.ObjectId;

  course: mongoose.Types.ObjectId;

  enrollment: mongoose.Types.ObjectId;

  amount: number;

  currency: string;

  paymentMethod: string;

  paymentReference: string;

  status: "paid" | "refunded";

  issuedAt: Date;
}

const receiptSchema = new Schema<IReceipt>(
  {
    receiptNumber: {
      type: String,
      required: true,
      unique: true,
    },

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

    enrollment: {
      type: Schema.Types.ObjectId,
      ref: "Enrollment",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "NGN",
    },

    paymentMethod: {
      type: String,
      default: "Paystack",
    },

    paymentReference: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "paid",
        "refunded",
      ],
      default: "paid",
    },

    issuedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Receipt: Model<IReceipt> =
  mongoose.model<IReceipt>(
    "Receipt",
    receiptSchema
  );

export default Receipt;