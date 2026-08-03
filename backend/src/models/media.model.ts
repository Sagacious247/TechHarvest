import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface IMedia extends Document {
  name: string;
  url: string;
  publicId: string;

  type:
    | "video"
    | "image"
    | "pdf"
    | "audio"
    | "document";

  format: string;

  size: number;

  duration?: number;

  width?: number;

  height?: number;

  thumbnail?: string;

  folder: string;

  uploadedBy: mongoose.Types.ObjectId;

  createdAt: Date;

  updatedAt: Date;
}

const mediaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    url: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
      unique: true,
    },

    type: {
      type: String,
      enum: [
        "video",
        "image",
        "pdf",
        "audio",
        "document",
      ],
      required: true,
    },

    format: {
      type: String,
      default: "",
    },

    size: {
      type: Number,
      default: 0,
    },

    duration: {
      type: Number,
      default: 0,
    },

    width: Number,

    height: Number,

    thumbnail: {
      type: String,
      default: "",
    },

    folder: {
      type: String,
      default: "",
    },

    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMedia>(
  "Media",
  mediaSchema
);