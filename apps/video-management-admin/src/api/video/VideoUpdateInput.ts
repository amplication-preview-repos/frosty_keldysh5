import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoUpdateInput = {
  objectName?: string | null;
  user?: UserWhereUniqueInput | null;
};
