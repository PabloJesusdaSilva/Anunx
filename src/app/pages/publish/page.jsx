'use client';

import Image from 'next/image';
import { Formik } from  'formik';

import { initialValues, validationSchema } from './formVaues';

import FileUpload from '@/components/FileUpload';

const Publish = () => {
   return(
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
                  <>
                     <form
                        onSubmit={handleSubmit} 
                        className='flex flex-col items-center w-full'
                     >
                        <h1 className= 'mb-2 text-5xl'>Publicar Anúncio</h1>
                        <p className='text-lg'>Quanto mais detalhes, melhor</p>
               
                        <div className='flex flex-col w-3/5 p-4 mt-12 rounded-md shadow-md bg-white transition-all'>
                           <label className={errors.title && touched.title ? 'text-lg font-medium text-red-500' : 'mt-2 text-lg font-medium'}>
                              Título do anúncio
                           </label>

                           {
                              errors.title && touched.title ? 
                                 <>
                                    <h1 className='text-red-500 text-sm ml-1'> Digite corretamente</h1>
                                 </>
                                 : null
                           }

                           <input
                              name='title'
                              value={values.title}
                              error={errors.title}
                              onChange={handleChange} 
                              className={errors.title && touched.title ? 'w-full mt-2 pl-1 py-1 border-b-2 border-b-red-500' : 'pl-1 py-1 border-b-2 border-b-zinc-300'}
                              placeholder='ex: Bicicleta Aro 18 com garantia'
                              type='text' 
                           />

                           <label className='mt-4 text-lg font-medium'>Categoria</label>
                           <select 
                              id='category' 
                              name='category'
                              value={values.category}
                              error={errors.category && touched.category}
                              onChange={handleChange} 
                              className='w-full mt-2 mb-1 pb-1 border-b-2 border-zinc-300' 
                           >
                              <option value='Selecione'>Selecione</option>
                              <option value='Bebê e Criança'>Bebê e Criança</option>
                              <option value='Agricultura'>Agricultura</option>
                              <option value='Moda'>Moda</option>
                              <option value='Carros, Motos e Barcos'>Carros, Motos e Barcos</option>
                              <option value='Serviços'>Serviços</option>
                              <option value='Lazer'>Lazer</option>
                              <option value='Animais'>Animais</option>
                              <option value='Moveis, Casa, e Jardim'>Moveis, Casa, e Jardim</option>
                              <option value='Imóveis'>Imóveis</option>
                              <option value='Equipamentos e Ferramentas'>Equipamentos e Ferramentas</option>
                              <option value='Celulares e Tablets'>Celulares e Tablets</option>
                              <option value='Esportes'>Esportes</option>
                              <option value='Tecnologia'>Tecnologia</option>
                              <option value='Emprego'>Emprego</option>
                              <option value='Outros'>Outros</option>
                           </select>
                        </div>
               
                        <div className='w-3/5 p-4 mt-8 rounded-md shadow-md bg-white'>
                           <FileUpload 
                              files={values.files}
                              errors={errors.files}
                              touched={touched.files}
                              setFieldValue={setFieldValue}
                           />
                        </div>
                        
                        <div className='w-3/5 p-4 mt-8 rounded-md shadow-md bg-white'>
                           <label className={errors.description && touched.description ? 'text-xl font-medium text-red-500' : 'text-xl text-zinc-600 font-medium'}>Descrição</label>
                           <p className={errors.description && touched.description ? 'tracking-wide text-red-500' : 'tracking-wide text-zinc-600'}>Escreva os detalhes do que está vendendo</p>
               
                           <textarea 
                              name='description'
                              error={errors.description && touched.description} 
                              onChange={handleChange}
                              cols='30' 
                              rows='10' 
                              className={errors.description && touched.description ? 'w-full h-full mt-3 pt-1 pl-2 border-2 border-red-400 rounded resize-none' : 'w-full h-full mt-3 pt-1 pl-2 border-2 border-zinc-300 rounded resize-none'}
                           />
                        </div>
                        
                        <div
                           error={errors.price && touched.price} 
                           className='w-3/5 p-4 pb-1 mt-8 rounded-md shadow-md bg-white'
                        >
                           <label 
                              name='price'
                              className={errors.price && touched.price ? ' text-xl font-medium text-red-500' : 'text-xl font-medium text-zinc-800'}
                           >
                              Preço
                           </label>

                           <label className={errors.price && touched.price ? 'relative top-7 -left-11 p-1 text-sm font-medium bg-white text-red-500' : 'relative top-7 -left-11 p-1 text-sm font-medium bg-white text-zinc-400'}>Valor</label>
                           <input 
                              name='price'
                              error={errors.price && touched.price}
                              onChange={handleChange}
                              type='tel' 
                              className={errors.price && touched.price ? 'w-full h-12 mt-4 pl-9 border-2 border-red-400 text-red-500 rounded' : 'w-full h-12 mt-4 pl-9 border-2 border-zinc-300 text-zinc-600 rounded'} 
                           />
                           <span className={errors.price && touched.price ? 'relative -top-9 left-3 text-red-500' : 'relative -top-9 left-3 text-zinc-400'}>R$</span>
                        </div>
               
                        <div className='w-3/5 gap-2 p-4 mt-8 rounded-md shadow-md bg-white'>
                           <label className='text-xl font-medium'>Dados de contato</label>
                           <form>
                              <input
                                 name='name'
                                 type='text' 
                                 error={errors.name && touched.name}
                                 onChange={handleChange}
                                 placeholder='Nome' 
                                 className={errors.name && touched.name ? 'w-full h-10 mt-3 pl-2 rounded border-2 border-red-400 text-red-500' : 'w-full h-10 mt-3 pl-2 text-zinc-600 border-2 border-zinc-300 rounded'} 
                              />
                              <input 
                                 name='email'
                                 type='email' 
                                 error={errors.email && touched.email}
                                 onChange={handleChange}
                                 placeholder='Email' 
                                 className={errors.email && touched.email ? 'w-full h-10 my-4 pl-2 rounded border-2 border-red-400 text-red-500' : 'w-full h-10 my-4 pl-2 text-zinc-600 border-2 border-zinc-300 rounded'} 
                              />
                              <input
                                 name='phone' 
                                 type='tel' 
                                 error={errors.phone && touched.phone}
                                 onChange={handleChange}
                                 placeholder='Telefone' 
                                 className={errors.phone && touched.phone ? 'w-full h-10 pl-2 rounded border-2 border-red-400 text-red-500' : 'w-full h-10 pl-2 text-zinc-600 border-2 border-zinc-300 rounded'} 
                              />
                           </form>
                        </div>
               
                        <button
                           type='submit' 
                           className='relative left-80 mt-6 py-2 px-4 rounded-md bg-zinc-950 text-white'
                        >
                           Publicar anúncio
                        </button>
                     </form>
                  </>      
               )
            }
         }
      </Formik>     
   );
}

export default Publish;