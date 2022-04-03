import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type FeaturedProductWhereInput = {
  endDate?: DateTimeFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  startDate?: DateTimeFilter;
};
