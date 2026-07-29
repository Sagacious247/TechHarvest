export interface AdminCertificate {
  _id: string;

  certificateNumber: string;

  verificationCode: string;

  createdAt: string;

  student: {
    _id: string;
    fullName: string;
    email: string;
  } | null;

  course: {
    _id: string;
    title: string;
  } | null;
}

export interface CertificateStatistics {
  total: number;
  today: number;
  thisMonth: number;
  verified: number;
}