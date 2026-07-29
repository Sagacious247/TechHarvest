import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

export interface INotification
  extends Document {

  student: mongoose.Types.ObjectId;

  title: string;

  message: string;

  type:
    | "welcome"
    | "payment"
    | "certificate"
    | "lesson"
    | "announcement";

  read: boolean;

}

const notificationSchema =
new Schema<INotification>(

  {

    student: {

      type: Schema.Types.ObjectId,

      ref: "Student",

      required: true,

    },

    title: {

      type: String,

      required: true,

    },

    message: {

      type: String,

      required: true,

    },

    type: {

      type: String,

      enum: [

        "welcome",

        "payment",

        "certificate",

        "lesson",

        "announcement",

      ],

      required: true,

    },

    read: {

      type: Boolean,

      default: false,

    },

  },

  {

    timestamps: true,

  }

);

const Notification: Model<INotification> =
mongoose.model<INotification>(

  "Notification",

  notificationSchema

);

export default Notification;