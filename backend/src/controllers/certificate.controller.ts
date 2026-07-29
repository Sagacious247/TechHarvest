// import { Request, Response } from "express";

// import {
//   getStudentCertificates,
//   verifyCertificate,
// } from "../services/certificate.service";

// /**
//  * Student Certificates
//  */
// export const getMyCertificatesController = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {

//   const certificates =
//     await getStudentCertificates(
//       req.user!.id
//     );

//   res.status(200).json({
//     success: true,
//     data: certificates,
//   });

// };

// /**
//  * Verify Certificate
//  */
// export const verifyCertificateController = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {

//   const certificateNumber = Array.isArray(
//     req.params.certificateNumber
//   )
//     ? req.params.certificateNumber[0]
//     : req.params.certificateNumber;

//   const certificate =
//     await verifyCertificate(
//       certificateNumber
//     );

//   res.status(200).json({
//     success: true,
//     data: certificate,
//   });

// };

import { Request, Response } from "express";
 import { getParam } from "../utils/getParam";

import {
  getStudentCertificates,
  verifyCertificate,
  getAllCertificates,
} from "../services/certificate.service";

export const getMyCertificatesController = async (
  req: Request,
  res: Response
): Promise<void> => {

  const certificates =
    await getStudentCertificates(
      req.user!.id
    );

  res.status(200).json({
    success: true,
    data: certificates,
  });

};

export const verifyCertificateController = async (
  req: Request,
  res: Response
): Promise<void> => {


const certificate =
  await verifyCertificate(
    getParam(
      req.params.certificateNumber,
      "Certificate Number"
    )
  );
  res.status(200).json({
    success: true,
    data: certificate,
  });

};

/**
 * -----------------------------------------
 * Admin
 * -----------------------------------------
 */

export const getAllCertificatesController =
async (
  req: Request,
  res: Response
): Promise<void> => {

  const certificates =
    await getAllCertificates();

  res.status(200).json({

    success: true,

    data: certificates,

  });

};