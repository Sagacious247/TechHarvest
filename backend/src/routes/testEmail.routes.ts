import { Router } from "express";

import { sendTestEmail } from "../controllers/testEmail.controller";

const router = Router();

router.get("/", sendTestEmail);

export default router;