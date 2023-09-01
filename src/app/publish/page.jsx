const Publish = () => {
  return (
      <main className='flex flex-col items-center w-full mt-12 mb-10'>
        <h2 className='text-5xl'>
          Publicar Anúncio
        </h2>
        <h5 className='mt-2 text-lg'>
          Quanto mais detalhado, melhor!
        </h5>

        <div className='w-6/12 mt-10 bg-white px-4 py-6 rounded-md shadow-lg'>
          <h6 className='mb-1 text-lg'>Título do Anúncio</h6>
          <input className='w-full p-1 border-b-2 border-gray-200' type='text' placeholder='Ex.: Bike aro 18 com garantia' />

          <h6 className='mt-6 mb-1 text-lg'>Categoria</h6>
          <select className='w-full py-2 text-gray-400 border-b-2 border-gray-200' name='category'>
            <option value='0'>Selecione</option>
            <option value='1'>Bebê e Criança</option>
            <option value='2'>Agricultura</option>
            <option value='3'>Moda</option>
            <option value='4'>Carros, Motos e Barcos</option>
            <option value='5'>Serviços</option>
            <option value='6'>Lazer</option>
            <option value='7'>Animais</option>
            <option value='7'>Moveis, Casas, Jardim</option>
            <option value='7'>Imóveis</option>
            <option value='7'>Equipamentos e Ferramentas</option>
            <option value='7'>Celulares e Tablets</option>
            <option value='7'>Esportes</option>
            <option value='7'>Tecnologia</option>
            <option value='7'>Emprego</option>
            <option value='7'>Outros</option>
          </select>
        </div>

        <div className='w-6/12 h-auto mt-10 bg-white px-4 py-6 rounded-md shadow-lg'>
          <h6 className='mb-3 text-lg'>Imagens</h6>
          <p className='text-sm text-gray-600'>A primeira imagem é a foto principal do seu anúncio</p>

          <div className='flex'>
            <div className='w-40 h-2/6 mt-3 py-8 px-4 border-dashed border-2 border-zinc-950 text-center text-xs bg-zinc-300 cursor-pointer'>
              <p>Clique para adicionar ou arraste a imagem para aqui.</p>
            </div>
            <div className='w-40 h-2/6'>
            </div>
          </div>
        </div>

        <div className='w-6/12 mt-10 px-4 py-6 rounded-md shadow-lg bg-white '>
          <h6 className='mb-3 text-lg'>Descrição</h6>
          <textarea className='w-full border-2 border-gray-200 rounded resize-none' name='description' rows='6'></textarea>
        </div>

        <div className='w-6/12 mt-10 px-4 py-6 rounded-md shadow-lg bg-white'>
          <h6 className='mb-3 text-lg'>Dados de Contanto</h6>
          <input className='w-full p-2 border-2 border-gray-200 rounded' type="email" placeholder="Email"/>
          <input className='w-full my-3 p-2 border-2 border-gray-200 rounded' type="text" placeholder="Nome"/>
          <input className='w-full p-2 border-2 border-gray-200 rounded' type="tel" placeholder="Telefone"/>
        </div>

        <div className='w-6/12 flex justify-end mt-6'>
          <button className='py-2 px-5 rounded-md uppercase bg-zinc-950 text-white'>Publicar anúncio</button>
        </div>
      </main>
  );
}

export default Publish;