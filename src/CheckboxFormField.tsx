import { FieldProps, getIn } from "formik";
import React from "react";
import { Checkbox } from "@material-ui/core";

export const CheckboxFormField: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {

  return (
    <Checkbox
      {...field}
      {...props}
    />
  );
};