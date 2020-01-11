import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "./TextFormField";
import { SelectFormField } from "SelectFormField";
import { CheckboxFormField } from "CheckboxFormField";

const CreditDataPage: React.FC = () => {
  return (
    <>
      <Field label="Card Number" name="cardNumber" component={TextFormField} />
      <Field label="Expiration date" name="expDate" component={TextFormField} />
      <Field
        helperText="Last three digits on signature strip"
        label="CVV"
        name="CVV"
        component={TextFormField}
      />
    </>
  );
};

export { CreditDataPage };
