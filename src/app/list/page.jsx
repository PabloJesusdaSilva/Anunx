import Card from '@/components/Card';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import localImage from '../../../public/jaguar.jpg'

const List = () => {
   return(
      <main className='flex flex-col items-center w-full'>
         <section className='flex flex-col justify-center w-3/5'>
            <div className='flex items-center relative w-full h-12 mb-6 rounded-md shadow-md bg-white'>
               <input 
                  type='text'
                  placeholder='Ex: iPhone XS Max com garantia'
                  className='pl-4' 
               />
               <MagnifyingGlassIcon className='absolute top-3 right-5 w-6 cursor-pointer text-zinc-600' />
            </div>

            <article className='grid grid-cols-3 w-full gap-x-14 p-6 rounded-lg shadow bg-white'>
               <div className='col-span-3'>
                  <h4 className='text-lg font-semibold'>Anúncios</h4>
                  <span className='tracking-wide'>Encontrados 200 anúncios</span>
               </div>
               <div className='flex col-span-3 w-full gap-x-14 mt-1'>
                  <Card
                     image={localImage}
                     title='Produto x'
                     subtitle='R$ 430.000,00' 
                  />
                  <Card
                     image={localImage}
                     title='Produto x'
                     subtitle='R$ 430.000,00' 
                  />
                  <Card
                     image={localImage}
                     title='Produto x'
                     subtitle='R$ 430.000,00' 
                  />
               </div>
            </article>
         </section>
      </main>
   );
}

export default List;