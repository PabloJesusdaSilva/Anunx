'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Formik } from  'formik';
import { useDropzone } from 'react-dropzone';
import * as yup from 'yup';

import { TrashIcon } from '@heroicons/react/24/outline';

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
})

const Publish = () => {
   const [files, setFiles] = useState([]);

   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: (acceptedFile) => {
         const newFiles = acceptedFile.map(file => {
            return Object.assign(file, {
               preview: URL.createObjectURL(file)
            })
         })

         setFiles(newFiles);
      }
   })

   const handleRemoveFile = fileName => {
      const newFileState = files.filter(file => file.name !== fileName);

      setFiles(newFileState);
   }

   return(
      <Formik 
         initialValues={{
            title: '',
            category: '',
            description: '',
         }}
         validationSchema={validationSchema}
         onSubmit={values => {
            console.log(`OK, the form has been sent ${values}`);
         }}
      >
         {
            ({
               values,
               errors,
               handleChange,
               handleSubmit
            }) => {
               return (
                  <>
                     <form
                        onSubmit={handleSubmit} 
                        className='flex flex-col items-center w-full'
                     >
                        <h1 className= 'mb-2 text-5xl'>Publicar Anúncio</h1>
                        <p className='text-lg'>Quanto mais detalhes, melhor</p>
               
                        <div className='w-3/5 p-4 mt-12 rounded-md shadow-md bg-white'>
                           <label className='my-2 text-lg font-medium'>Título do anúncio</label>
                           <input
                              name='title'
                              value={values.title}
                              error={errors.title}
                              onChange={handleChange} 
                              className='w-full mt-2 mb-4 pl-1 py-1 border-b-2 border-b-zinc-300' 
                              placeholder='ex: Bicicleta Aro 18 com garantia'
                              type='text' 
                           />
                           
                           <label className='text-lg font-medium'>Categoria</label>
                           <select 
                              id='category' 
                              name='category'
                              value={values.category}
                              error={errors.category}
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
                           <label className='text-lg font-medium'>Imagens</label>
                           <p className='tracking-wide'>A primeira imagem é a foto principal do seu anúncio</p>

                           <div className='flex flex-wrap mt-4'>
                              <article 
                                 {...getRootProps()}
                                 className='flex justify-center items-center text-center w-60 h-36 m-2 p-3 border-2 border-dashed border-zinc-700 bg-zinc-300'
                              >
                                 <input {...getInputProps()} />
                                 <h2>
                                    Clique para adicionar ou arraste a imagem aqui.
                                 </h2>
                              </article>

                              {
                                 files.map((file, index) => (
                                    <article
                                       key={file.name} 
                                       className='relative w-60 h-36 m-2 group'
                                    >
                                       <Image 
                                          alt=''
                                          src={file.preview}
                                          width={200}
                                          height={150}
                                          className='object-cover w-full h-full'
                                       />

                                       <div
                                          onClick={() => handleRemoveFile(file.name)} 
                                          className='absolute flex justify-center items-center top-0 w-full h-full bg-zinc-950/50 transition-all opacity-0 group-hover:opacity-100'
                                       >
                                          <TrashIcon 
                                             color='#FFF' 
                                             className='w-10 cursor-pointer' 
                                          />
                                       </div>
                                       
                                       {
                                          index === 0 ?
                                             <div className='absolute bottom-0 left-0 py-1 px-2 bg-purple-800 opacity-100 rounded-tr-lg'>
                                                <h2 className='text-zinc-200 tracking-wider'>
                                                   Principal
                                                </h2>
                                             </div>
                                          : null
                                       }
                                    </article>
                                 ))
                              }
                           </div>
                        </div>
                        
                        <div className='w-3/5 p-4 mt-8 rounded-md shadow-md bg-white'>
                           <label className='text-xl font-medium'>Descrição</label>
                           <p className='tracking-wide'>Escreva os detalhes do que está vendendo</p>
               
                           <textarea 
                              name='description'
                              error={errors.description} 
                              cols='30' 
                              rows='10' 
                              className='w-full h-full mt-3 pt-1 pl-2 border-2 border-zinc-300 rounded resize-none'
                           />
                        </div>
                        
                        <div className='w-3/5 p-4 pb-1 mt-8 rounded-md shadow-md bg-white'>
                           <label className='text-xl font-medium'>Preço</label>
                           <label className='relative top-7 -left-11 p-1 text-sm font-medium bg-white text-zinc-400'>Valor</label>
                           <input 
                              type='tel' 
                              className='w-full h-12 mt-4 pl-9 border-2 border-zinc-300 rounded' 
                           />
                           <span className='relative -top-9 left-3 text-zinc-400'>R$</span>
                        </div>
               
                        <div className='w-3/5 gap-2 p-4 mt-8 rounded-md shadow-md bg-white'>
                           <label className='text-xl font-medium'>Dados de contato</label>
                           <form>
                              <input className='w-full h-10 mt-3 pl-2 border-2 border-zinc-300 rounded' 
                                 type='text' placeholder='Nome' />
                              <input className='w-full h-10 my-4 pl-2 border-2 border-zinc-300 rounded' 
                                 type='email' placeholder='Email' />
                              <input className='w-full h-10 pl-2 border-2 border-zinc-300 rounded' 
                                 type='tel' placeholder='Telefone' />
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