import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "./TextFormField";
import { SelectFormField } from "SelectFormField";
import { CheckboxFormField } from "CheckboxFormField";

const schema = yup.object({
  username: yup
    .string()
    .required()
    .min(3),
  email: yup.string().email()
});

const CloudForm: React.FC = () => {
  return (
        <Formik
          validationSchema={schema}
          initialValues={{ username: "", email: "" }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <div>
                <Field
                  options={[
                    { label: "Dog", value: "dog" },
                    { label: "Cat", value: "cat" }
                  ]}
                  label="Duration"
                  name="pet"
                  component={SelectFormField}
                />
                <Field
                  options={[
                    { label: "Dog", value: "dog" },
                    { label: "Cat", value: "cat" }
                  ]}
                  label="Capacity(gb)"
                  name="pet"
                  component={SelectFormField}
                />
                <Field
                  label="Username"
                  name="username"
                  component={CheckboxFormField}
                />
              </div>
              <div>
                <Field label="Email" name="email" component={TextFormField} />
              </div>
              <div>
              </div>
              <div>
              </div>
            </Form>
          )}
        </Formik>
  );
};

export {CloudForm}
