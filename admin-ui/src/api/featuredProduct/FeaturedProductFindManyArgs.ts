import { FeaturedProductWhereInput } from "./FeaturedProductWhereInput";
import { FeaturedProductOrderByInput } from "./FeaturedProductOrderByInput";

export type FeaturedProductFindManyArgs = {
  where?: FeaturedProductWhereInput;
  orderBy?: Array<FeaturedProductOrderByInput>;
  skip?: number;
  take?: number;
};
