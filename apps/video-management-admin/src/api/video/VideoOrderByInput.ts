import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  objectName?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
