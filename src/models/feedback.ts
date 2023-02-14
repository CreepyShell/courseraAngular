import { ContactType } from "./contacttype";

export interface FeedBack {
  firstname: string;
  lastname: string;
  telnum: Number;
  email: string;
  agree: boolean;
  contacttype: ContactType;
  message: string;
}
