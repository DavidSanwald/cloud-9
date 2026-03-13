import React from "react";
import { Field } from "formik";
import { SelectFormField } from "FormFields/SelectFormField";
import { CheckboxFormField } from "FormFields/CheckboxFormField";

const durationOptions = [3, 6, 12].map(v => ({
  label: `${v} months`,
  value: v
}));

const capacityOptions = [3, 5, 20, 50].map(v => ({
  label: `${v} gb`,
  value: v
}));

const SubscriptionPage: React.FC = () => {
  return (
    <>
      <Field
        options={durationOptions}
        label="Subscription (months)"
        name="duration"
        component={SelectFormField}
      />
      <Field
        options={capacityOptions}
        label="Capacity (gb)"
        name="amount"
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
