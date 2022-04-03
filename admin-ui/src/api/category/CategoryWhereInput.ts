import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { CategoryListRelationFilter } from "./CategoryListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  child_id?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  parent_id?: CategoryListRelationFilter;
  products?: ProductListRelationFilter;
};
