import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false);

  const openUserMenu = () => {
    setAnchorUserMenu(!anchorUserMenu);
  }

  return (
    <header className='flex justify-center w-full h-16 shadow-md shadow-gray-400 bg-zinc-900'>
      <nav className=' flex items-center p-2'>
        <ul className='grid grid-cols-2 items-center gap-x-96'>
          <li className='text-lg text-white'>Anunx</li>

          <li className='flex items-center cursor-pointer'>
            <Link href='../publish' passHref className='mr-6'>
              <button className='py-1 px-4 bg-zinc-900 border-2 rounded-md border-zinc-700 text-white'>
                Anunciar e Vender
              </button>
            </Link>

            <div
              className='flex items-center gap-2'
              onClick={openUserMenu}
            >
              {
                true === false
                  ? <Image src='' alt='foto do usúario' />
                  : <UserCircleIcon className='w-7 text-zinc-300' />
              }
              <h6 className='text-zinc-200'>Pablo Jesus</h6>
            </div>
          </li> 

          {
            anchorUserMenu 
              ? <nav className='transition-all absolute top-14 right-32 w-54 py-2 px-1 rounded shadow-md bg-zinc-50'>
                  <ul>
                    <Link href='../dashboard' passHref>
                      <li className='p-2 transition-all delay-300 hover:bg-slate-100'>Meus anúncios</li>
                    </Link>
                    <Link href='../publish' passHref>
                      <li className='my-2 p-2 transition-all delay-300 hover:bg-slate-100'>Publicar novo anúncio</li>
                    </Link>
                    <hr />
                    <Link href='../' passHref>
                      <li className='mt-1 p-2 transition-all delay-300 hover:bg-slate-100'>Sair</li>
                    </Link>
                  </ul>
                </nav>
              : null
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;