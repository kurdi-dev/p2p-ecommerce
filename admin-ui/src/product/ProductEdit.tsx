import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { FeaturedProductTitle } from "../featuredProduct/FeaturedProductTitle";
import { UserTitle } from "../user/UserTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="categoryId"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <SelectInput
          source="currency"
          label="currency"
          choices={[
            { label: "US Dollar", value: "usd" },
            { label: "Iraqi  Dinar", value: "iqd" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="enabled" source="enabled" />
        <ReferenceArrayInput
          source="featuredProducts"
          reference="FeaturedProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeaturedProductTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Available", value: "available" },
            { label: "Sold", value: "sold" },
            { label: "Canceled", value: "canceled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="userId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
