import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

const Input = styled(Field)`
  background-color: yellow;
`;

export default function FormStandart() {
  function onSubmit(values, actions) {
    const { resetForm } = actions;
    console.log(values);
    console.log(actions);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <label>
          name
          <Input name="name" />
          <ErrorMessage name="name" component="div" />
        </label>

        <label>
          email
          <Field name="email" />
          <ErrorMessage name="email" component="div" />
        </label>

        <button type="submit">send</button>
      </Form>
    </Formik>
  );
}
