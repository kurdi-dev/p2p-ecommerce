import { Category } from "../category/Category";
import { FeaturedProduct } from "../featuredProduct/FeaturedProduct";
import { User } from "../user/User";

export type Product = {
  categoryId?: Category | null;
  createdAt: Date;
  currency?: "usd" | "iqd";
  description: string | null;
  enabled: boolean | null;
  featuredProducts?: Array<FeaturedProduct>;
  id: string;
  name: string;
  price: number;
  status?: "available" | "sold" | "canceled" | null;
  updatedAt: Date;
  userId?: User;
};
