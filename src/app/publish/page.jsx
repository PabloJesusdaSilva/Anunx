"use client"

import { Formik } from  'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
   title: yup.string()
      .min(6, 'escreva um título maior')
      .max(100, 'título muito grande')
      .required('Campo obrigatório')
})

const Publish = () => {
   return(
      <Formik 
         initialValues={{
            title: ''
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
               
                        <article className='w-3/5 p-4 mt-12 rounded-md shadow-md bg-white'>
                           <label className='my-2 text-lg font-medium'>Título do anúncio</label>
                           <input
                              name='title'
                              value={values.title}
                              onChange={handleChange} 
                              className='w-full mt-2 mb-4 pl-1 py-1 border-b-2 border-b-zinc-300' 
                              placeholder='ex: Bicicleta Aro 18 com garantia'
                              type='text' 
                           />
                           
                           <label className='text-lg font-medium'>Categoria</label>
                           <select className='w-full mt-2 mb-1 pb-1 border-b-2 border-zinc-300 ' 
                              name='category' id='category' >
                              <option value=''>Selecione</option>
                              <option value=''>Bebê e Criança</option>
                              <option value=''>Agricultura</option>
                              <option value=''>Moda</option>
                              <option value=''>Carros, Motos e Barcos</option>
                              <option value=''>Serviços</option>
                              <option value=''>Lazer</option>
                              <option value=''>Animais</option>
                              <option value=''>Moveis, Casa, e Jardim</option>
                              <option value=''>Imóveis</option>
                              <option value=''>Equipamentos e Ferramentas</option>
                              <option value=''>Celulares e Tablets</option>
                              <option value=''>Esportes</option>
                              <option value=''>Tecnologia</option>
                              <option value=''>Emprego</option>
                              <option value=''>Outros</option>
                           </select>
                        </article>
               
                        <article className='w-3/5 p-4 mt-8 rounded-md shadow-md bg-white'>
                           <label className='text-lg font-medium'>Imagens</label>
                           <p className='tracking-wide'>A primeira imagem é a foto principal do seu anúncio</p>
                        </article>
                        
                        <article className='w-3/5 p-4 mt-8 rounded-md shadow-md bg-white'>
                           <label className='text-xl font-medium'>Descrição</label>
                           <p className='tracking-wide'>Escreva os detalhes do que está vendendo</p>
               
                           <textarea className='w-full h-full mt-3 pt-1 pl-2 border-2 border-zinc-300 rounded resize-none'
                              name='description' cols='30' rows='10' />
                        </article>
                        
                        <article className='w-3/5 p-4 mt-8 rounded-md shadow-md bg-white'>
                           <label className='text-xl font-medium'>Preço</label>
                           <label className='relative top-6 -left-11 p-1 text-sm font-medium bg-white text-zinc-400'>Valor</label>
                           <input className='w-full h-12 mt-3 pl-9 border-2 border-zinc-300 rounded' 
                              type='tel' />
                           <span className='relative -top-9 left-3 text-zinc-400'>R$</span>
                        </article>
               
                        <article className='w-3/5 gap-2 p-4 mt-8 rounded-md shadow-md bg-white'>
                           <label className='text-xl font-medium'>Dados de contato</label>
                           <form>
                              <input className='w-full h-10 mt-3 pl-2 border-2 border-zinc-300 rounded' 
                                 type='text' placeholder='Nome' />
                              <input className='w-full h-10 my-4 pl-2 border-2 border-zinc-300 rounded' 
                                 type='email' placeholder='Email' />
                              <input className='w-full h-10 pl-2 border-2 border-zinc-300 rounded' 
                                 type='tel' placeholder='Telefone' />
                           </form>
                        </article>
               
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