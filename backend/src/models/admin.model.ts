import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

export interface IAdmin extends Document {
  fullName: string;

  email: string;

  password: string;

  role: "super_admin" | "admin";

  status: "active" | "inactive" | "suspended";

  lastLogin?: Date | null;
}

const adminSchema = new Schema<IAdmin>(
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

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: [
        "super_admin",
        "admin",
      ],
      default: "admin",
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

const Admin: Model<IAdmin> =
  mongoose.model<IAdmin>(
    "Admin",
    adminSchema
  );

export default Admin;