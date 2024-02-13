import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

import { TrashIcon } from '@heroicons/react/24/outline';

const FileUpload = ({ files, errors, touched, setFieldValue }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
       const newFiles = acceptedFile.map(file => {
          return Object.assign(file, {
             preview: URL.createObjectURL(file)
          })
       })

       setFieldValue('files', [
          ...files,
          ...newFiles
       ]);
    }
  })

  const handleRemoveFile = filePath => {
    const newFileState = files.filter(file => file.path !== filePath);

    setFieldValue('files', newFileState);
  }

  return (
    <>
      <label className={errors && touched ? 'text-lg font-medium text-red-500' : 'text-lg font-medium text-zinc-900'}>Imagens</label>
      <p className={errors && touched ? 'tracking-wider text-red-500' : 'tracking-wider text-zinc-900'}>
        A primeira imagem é a foto principal do seu anúncio
      </p>

      {
        errors && touched
            ? <h3 className='text-red-500 tracking-wider mt-1 text-sm'> Envie pelo menos uma foto </h3>
            : null
      }

      <div className='flex flex-wrap mt-4'>
        <article 
            {...getRootProps()}
            className='flex justify-center items-center text-center w-60 h-36 m-2 ml-0 p-3 border-2 border-dashed rounded-lg border-zinc-400 bg-zinc-200'
        >
            <input name='files' {...getInputProps()} />
            <h2 className='tracking-wider text-zinc-800'>
              Clique para adicionar ou arraste a imagem aqui.
            </h2>
        </article>

        {
            files.map((file, index) => (
              <article
                  key={file.name} 
                  className='relative w-60 h-36 m-2 group'
              >
                  <Image 
                    alt=''
                    src={file.preview}
                    width={200}
                    height={150}
                    className='object-cover w-full h-full'
                  />

                  <div
                    onClick={() => handleRemoveFile(file.path)} 
                    className='absolute flex justify-center items-center top-0 w-full h-full bg-zinc-950/50 transition-all opacity-0 group-hover:opacity-100'
                  >
                    <TrashIcon 
                        color='#FFF' 
                        className='w-10 cursor-pointer' 
                    />
                  </div>
                  
                  {
                    index === 0 ?
                        <div className='absolute bottom-0 left-0 py-1 px-2 bg-purple-800 opacity-100 rounded-tr-lg'>
                          <h2 className='text-zinc-200 tracking-wider'>
                              Principal
                          </h2>
                        </div>
                    : null
                  }
              </article>
            ))
        }
        </div>
  </>
  )
}

export default FileUpload