import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeaturedProductService } from "./featuredProduct.service";
import { FeaturedProductControllerBase } from "./base/featuredProduct.controller.base";

@swagger.ApiTags("featuredProducts")
@common.Controller("featuredProducts")
export class FeaturedProductController extends FeaturedProductControllerBase {
  constructor(
    protected readonly service: FeaturedProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
