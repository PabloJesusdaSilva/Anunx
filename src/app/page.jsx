import TemplateDefault from '@/templates/Default';

const Home = () => {
  return (
    <TemplateDefault>
      <main className='flex flex-col items-center w-full mt-16'>
        <h1 className='text-5xl'>Meus Anúncios</h1>

        <button className='mt-8 py-2 px-5 rounded-md text-md uppercase text-white bg-zinc-950'>
          Publicar novo anúncio
        </button>
      </main>
    </TemplateDefault>
  );
}

export default Home;
