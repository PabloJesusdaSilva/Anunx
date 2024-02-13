import Image from 'next/image';

import Card from '@/components/Card';
import localImage from '../../images/bike.jpg';

const Dashboard = () => {
   return(
      <main className='flex flex-col items-center w-full'>
        <h1 className='text-5xl'>Meus Anúncios</h1>

        <button className='mt-8 py-2 px-5 rounded-md uppercase text-white bg-zinc-950'>
          Publicar novo anúncio
        </button>

        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-x-6 mt-16 tracking-wide'>
          <Card
            image={localImage}
            title='Produto y'
            subtitle='R$ 70,00'
            actions={
              <>
                <button className='col-span-1 -ml-11 mt-5'>Editar</button>
                <button className='mt-5'>Remover</button>
              </>
            } 
          />
          <Card
            image={localImage}
            title='Produto y'
            subtitle='R$ 70,00'
            actions={
              <>
                <button className='col-span-1 -ml-11 mt-5'>Editar</button>
                <button className='mt-5'>Remover</button>
              </>
            } 
          />
          <Card
            image={localImage}
            title='Produto y'
            subtitle='R$ 70,00'
            actions={
              <>
                <button className='col-span-1 -ml-11 mt-5'>Editar</button>
                <button className='mt-5'>Remover</button>
              </>
            } 
          />
        </div>
      </main>
   );
}

export default Dashboard;