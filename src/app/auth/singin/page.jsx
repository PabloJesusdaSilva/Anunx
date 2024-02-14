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
                    type='text'
                    placeholder='Nome'
                    className='py-2 px-4 pl-2 my-3 border-b-2 bg-zinc-50' 
                  />

                  <input 
                    type='text'
                    placeholder='Email'
                    className='py-2 px-4 pl-2 my-3 border-b-2 bg-zinc-50' 
                  />

                  <input 
                    type='text'
                    placeholder='Senha'
                    className='py-2 px-4 pl-2 my-3 border-b-2 bg-zinc-50' 
                  />

                  <input 
                    type='text'
                    placeholder='Confirmação de senha'
                    className='py-2 px-4 pl-2 my-3 border-b-2 bg-zinc-50' 
                  />

                  <button className='mt-7 py-2 px-4 text-zinc-100 text-xl tracking-wider rounded-md bg-zinc-950'>
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