import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "./TextFormField";
import { SelectFormField } from "SelectFormField";
import { CheckboxFormField } from "CheckboxFormField";

const storageSizingOptions = [3, 5, 20, 50] as const;
const toStorageSizingLabel = (size: number) => `${size}gb`;

const subscriptionDurationOptions = [3, 6, 12];
const toSubscriptionDurationLabel = (duration: number) => `${duration} months`;

const schema = yup.object({
  username: yup
    .string()
    .required()
    .min(3),
  email: yup.string().email()
});

const SubscriptionPage: React.FC = () => {
  return (
    <>
      <Field
        options={subscriptionDurationOptions.map(value => ({
          label: toSubscriptionDurationLabel(value),
          value
        }))}
        label="Subscription (months)"
        name="duration"
        component={SelectFormField}
      />
      <Field
        options={storageSizingOptions.map(value => ({
          label: toStorageSizingLabel(value),
          value
        }))}
        label="Capacity (gb)"
        name="sizing"
        component={SelectFormField}
      />
      <Field
        value="upfront"
        name="upfront"
        label="Upfront payment:"
        component={CheckboxFormField}
      />
    </>
  );
};

export { SubscriptionPage };
