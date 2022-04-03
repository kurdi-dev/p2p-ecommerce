import { FeaturedProduct as TFeaturedProduct } from "../api/featuredProduct/FeaturedProduct";

export const FEATUREDPRODUCT_TITLE_FIELD = "id";

export const FeaturedProductTitle = (record: TFeaturedProduct): string => {
  return record.id || record.id;
};
