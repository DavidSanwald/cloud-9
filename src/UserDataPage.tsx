import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "./TextFormField";
import { SelectFormField } from "SelectFormField";
import { CheckboxFormField } from "CheckboxFormField";

const UserDataPage: React.FC = () => {
  return (
    <>
      <Field label="First Name" name="firstName" component={TextFormField} />
      <Field label="Last Name" name="lastName" component={TextFormField} />
      <Field label="Email" name="eMail" component={TextFormField} />
      <Field label="Street Address:" name="street" component={TextFormField} />
    </>
  );
};

export { UserDataPage };
