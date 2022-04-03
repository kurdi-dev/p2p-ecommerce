import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FeaturedProductCreateNestedManyWithoutProductsInput } from "./FeaturedProductCreateNestedManyWithoutProductsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  categoryId?: CategoryWhereUniqueInput | null;
  currency: "usd" | "iqd";
  description?: string | null;
  enabled?: boolean | null;
  featuredProducts?: FeaturedProductCreateNestedManyWithoutProductsInput;
  name: string;
  price: number;
  status?: "available" | "sold" | "canceled" | null;
  userId: UserWhereUniqueInput;
};
