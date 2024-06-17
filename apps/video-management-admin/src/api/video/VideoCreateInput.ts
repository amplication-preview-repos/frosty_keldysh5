import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoCreateInput = {
  objectName?: string | null;
  user?: UserWhereUniqueInput | null;
};
