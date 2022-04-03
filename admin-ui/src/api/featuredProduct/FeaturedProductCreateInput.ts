import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type FeaturedProductCreateInput = {
  endDate: Date;
  product: ProductWhereUniqueInput;
  startDate: Date;
};
