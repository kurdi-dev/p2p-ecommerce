import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryIdId?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  description?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
};
