
import { Request, Response } from "express";

import {
  createModule,
  getModulesByCourse,
  getModuleById, 
  updateModule, 
  deleteModule,
  reorderModules,
} from "../services/module.service";
import { getParam } from "../utils/getParam";

export const createModuleController = async (
  req: Request,
  res: Response
) => {

  // const module = await createModule(req.body);
  const module = await createModule(
  req.body,
  req.user!.id
);

  res.status(201).json({
    success: true,
    message: "Module created successfully.",
    data: module,
  });

};

export const getModulesController = async (
  req: Request,
  res: Response
) => {

  const courseId = req.params.courseId as string;

  const modules = await getModulesByCourse(courseId);

  res.json({
    success: true,
    data: modules,
  });

};

/**
 * Get Single Module
 */
export const getModuleController = async (
  req: Request,
  res: Response
) => {

  const module = await getModuleById(
    req.params.id as string
  );

  res.json({

    success: true,

    data: module,

  });

};

/**
 * Update Module
 */
export const updateModuleController = async (
  req: Request,
  res: Response
) => {

  const moduleId = getParam(
    req.params.id,
    "Module ID"
);

  const module = await updateModule(
    moduleId,
    req.body,
    req.user!.id,
    req.user!.role
);

  res.json({

    success: true,

    message: "Module updated successfully.",

    data: module,

  });

};

/**
 * Delete Module
 */
export const deleteModuleController = async (
  req: Request,
  res: Response
) => {

  // const result = await deleteModule(
  //   req.params.id as string
  // );

  const moduleId = getParam(
    req.params.id,
    "Module ID"
);

  const result = await deleteModule(
    moduleId,
    req.user!.id,
    req.user!.role
);

  res.json({

    success: true,

    ...result,

  });

};

/**
 * Reorder Modules
 */
export const reorderModulesController = async (
  req: Request,
  res: Response
) => {

  const result = await reorderModules(
    req.body.modules
  );

  res.json({
    success: true,
    ...result,
  });
};

