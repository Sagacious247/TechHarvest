import { Request, Response } from "express";

import {
  createLesson,
  getLessonsByModule,
} from "../services/lesson.service";

import {
  getLessonById,
  updateLesson,
  deleteLesson,
  publishLesson,
} from "../services/lesson.service";
import { getParam } from "../utils/getParam";

// export const createLessonController = async (
//   req: Request,
//   res: Response
// ) => {

//   const lesson = await createLesson(req.body);

//   res.status(201).json({
//     success: true,
//     message: "Lesson created successfully.",
//     data: lesson,
//   });

// };

export const createLessonController = async (
  req: Request,
  res: Response
) => {

  const lesson = await createLesson(
    req.body,
    req.user!.id
  );

  res.status(201).json({
    success: true,
    message: "Lesson created successfully.",
    data: lesson,
  });

};


export const getLessonsController = async (
  req: Request,
  res: Response
) => {

  const moduleId = req.params.moduleId as string;

  const lessons = await getLessonsByModule(moduleId);

  res.json({
    success: true,
    data: lessons,
  });

};

export const getLessonController = async (
  req: Request,
  res: Response
) => {

  const lesson =
    await getLessonById(
      req.params.lessonId as string
    );

  res.json({

    success: true,

    data: lesson,

  });

};

// export const updateLessonController = async (
//   req: Request,
//   res: Response
// ) => {

//   const lesson =
//     await updateLesson(
//       req.params.lessonId as string,
//       req.body
//     );

//   res.json({

//     success: true,

//     message:
//       "Lesson updated successfully.",

//     data: lesson,

//   });

// };

export const updateLessonController = async (
  req: Request,
  res: Response
) => {

  const lessonId = getParam(
    req.params.lessonId,
    "Lesson ID"
  );

  const lesson = await updateLesson(
    lessonId,
    req.body,
    req.user!.id,
    req.user!.role
  );

  res.json({

    success: true,

    message:
      "Lesson updated successfully.",

    data: lesson,

  });

};

// export const deleteLessonController = async (
//   req: Request,
//   res: Response
// ) => {

//   const result =
//     await deleteLesson(
//       req.params.lessonId as string
//     );

//   res.json({

//     success: true,

//     ...result,

//   });

// };

export const deleteLessonController = async (
  req: Request,
  res: Response
) => {

  const lessonId = getParam(
    req.params.lessonId,
    "Lesson ID"
  );

  const result = await deleteLesson(
    lessonId,
    req.user!.id,
    req.user!.role
  );

  res.json({

    success: true,

    ...result,

  });

};

// export const publishLessonController = async (
//   req: Request,
//   res: Response
// ) => {

//   const lesson =
//     await publishLesson(
//       req.params.lessonId as string
//     );

//   res.json({

//     success: true,

//     message:
//       lesson.isPublished
//         ? "Lesson published successfully."
//         : "Lesson unpublished successfully.",

//     data: lesson,

//   });

// };

export const publishLessonController = async (
  req: Request,
  res: Response
) => {

  const lessonId = getParam(
    req.params.lessonId,
    "Lesson ID"
  );

  const lesson = await publishLesson(
    lessonId,
    req.user!.id,
    req.user!.role
  );

  res.json({

    success: true,

    message:
      lesson.isPublished
        ? "Lesson published successfully."
        : "Lesson unpublished successfully.",

    data: lesson,

  });

};


