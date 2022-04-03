import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type FeaturedProductUpdateInput = {
  endDate?: Date;
  product?: ProductWhereUniqueInput;
  startDate?: Date;
};
