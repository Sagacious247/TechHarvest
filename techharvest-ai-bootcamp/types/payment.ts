export interface AdminPayment {

  enrollmentId: string;

  student: {
    _id: string;
    fullName: string;
    email: string;
  };

  course: {
    _id: string;
    title: string;
  };

  amount: number;

  enrollmentStatus: string;

  paymentStatus: string;

  paymentReference: string | null;

  paidAt: string | null;

  receipt: any;

}