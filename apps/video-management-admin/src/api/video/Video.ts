import { User } from "../user/User";

export type Video = {
  createdAt: Date;
  id: string;
  objectName: string | null;
  updatedAt: Date;
  user?: User | null;
};
