import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

export interface IProgress extends Document {

  student: mongoose.Types.ObjectId;

  lesson: mongoose.Types.ObjectId;

  completed: boolean;

  completedAt: Date | null;

  currentTime: number;

  duration: number;

  percentage: number;

  lastWatched: Date | null;

}

const progressSchema =
  new Schema<IProgress>(
    {

      student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },

      lesson: {
        type: Schema.Types.ObjectId,
        ref: "Lesson",
        required: true,
      },

      completed: {
        type: Boolean,
        default: false,
      },

      completedAt: {
        type: Date,
        default: null,
      },

      currentTime: {
        type: Number,
        default: 0,
      },

      duration: {
        type: Number,
        default: 0,
      },

      percentage: {
        type: Number,
        default: 0,
      },

      lastWatched: {
        type: Date,
        default: null,
      },

    },

    {
      timestamps: true,
    }

  );

progressSchema.index(

  {

    student: 1,

    lesson: 1,

  },

  {

    unique: true,

  }

);

const Progress: Model<IProgress> =

  mongoose.model<IProgress>(

    "Progress",

    progressSchema

  );

export default Progress;