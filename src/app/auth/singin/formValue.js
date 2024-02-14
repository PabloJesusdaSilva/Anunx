import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const validationSchema = yup.object().shape({
  name: yup.string()
    .required(),
  
  email: yup.string()
    .email()
    .required(),

  password: yup.mixed()
    .required(),

  confirmPassword: yup.mixed()
    .required()
})

export {
  initialValues,
  validationSchema
}