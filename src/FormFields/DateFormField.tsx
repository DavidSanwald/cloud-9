import { FieldProps, getIn } from "formik";
import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const DateFormField: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        {...field}
        {...props}
        format="MM/yy"
        margin="normal"
        views={["year", "month"]}
        disablePast
        helperText={errorText}
        error={Boolean(errorText)}
        onChange={date => form.setFieldValue(field.name, date, true)}
        InputLabelProps={{
          shrink: true
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
