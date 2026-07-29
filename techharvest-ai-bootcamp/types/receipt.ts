export interface AdminReceipt {
  _id: string;

  receiptNumber: string;

  student: {
    _id: string;
    fullName: string;
    email: string;
  } | null;

  course: {
    _id: string;
    title: string;
  } | null;

  amount: number;

  currency: string;

  paymentMethod: string;

  paymentReference: string;

  status: string;

  issuedAt: string;

  createdAt: string;
}