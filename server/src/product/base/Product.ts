/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "../../category/base/Category";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumProductCurrency } from "./EnumProductCurrency";
import { FeaturedProduct } from "../../featuredProduct/base/FeaturedProduct";
import { EnumProductStatus } from "./EnumProductStatus";
import { User } from "../../user/base/User";
@ObjectType()
class Product {
  @ApiProperty({
    required: false,
    type: () => Category,
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  categoryId?: Category | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumProductCurrency,
  })
  @IsEnum(EnumProductCurrency)
  @Field(() => EnumProductCurrency, {
    nullable: true,
  })
  currency?: "usd" | "iqd";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  enabled!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => [FeaturedProduct],
  })
  @ValidateNested()
  @Type(() => FeaturedProduct)
  @IsOptional()
  featuredProducts?: Array<FeaturedProduct>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
    enum: EnumProductStatus,
  })
  @IsEnum(EnumProductStatus)
  @IsOptional()
  @Field(() => EnumProductStatus, {
    nullable: true,
  })
  status?: "available" | "sold" | "canceled" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  userId?: User;
}
export { Product };