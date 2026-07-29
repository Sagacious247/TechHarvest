import mongoose, { Schema, Document } from "mongoose";
import {
  PAYMENT_STATUS,
  PAYMENT_GATEWAY,
} from "../constants/payment";

export interface IPayment extends Document {
  enrollment: mongoose.Types.ObjectId;

  email: string;

  amount: number;

  reference: string;

  status:
  | typeof PAYMENT_STATUS.PENDING
  | typeof PAYMENT_STATUS.PROCESSING
  | typeof PAYMENT_STATUS.SUCCESS
  | typeof PAYMENT_STATUS.FAILED
  | typeof PAYMENT_STATUS.ABANDONED
  | typeof PAYMENT_STATUS.EXPIRED
  | typeof PAYMENT_STATUS.REFUNDED;

  processing: boolean;

  gateway: string;

  paidAt?: Date | null;
}

const paymentSchema = new Schema(
  {
    enrollment: {
      type: Schema.Types.ObjectId,
      ref: "Enrollment",
      required: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    reference: {
      type: String,
      required: true,
      unique: true,
    },

    status: {
  type: String,
  enum: Object.values(PAYMENT_STATUS),
  default: PAYMENT_STATUS.PENDING,
},
    processing: {
  type: Boolean,
  default: false,
},

    gateway: {
      type: String,
      default: PAYMENT_GATEWAY.PAYSTACK,
    },

    paidAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPayment>(
  "Payment",
  paymentSchema
);
