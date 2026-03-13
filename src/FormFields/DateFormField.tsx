import { FieldProps, getIn } from "formik";
import React from "react";
import { DatePicker } from "@material-ui/pickers";

export const DateFormField: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <DatePicker
      {...field}
      {...props}
      format="MM/yy"
      margin="normal"
      views={["year", "month"]}
      disablePast
      helperText={errorText}
      error={!!errorText}
      onChange={date => form.setFieldValue(field.name, date, true)}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};
