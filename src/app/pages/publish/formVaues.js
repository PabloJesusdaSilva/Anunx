import * as yup from 'yup';

const initialValues = {
  title: '',
  category: '',
  description: '',
  price: '',
  email: '',
  name: '',
  phone: '',
  files: []
}

const validationSchema = yup.object().shape({
  title: yup.string()
     .min(6, 'escreva um título maior')
     .max(100, 'título muito grande')
     .required('Campo obrigatório'),

  category: yup.string()
     .required('Required field!'),
     
  description: yup.string()
     .min(50, 'Write more than 50 characters')
     .required('Required field!'),

  price: yup.number()
     .required('Required field!'),

  email: yup.string()
     .email('Email invalid!')
     .required('Required field!'),

  name: yup.string()
     .required('Required field!'),

  phone: yup.number()
     .required('Required field!'),

  files: yup.array()
     .min(1, 'Send another image')
     .required('Required field!')
})

export {
  initialValues,
  validationSchema
}