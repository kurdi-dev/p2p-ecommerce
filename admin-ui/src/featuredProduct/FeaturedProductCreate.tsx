import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  DateInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const FeaturedProductCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="End Date" source="endDate" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <DateInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
