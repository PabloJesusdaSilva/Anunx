'use client';

import { Formik } from 'formik';
import { initialValues, validationSchema, } from './formValue';

const SingIn = () => {
  return (
      <main className='flex flex-col items-center w-full h-full'>
        <div className='flex flex-col items-center tracking-wider'>
          <h1 className='text-5xl text-zinc-900'>
            Crie sua conta
          </h1>

          <span className='text-xl mt-1'>
            E anuncie em todo Brasil
          </span>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('OK, the form has been sent', values);
          }}
        >
          {
            ({
              touched, 
              values,
              errors,
              handleChange,
              handleSubmit,
              setFieldValue
            }) => {
              return (
                <form 
                  onSubmit={handleSubmit}
                  className='flex flex-col w-3/6 mt-6 p-4 bg-zinc-50 shadow-md rounded-lg'
                >
                  <input 
                    name='name'
                    type='text'
                    onChange={handleChange}
                    errors={errors.name && touched.name}
                    placeholder='Nome'
                    className={errors.name && touched.name ? 'py-2 px-4 pl-2 my-3 border-b-2 border-red-400 placeholder-red-500 bg-zinc-50' : 'py-2 px-4 pl-2 my-3 border-b-2 border-zinc-400 placeholder-zinc-500 bg-zinc-50'} 
                  />

                  <input 
                    name='email'
                    type='text'
                    onChange={handleChange}
                    errors={errors.email && touched.email}
                    placeholder='Email'
                    className={errors.email && touched.email ? 'py-2 px-4 pl-2 my-3 border-b-2 border-red-400 placeholder-red-500 bg-zinc-50' : 'py-2 px-4 pl-2 my-3 border-b-2 border-zinc-400 placeholder-zinc-500 bg-zinc-50'} 
                  />

                  <input 
                    name='password'
                    type='text'
                    onChange={handleChange}
                    errors={errors.password && touched.password}
                    placeholder='Senha'
                    className={errors.password && touched.password ? 'py-2 px-4 pl-2 my-3 border-b-2 border-red-400 placeholder-red-500 bg-zinc-50' : 'py-2 px-4 pl-2 my-3 border-b-2 border-zinc-400 placeholder-zinc-500 bg-zinc-50'}  
                  />

                  <input 
                    name='confirmPassword'
                    type='text'
                    onChange={handleChange}
                    errors={errors.confirmPassword && touched.confirmPassword}
                    placeholder='Confirmação de senha'
                    className={errors.confirmPassword && touched.confirmPassword ? 'py-2 px-4 pl-2 my-3 border-b-2 border-red-400 placeholder-red-500 bg-zinc-50' : 'py-2 px-4 pl-2 my-3 border-b-2 border-zinc-400 placeholder-zinc-500 bg-zinc-50'}  
                  />

                  <button
                    type='submit' 
                    className='mt-7 py-2 px-4 text-zinc-100 text-xl tracking-wider rounded-md bg-zinc-950'
                  >
                    Cadastre
                  </button>

                  <span className='my-3 text-zinc-700'>
                    Já tem uma conta? Entre aqui
                  </span>
                </form>
              )
            }
          }
        </Formik>
      </main>  
  )
}

export default SingIn;