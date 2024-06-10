import React from "react";
import "./form.css";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";

const initialValue = {
  firstName: "",
  lastName: "",
  phones: [{ phone: "380" }],
};

const ContactValidationScheme = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too short")
    .max(15)
    .required("First Name is requaired"),
  lastName: Yup.string().min(2, "Too short").max(15),
  phones: Yup.array().of(
    Yup.object().shape({
      phone: Yup.string()
        .min(12, "enter 12 characters")
        .max(12, "enter 12 characters")
        .matches(/^\d{10,15}$/, "Phone is valid")
        .typeError("just numbers")
        .required("Phone number is requaired"),
    })
  ),
});

export default function FormСustom({ submitHandler }) {
  return (
    <Formik
      validationSchema={ContactValidationScheme}
      initialValues={initialValue}
      onSubmit={submitHandler}
    >
      {({ values }) => (
        <Form action="" className="form">
          <Input
            label="Name"
            name="firstName"
            id="firstName"
            placeholder="enter name"
            type="text"
          />
          <Input
            label="Last Name"
            name="lastName"
            id="lastName"
            placeholder="enter last name"
            type="text"
          />
          <FieldArray name="phones">
            {({ push, remove }) => (
              <div>
                {values.phones.map((phone, index) => (
                  <div key={index}>
                    <Input
                      label={`phones ${index + 1}`}
                      name={`phones[${index}].phone`}
                      id={`phones[${index}].phone`}
                      placeholder="enter last phone"
                      type="text"
                    />
                    {index !== 0 && (
                      <button type="button" onClick={() => remove(index)}>
                        Delete phone
                      </button>
                    )}
                  </div>
                ))}
                {values.phones.length <= 1 && (
                  <button type="button" onClick={() => push({ phone: "+380" })}>
                    Add phone
                  </button>
                )}
              </div>
            )}
          </FieldArray>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
}
