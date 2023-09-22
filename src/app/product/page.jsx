"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import localImage from '../../../public/jaguar.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Product = () => {
   const data = [
      {id: '1', image: localImage},
      {id: '2', image: localImage},
      {id: '3', image: localImage},
      {id: '4', image: localImage},
   ];

   return(
      <main className='flex justify-center w-full'>
         <section className='flex w-4/6'>
            <article className='w-4/6'>
               <div className='p-4 rounded-md shadow-md bg-white'>
                  <Swiper
                     cssMode={true}
                     navigation={true}
                     pagination={true}
                     mousewheel={true}
                     keyboard={true}
                     modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  >
                     {
                        data.map(item => (
                           <SwiperSlide key={item.id}>
                              <Image 
                                 src={item.image} 
                                 alt='foto do produto' 
                                 width={200} 
                                 height={200} 
                                 className='w-full h-full rounded bg-cover'
                              />
                           </SwiperSlide>
                        ))
                     }
                  </Swiper>
               </div>

               <div className='flex flex-col w-full my-6 p-4 rounded-md shadow-md bg-white'>
                  <span className='text-sm text-zinc-600'>Publicado 22 de setembro de 2023</span>
                  <h2 className='mt-4 mb-3 text-3xl'>Jaguar XE 2.0 D R-Sport Aut.</h2>
                  <span className='text-2xl font-bold'>R$ 50.000,00</span>
                  <span className='w-20 mt-4 p-2 text-xs text-center rounded-full bg-zinc-300'>Categoria</span>
               </div>

               <div className='w-full p-4 rounded-md shadow-md bg-white'>
                  <h3 className='text-lg font-semibold'>Descrição</h3>
                  <p className='text-zinc-700 tracking-wide leading-6'>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium necessitatibus facilis quidem placeat assumenda dolore. Iusto cum corporis nobis ab, tenetur distinctio cumque veritatis id dolor debitis incidunt qui ipsa.
                  </p>
               </div>
            </article>
            
            <article className='flex flex-col items-center w-2/6 ml-6'>
               <div className='grid grid-col-2 w-full mb-6 p-4 rounded-lg shadow-md tracking-wide bg-white'>
                  <span className='flex items-center justify-center col-start-1 w-12 h-12 rounded-full bg-zinc-400'>P</span>
                  <h4 className='col-end-3 mt-1'>Pablo Jesus</h4>
                  <span className='col-end-3 -mt-6 text-sm text-zinc-400'>pablojesus@gmail.com</span>
               </div>

               <div className='w-full p-4 rounded-lg shadow-md bg-white'>
                  <h4>Localização</h4>
               </div>
            </article>
         </section>
      </main>
   );
}

export default Product;