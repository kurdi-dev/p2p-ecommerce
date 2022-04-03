import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FeaturedProductListRelationFilter } from "../featuredProduct/FeaturedProductListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductWhereInput = {
  categoryId?: CategoryWhereUniqueInput;
  currency?: "usd" | "iqd";
  description?: StringNullableFilter;
  enabled?: BooleanNullableFilter;
  featuredProducts?: FeaturedProductListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  price?: FloatFilter;
  status?: "available" | "sold" | "canceled";
  userId?: UserWhereUniqueInput;
};
