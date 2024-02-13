import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import Card from '@/components/Card';
import localImage from '../app/images/bike.jpg';

const Home = () => {
  return (
    <main className='flex flex-col items-center w-full'>
      <h1 className='mb-6 text-4xl'>O que deseja encontrar?</h1>
      <div className='sm: w-[330px] md:w-[600px] h-12'>
         <input 
            type='text'
            placeholder='Ex: iPhone 12 com garantia'
            className='w-full h-full pl-4 rounded-md shadow-md outline-zinc-300'
         />
         <MagnifyingGlassIcon className='relative -top-9 -right-[550px] w-6 cursor-pointer text-zinc-600' />
      </div>

      <section className='flex flex-col items-center mt-14'>
        <h2 className='text-3xl'>Destaques</h2>

        <div className='grid sm:grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-6 mt-6 tracking-wide'>
          <Card 
            image={localImage}
            title='Produto x'
            subtitle='R$ 60,00'
          />
          <Card 
            image={localImage}
            title='Produto x'
            subtitle='R$ 60,00'
          />
          <Card 
            image={localImage}
            title='Produto x'
            subtitle='R$ 60,00'
          />
        </div>
      </section>
   </main>
  );
}

export default Home;
