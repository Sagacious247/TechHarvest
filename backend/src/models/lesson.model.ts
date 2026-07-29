import mongoose, { Schema, Document } from "mongoose";

export interface ILesson extends Document {
  title: string;
  description?: string;
  video: {
  url: string;
  publicId: string;
};
  notes?: string;
  resources?: {
  name: string;
  url: string;
}[];
  duration: number;
  order: number;
  isPreview: boolean;
  isPublished: boolean;
  module: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
}

const lessonSchema = new Schema(
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
    video: {

    url: {
        type: String,
        default: "",
    },

    publicId: {
        type: String,
        default: "",
    }

},

    notes: {
      type: String,
      default: "",
    },
    resources: {
  type: [
    {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  default: [],
},

    duration: {
      type: Number,
      default: 0,
    },

    createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
},

    order: {
      type: Number,
      required: true,
    },

    isPreview: {
      type: Boolean,
      default: false,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    module: {
      type: Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ILesson>(
  "Lesson",
  lessonSchema
);
