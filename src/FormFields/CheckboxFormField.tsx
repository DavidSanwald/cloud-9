import { FieldProps } from "formik";
import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export const CheckboxFormField: React.FC<FieldProps & { label: string }> = ({
  field,
  form,
  label,
  ...props
}) => {
  return (
    <FormControlLabel
      {...field}
      {...props}
      label={label}
      control={<Checkbox value={field.name} checked={field.value} />}
    />
  );
};
