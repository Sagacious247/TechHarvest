export interface Student {
  _id: string;

  fullName: string;

  email: string;

  phone: string;

  occupation: string;

  experience: string;

  paymentStatus: "pending" | "paid";

  status: "active" | "inactive";

  createdAt: string;

  updatedAt: string;
}

export interface Pagination {
  total: number;

  page: number;

  limit: number;

  totalPages: number;

  hasNext: boolean;

  hasPrevious: boolean;
}

export interface StudentsResponse {
  success: boolean;

  data: Student[];

  pagination: Pagination;
}