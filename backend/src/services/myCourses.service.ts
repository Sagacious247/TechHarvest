import Enrollment from "../models/enrollment.model";
import Lesson from "../models/lesson.model";
import Module from "../models/module.model";
import Progress from "../models/progress.model";

export const getMyCourses = async (
  studentId: string
) => {

  const enrollments = await Enrollment.find({
    student: studentId,
    status: "active",
  }).populate("course");

  const results = [];

  for (const enrollment of enrollments) {

    const course: any = enrollment.course;

    const modules = await Module.find({
      course: course._id,
    });

    const moduleIds = modules.map(
      (module) => module._id
    );

    const lessons = await Lesson.find({
      module: {
        $in: moduleIds,
      },
    });

    const lessonIds = lessons.map(
      (lesson) => lesson._id
    );

    const completedLessons =
      await Progress.countDocuments({
        student: studentId,
        lesson: {
          $in: lessonIds,
        },
        completed: true,
      });

    const totalLessons =
      lessons.length;

    const progress =
      totalLessons === 0
        ? 0
        : Math.round(
            (completedLessons /
              totalLessons) *
              100
          );

    results.push({

      course,

      progress,

      completedLessons,

      totalLessons,

      certificateEligible:
        progress === 100,

    });

  }

  return results;

};