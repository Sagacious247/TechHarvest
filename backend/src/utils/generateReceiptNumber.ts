import Receipt from "../models/receipt.model";

export const generateReceiptNumber =
  async (): Promise<string> => {

    const year =
      new Date().getFullYear();

    const count =
      await Receipt.countDocuments();

    const serial = String(
      count + 1
    ).padStart(6, "0");

    return `THA-${year}-${serial}`;

};