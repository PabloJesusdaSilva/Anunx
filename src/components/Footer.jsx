import Link from 'next/link';

const Footer = () => {
   return (
      <footer className='flex justify-center w-full h-28'>
         <nav className='w-3/5 border-t-2 border-zinc-300'>
            <ul className='flex justify-between mt-4'>
               <Link href='' className='transition-all hover:underline'>
                  <li>Ajuda e contato</li>
               </Link>
               <Link href='' className='transition-all hover:underline'>
                  <li>Dicas de segurança</li>
               </Link>
               <Link href='' className='transition-all hover:underline'>
                  <li>Anúncie e venda</li>
               </Link>
               <Link href='' className='transition-all hover:underline'>
                  <li>Plano profissional</li>
               </Link>
            </ul>
         </nav>
      </footer>
   );
}

export default Footer