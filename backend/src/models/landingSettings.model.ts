import mongoose, { Schema, Document } from "mongoose";

export interface ILandingSettings extends Document {
  previewVideo: {
    url: string;
    publicId: string;
    thumbnail: string;
    duration: number;
  };
}

const LandingSettingsSchema = new Schema<ILandingSettings>(
  {
    previewVideo: {
      url: {
        type: String,
        default: "",
      },

      publicId: {
        type: String,
        default: "",
      },

      thumbnail: {
        type: String,
        default: "",
      },

      duration: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ILandingSettings>(
  "LandingSettings",
  LandingSettingsSchema
);