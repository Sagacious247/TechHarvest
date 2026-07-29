import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

import bcrypt from "bcrypt";

export interface IStudent extends Document {
  fullName: string;

  email: string;

  password: string;

  phone: string;

  occupation?: string;

  experience?: string;

  emailsSent: boolean;

  status: "active" | "inactive" | "suspended";

  lastLogin?: Date | null;

  comparePassword(
    password: string
  ): Promise<boolean>;
}

const studentSchema = new Schema<IStudent>(
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

     emailsSent: {
  type: Boolean,
  default: false,
},

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
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

    status: {
      type: String,
      enum: [
        "active",
        "inactive",
        "suspended",
      ],
      default: "active",
    },

    lastLogin: {
      type: Date,
      default: null,
    },
  },

  {
    timestamps: true,
  }
);

/**
 * Hash password before saving
 */
studentSchema.pre(
  "save",
  async function () {
    if (!this.isModified("password")) {
      return;
    }

    this.password = await bcrypt.hash(
      this.password,
      10
    );
  }
);

/**
 * Compare Password
 */
studentSchema.methods.comparePassword =
  async function (
    password: string
  ) {
    return bcrypt.compare(
      password,
      this.password
    );
  };

const Student: Model<IStudent> =
  mongoose.model<IStudent>(
    "Student",
    studentSchema
  );

export default Student;