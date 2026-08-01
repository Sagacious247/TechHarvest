// import { Router } from "express";

// import asyncHandler
// from "../middlewares/asyncHandler";

// import {
//   authenticate,
// } from "../middlewares/authenticate";

// import {
//   authorize,
// } from "../middlewares/authorize";

// import {
//   getModuleDashboardController,
// } from "../controllers/moduleDashboard.controller";

// const router = Router();

// router.get(
//   "/:courseId",
//   authenticate,
//   authorize(
//     "super_admin",
//     "admin"
//   ),

//   asyncHandler(
//     getModuleDashboardController
//   )

// );

// export default router;



import { Router } from "express";

const router = Router();

router.get("/:courseId", (req, res) => {
  res.json({
    success: true,
    message: "NEW MODULE DASHBOARD ROUTE IS RUNNING",
  });
});

export default router;