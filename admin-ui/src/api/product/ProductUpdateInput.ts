import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FeaturedProductUpdateManyWithoutProductsInput } from "./FeaturedProductUpdateManyWithoutProductsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  categoryId?: CategoryWhereUniqueInput | null;
  currency?: "usd" | "iqd";
  description?: string | null;
  enabled?: boolean | null;
  featuredProducts?: FeaturedProductUpdateManyWithoutProductsInput;
  name?: string;
  price?: number;
  status?: "available" | "sold" | "canceled" | null;
  userId?: UserWhereUniqueInput;
};
