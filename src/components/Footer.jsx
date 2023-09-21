import Link from 'next/link';

const Footer = () => {
   return (
      <footer className='flex justify-center w-full h-28 mt-16'>
         <nav className='w-3/5 border-t-2 border-zinc-300'>
            <ul className='flex justify-between mt-4'>
               <Link href=''>
                  <li>Ajuda e contato</li>
               </Link>
               <Link href=''>
                  <li>Dicas de segurança</li>
               </Link>
               <Link href=''>
                  <li>Anúncie e venda</li>
               </Link>
               <Link href=''>
                  <li>Plano profissional</li>
               </Link>
            </ul>
         </nav>
      </footer>
   );
}

export default Footer