import React from "react";
import { Field } from "formik";
import { TextFormField } from "../FormFields/TextFormField";
import { DateFormField } from "FormFields/DateFormField";

const CreditDataPage: React.FC = () => {
  return (
    <>
      <Field
        label="Card Number"
        type="number"
        name="cardNumber"
        component={TextFormField}
      />
      <Field label="Expiration date" name="expDate" component={DateFormField} />
      <Field
        helperText="Last three digits on signature strip"
        label="CVV"
        name="CVV"
        type="number"
        component={TextFormField}
      />
    </>
  );
};

export { CreditDataPage };
