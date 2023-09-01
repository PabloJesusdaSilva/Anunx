const Header = () => {
  return (
    <header className="flex justify-center w-full h-16 bg-zinc-900">
      <nav className=" flex items-center p-2">
        <ul className="grid grid-cols-2 items-center md:gap-x-96 sm:gap-28">
          <li className="text-lg text-white">Anunx</li>
          <li>
            <button className="py-1 px-4 bg-zinc-900 border-2 rounded-md border-zinc-700 text-white">
              Anunciar e Vender
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;