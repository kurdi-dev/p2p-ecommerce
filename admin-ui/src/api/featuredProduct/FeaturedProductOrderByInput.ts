import { SortOrder } from "../../util/SortOrder";

export type FeaturedProductOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
