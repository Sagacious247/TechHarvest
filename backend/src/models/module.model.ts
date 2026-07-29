import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

export interface IModule extends Document {

  title: string;

  description: string;

  order: number;

  course: mongoose.Types.ObjectId;

  isPublished: boolean;
  createdBy: mongoose.Types.ObjectId;
}

const moduleSchema = new Schema<IModule>(
  {

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    order: {
      type: Number,
      required: true,
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    createdBy: {
  type: Schema.Types.ObjectId,
  ref: "Admin",
  required: true,
},

    isPublished: {
      type: Boolean,
      default: false,
    },

  },

  {
    timestamps: true,
  }

);

const Module: Model<IModule> =
  mongoose.model<IModule>(
    "Module",
    moduleSchema
  );

export default Module;
