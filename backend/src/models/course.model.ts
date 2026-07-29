import mongoose, { Schema, Document } from "mongoose";

export interface ICourse extends Document {

  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  price: number;

  duration: string;

  level:
    | "Beginner"
    | "Intermediate"
    | "Advanced";

  category: string;

  thumbnail: {
  url: string;
  publicId: string;
};

  trailerVideo?: string;

  learningObjectives: string[];

  requirements: string[];

  targetAudience: string[];

  instructor: mongoose.Types.ObjectId;

  createdBy: mongoose.Types.ObjectId;

  status:
    | "Draft"
    | "Published"
    | "Archived";

  isFeatured: boolean;

  enrollmentCount: number;

  createdAt: Date;

  updatedAt: Date;

}

const courseSchema = new Schema(

{

title:{
type:String,
required:true,
trim:true,
},

slug:{
type:String,
required:true,
unique:true,
trim:true,
},

shortDescription:{
type:String,
required:true,
trim:true,
},

description:{
type:String,
required:true,
},

price:{
type:Number,
required:true,
default:0,
},

duration:{
type:String,
required:true,
},

level:{
type:String,
enum:[
"Beginner",
"Intermediate",
"Advanced",
],
default:"Beginner",
},

category:{
type:String,
required:true,
trim:true,
},

thumbnail: { 
  url: { 
    type: String, 
    default: "", 
  }, 
  publicId: { 
    type: String, 
    default: "", 
  }, 
},

trailerVideo:{
type:String,
default:"",
},

learningObjectives:{
type:[String],
default:[],
},

requirements:{
type:[String],
default:[],
},

targetAudience:{
type:[String],
default:[],
},

createdBy:{
type:Schema.Types.ObjectId,
ref:"Admin",
required:true,
},

instructor:{
type:Schema.Types.ObjectId,
ref:"Admin",
required:true,
},

status:{
type:String,
enum:[
"Draft",
"Published",
"Archived",
],
default:"Draft",
},

isFeatured:{
type:Boolean,
default:false,
},

enrollmentCount:{
type:Number,
default:0,
},

},

{

timestamps:true,

}

);

export default mongoose.model<ICourse>(
  "Course",
  courseSchema
);