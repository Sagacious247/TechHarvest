import { Router } from "express";

import {

authenticate,

} from "../middlewares/authenticate";

import {

authorize,

} from "../middlewares/authorize";

import upload from "../middlewares/upload";

import {

uploadImageController,

} from "../controllers/adminMedia.controller";

const router = Router();

router.use(

authenticate,

authorize(

"super_admin",

"admin"

)

);

router.post(

"/upload",

upload.single("image"),

uploadImageController

);

export default router;