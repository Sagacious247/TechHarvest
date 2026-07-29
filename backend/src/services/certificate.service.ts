import crypto from "crypto";

import Certificate from "../models/certificate.model";
import AppError from "../utils/AppError";

/**
 * Generate Certificate Number
 * Example:
 * TH-2026-000001
 */
const generateCertificateNumber = async () => {

  const year = new Date().getFullYear();

  const count =
    await Certificate.countDocuments();

  return `TH-${year}-${String(
    count + 1
  ).padStart(6, "0")}`;

};

/**
 * Generate Verification Code
 */
const generateVerificationCode = () => {

  return crypto
    .randomBytes(8)
    .toString("hex")
    .toUpperCase();

};

/**
 * Issue Certificate
 */
export const issueCertificate = async (
  studentId: string,
  courseId: string
) => {

  /**
   * Prevent duplicate certificates
   */
  const existing =
    await Certificate.findOne({

      student: studentId,

      course: courseId,

    });

  if (existing) {

    return existing;

  }

  const certificateNumber =
    await generateCertificateNumber();

  const verificationCode =
    generateVerificationCode();

  const certificate =
    await Certificate.create({

      student: studentId,

      course: courseId,

      certificateNumber,

      verificationCode,

    });

  return certificate;

};

/**
 * Student Certificates
 */
export const getStudentCertificates =
  async (
    studentId: string
  ) => {

    return await Certificate.find({

      student: studentId,

    })

      .populate("course")

      .sort({

        createdAt: -1,

      });

  };

/**
 * Verify Certificate
 */
export const verifyCertificate =
  async (
    certificateNumber: string
  ) => {

    const certificate =
      await Certificate.findOne({

        certificateNumber,

      })

        .populate("student")

        .populate("course");

    if (!certificate) {

      throw new AppError(
        "Certificate not found.",
        404
      );

    }

    return certificate;

  };


  /**
 * -----------------------------------------
 * Admin
 * Get All Certificates
 * -----------------------------------------
 */
export const getAllCertificates = async () => {

  return Certificate.find()

    .populate(
      "student",
      "fullName email"
    )

    .populate(
      "course",
      "title"
    )

    .sort({
      createdAt: -1,
    });

};