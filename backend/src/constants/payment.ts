export const PAYMENT_STATUS = {

  PENDING: "pending",

  PROCESSING: "processing",

  SUCCESS: "success",

  FAILED: "failed",

  ABANDONED: "abandoned",

  EXPIRED: "expired",

  REFUNDED: "refunded",

} as const;

export const PAYMENT_GATEWAY = {

  PAYSTACK: "Paystack",

} as const;