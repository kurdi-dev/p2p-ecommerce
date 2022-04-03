import { Module } from "@nestjs/common";
import { FeaturedProductModuleBase } from "./base/featuredProduct.module.base";
import { FeaturedProductService } from "./featuredProduct.service";
import { FeaturedProductController } from "./featuredProduct.controller";
import { FeaturedProductResolver } from "./featuredProduct.resolver";

@Module({
  imports: [FeaturedProductModuleBase],
  controllers: [FeaturedProductController],
  providers: [FeaturedProductService, FeaturedProductResolver],
  exports: [FeaturedProductService],
})
export class FeaturedProductModule {}
