import Image from 'next/image';

import localImage from '../../../public/bike.jpg';

const Dashboard = () => {
   return(
      <main className='flex flex-col items-center w-full mt-14'>
        <h1 className='text-5xl'>Meus Anúncios</h1>

        <button className='mt-8 py-2 px-5 rounded-md uppercase text-white bg-zinc-950'>
          Publicar novo anúncio
        </button>

        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-x-6 mt-16 tracking-wide'>
          <article>
            <Image className='rounded-t-md' width={200} height={100} src={localImage} alt='foto do produto à venda' />

            <div className='grid grid-cols-2 p-3 shadow-xl bg-white rounded-b-md'>
              <h4 className='col-span-2 text-lg font-bold '>Produto x</h4>
              <span className='col-span-2 text-sm '>R$60,00</span>

              <button className='col-span-1 -ml-11 mt-5'>Editar</button>
              <button className='mt-5'>Remover</button>
            </div>
          </article>
          <article>
            <Image className='rounded-t-md' width={200} height={100} src={localImage} alt='foto do produto à venda' />

            <div className='grid grid-cols-2 p-3 shadow-xl bg-white rounded-b-md'>
              <h4 className='col-span-2 text-lg font-bold '>Produto x</h4>
              <span className='col-span-2 text-sm '>R$60,00</span>

              <button className='col-span-1 -ml-11 mt-5'>Editar</button>
              <button className='mt-5'>Remover</button>
            </div>
          </article>
          <article>
            <Image className='rounded-t-md' width={200} height={100} src={localImage} alt='foto do produto à venda' />

            <div className='grid grid-cols-2 p-3 shadow-xl bg-white rounded-b-md'>
              <h4 className='col-span-2 text-lg font-bold '>Produto x</h4>
              <span className='col-span-2 text-sm '>R$60,00</span>

              <button className='col-span-1 -ml-11 mt-5'>Editar</button>
              <button className='mt-5'>Remover</button>
            </div>
          </article>
        </div>
      </main>
   );
}

export default Dashboard;