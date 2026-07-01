import crypto from "crypto";

export const generateReference = (): string => {
  const timestamp = Date.now();

  const random = crypto
    .randomBytes(4)
    .toString("hex")
    .toUpperCase();

  return `THA-${timestamp}-${random}`;
};

