import { Product } from "../product/Product";

export type FeaturedProduct = {
  createdAt: Date;
  endDate: Date;
  id: string;
  product?: Product;
  startDate: Date;
  updatedAt: Date;
};
