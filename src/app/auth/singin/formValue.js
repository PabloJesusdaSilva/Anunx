import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const validationSchema = yup.object().shape({
  name: yup.string()
    .required('Required field!'),
  
  email: yup.string()
    .email('Email invalid')
    .required('Required field!'),

  password: yup.mixed()
    .min(6, 'Short password')
    .required('Required field!'),

  confirmPassword: yup.mixed()
    .oneOf([yup.ref('password'), null], 'Different password')
    .required('Required field!')
    
})

export {
  initialValues,
  validationSchema
}