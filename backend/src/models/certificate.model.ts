import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface ICertificate
  extends Document {

  student:
    mongoose.Types.ObjectId;

  course:
    mongoose.Types.ObjectId;

  certificateNumber: string;

  issuedAt: Date;

  pdfUrl?: string;

  verificationCode: string;

}

const certificateSchema =
  new Schema<ICertificate>(
    {

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

      certificateNumber: {

        type: String,

        unique: true,

        required: true,

      },

      verificationCode: {

        type: String,

        unique: true,

        required: true,

      },

      issuedAt: {

        type: Date,

        default: Date.now,

      },

      pdfUrl: {

        type: String,

        default: null,

      },

    },

    {

      timestamps: true,

    }

  );

export default mongoose.model<ICertificate>(
  "Certificate",
  certificateSchema
);