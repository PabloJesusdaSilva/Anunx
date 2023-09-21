import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import localImage from '../../public/bike.jpg';

const Home = () => {
  return (
    <main className='flex flex-col items-center w-full'>
      <h1 className='sm:text-3xl mt-6 md:mt-10 mb-6 text-4xl'>O que deseja encontrar?</h1>
      <div className='sm: w-[330px] md:w-[600px] h-12'>
         <input 
            type='text'
            placeholder='Ex: iPhone 12 com garantia'
            className='w-full h-full pl-4 rounded-md shadow-md'
         />
         <MagnifyingGlassIcon className='relative -top-9 -right-[550px] w-6 text-zinc-600' />
      </div>

      <section className='flex flex-col items-center mt-14'>
        <h2 className='text-3xl'>Destaques</h2>

        <div className='grid sm:grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-6 mt-6 tracking-wide'>
          <article>
              <Image className='rounded-t-md' width={200} height={100} src={localImage} alt='foto do produto à venda' />

              <div className='grid grid-cols-2 p-3 shadow-xl bg-white rounded-b-md'>
                <h4 className='col-span-2 text-lg font-bold '>Produto x</h4>
                <span className='col-span-2 text-sm '>R$60,00</span>
              </div>
          </article>
          <article>
            <Image className='rounded-t-md' width={200} height={100} src={localImage} alt='foto do produto à venda' />

            <div className='grid grid-cols-2 p-3 shadow-xl bg-white rounded-b-md'>
              <h4 className='col-span-2 text-lg font-bold '>Produto x</h4>
              <span className='col-span-2 text-sm '>R$60,00</span>
            </div>
          </article>
          <article>
            <Image className='rounded-t-md' width={200} height={100} src={localImage} alt='foto do produto à venda' />

            <div className='grid grid-cols-2 p-3 shadow-xl bg-white rounded-b-md'>
              <h4 className='col-span-2 text-lg font-bold '>Produto x</h4>
              <span className='col-span-2 text-sm '>R$60,00</span>
            </div>
          </article>
        </div>
      </section>
   </main>
  );
}

export default Home;
