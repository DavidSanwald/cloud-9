import { FieldProps, getIn } from "formik";
import React from "react";
import { Checkbox, FormControlLabel, CheckboxProps } from "@material-ui/core";

export const CheckboxFormField: React.FC<FieldProps & { label: string }> = ({
  field,
  form,
  label,
  ...props
}) => {
  console.log(field);
  console.log(form);
  return (
    <FormControlLabel
      {...field}
      {...props}
      label={label}
      control={<Checkbox value="upfront" checked={field.value.upfront} />}
    />
  );
};
