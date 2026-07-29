export interface Notification {

  _id: string;

  title: string;

  message: string;

  type:
    | "welcome"
    | "payment"
    | "certificate"
    | "lesson"
    | "announcement";

  read: boolean;

  createdAt: string;

}