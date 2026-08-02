import { Router } from "express";

import studentRoutes from "./student.routes";
import studentAuthRoutes from "./studentAuth.routes";
import dashboardRoutes from "./dashboard.routes";
import paymentRoutes from "./payment.routes";
import authRoutes from "./auth.routes";
import courseRoutes from "./course.routes";
import moduleRoutes from "./module.routes";
import lessonRoutes from "./lesson.routes";
import progressRoutes from "./progress.routes";
import resumeRoutes from "./resume.routes";
import myCoursesRoutes from "./myCourses.routes";
import certificateRoutes from "./certificate.routes";
import enrollmentRoutes from "./enrollment.routes";
import learningRoutes from "./learning.routes";
import notificationRoutes
from "./notification.routes";
import receiptRoutes from "./receipt.routes";
import paymentHistoryRoutes
from "./paymentHistory.routes";
import adminDashboardRoutes from "./adminDashboard.routes";
import adminStudentRoutes from "./adminStudent.routes";
import adminCourseRoutes from "./adminCourse.routes";
import adminMediaRoutes
from "./adminMedia.routes";

import uploadSignatureRoutes
from "./uploadSignature.routes";

import moduleDashboardRoutes
from "./moduleDashboard.routes";
import adminCurriculumRoutes from "./adminCurriculum.routes";
import uploadRoutes from "./upload.routes";
import adminPaymentRoutes from "./adminPayment.routes"
import adminPaymentHistoryRoutes
from "./adminPaymentHistory.routes";
import analyticsRoutes from "./analytics.routes";
import settingRoutes from "./setting.routes";

import landingSettingsRoutes from "./landingSettings.routes";

import testEmailRoutes from "./testEmail.routes";

const router = Router();

router.use("/students", studentRoutes);

router.use(
  "/student-auth",
  studentAuthRoutes
);

router.use(
  "/student/dashboard",
  dashboardRoutes
);

router.use(
  "/student/my-courses",
  myCoursesRoutes
);

router.use("/payments", paymentRoutes);

router.use("/auth", authRoutes);

router.use("/courses", courseRoutes);

router.use("/learning", learningRoutes);

router.use("/modules", moduleRoutes);

router.use("/lessons", lessonRoutes);

router.use(
  "/enrollments",
  enrollmentRoutes
);
router.use("/progress", progressRoutes);

router.use("/resume", resumeRoutes);

router.use(
  "/certificates",
  certificateRoutes
);

router.use(
  "/notifications",
  notificationRoutes
);

router.use(
  "/receipts",
  receiptRoutes
);

router.use(
  "/payment-history",
  paymentHistoryRoutes
);


// Admin Section
router.use(
  "/admin/dashboard",
  adminDashboardRoutes
);

router.use(
  "/admin/students",
  adminStudentRoutes
);

router.use(
  "/admin/courses",
  adminCourseRoutes
);

router.use(
"/admin/media",
adminMediaRoutes
);

router.use(
  "/admin/module-dashboard",
  moduleDashboardRoutes
);

router.use(
  "/admin/curriculum",
  adminCurriculumRoutes
);

router.use(
    "/admin/payment-h",
    adminPaymentRoutes
);

router.use(
  "/admin/payment-history",
  adminPaymentHistoryRoutes
);

router.use(
  "/admin/analytics",
  analyticsRoutes
);

router.use(
  "/admin/settings",
  settingRoutes
);

router.use(
  "/landing-settings",
  landingSettingsRoutes
);

router.use(
  "/upload",
  uploadSignatureRoutes
);

router.use("/test-email", testEmailRoutes);

router.use("/upload", uploadRoutes);

export default router;
