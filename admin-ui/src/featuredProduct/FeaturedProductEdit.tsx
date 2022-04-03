import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  DateInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const FeaturedProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="End Date" source="endDate" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <DateInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
