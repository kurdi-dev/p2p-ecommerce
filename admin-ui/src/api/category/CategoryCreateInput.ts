import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryCreateNestedManyWithoutCategoriesInput } from "./CategoryCreateNestedManyWithoutCategoriesInput";
import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  child_id?: CategoryWhereUniqueInput | null;
  description?: string | null;
  enabled: boolean;
  name: string;
  parent_id?: CategoryCreateNestedManyWithoutCategoriesInput;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
