import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryUpdateManyWithoutCategoriesInput } from "./CategoryUpdateManyWithoutCategoriesInput";
import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  child_id?: CategoryWhereUniqueInput | null;
  description?: string | null;
  enabled?: boolean;
  name?: string;
  parent_id?: CategoryUpdateManyWithoutCategoriesInput;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
