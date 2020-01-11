import React from "react";
import { Field } from "formik";
import { SelectFormField } from "FormFields/SelectFormField";
import { CheckboxFormField } from "FormFields/CheckboxFormField";

const storageSizingOptions = [3, 5, 20, 50] as const;
const toStorageSizingLabel = (size: number) => `${size} gb`;

const subscriptionDurationOptions = [3, 6, 12];
const toSubscriptionDurationLabel = (duration: number) => `${duration} months`;

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
