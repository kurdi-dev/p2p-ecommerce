import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "./CategoryTitle";
import { ProductTitle } from "../product/ProductTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Child Id"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="enabled" source="enabled" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="parent_id"
          reference="Category"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
