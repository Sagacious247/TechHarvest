import { Request, Response, NextFunction } from "express";

import { getCourseContent } from "../services/courseContent.service";
import { getParam } from "../utils/getParam";

export const getCourseContentController = async (

  req: Request,

  res: Response,

  next: NextFunction

) => {

  const courseId = getParam(

    req.params.courseId,

    "Course ID"

  );

  const data = await getCourseContent(

    courseId

  );

  res.status(200).json({

    success: true,

    data,

  });

};