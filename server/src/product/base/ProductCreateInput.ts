/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumProductCurrency } from "./EnumProductCurrency";
import { FeaturedProductCreateNestedManyWithoutProductsInput } from "./FeaturedProductCreateNestedManyWithoutProductsInput";
import { EnumProductStatus } from "./EnumProductStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class ProductCreateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  categoryId?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    enum: EnumProductCurrency,
  })
  @IsEnum(EnumProductCurrency)
  @Field(() => EnumProductCurrency)
  currency!: "usd" | "iqd";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  enabled?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => FeaturedProductCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => FeaturedProductCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => FeaturedProductCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  featuredProducts?: FeaturedProductCreateNestedManyWithoutProductsInput;

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
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  userId!: UserWhereUniqueInput;
}
export { ProductCreateInput };