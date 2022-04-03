import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FeaturedProductServiceBase } from "./base/featuredProduct.service.base";

@Injectable()
export class FeaturedProductService extends FeaturedProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
