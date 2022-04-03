import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FeaturedProductResolverBase } from "./base/featuredProduct.resolver.base";
import { FeaturedProduct } from "./base/FeaturedProduct";
import { FeaturedProductService } from "./featuredProduct.service";

@graphql.Resolver(() => FeaturedProduct)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FeaturedProductResolver extends FeaturedProductResolverBase {
  constructor(
    protected readonly service: FeaturedProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
