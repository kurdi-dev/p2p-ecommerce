import { Product } from "../product/Product";

export type Category = {
  child_id?: Category | null;
  createdAt: Date;
  description: string | null;
  enabled: boolean;
  id: string;
  name: string;
  parent_id?: Array<Category>;
  products?: Array<Product>;
  updatedAt: Date;
};
