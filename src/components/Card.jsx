import Image from 'next/image';

const Card = ({ image, title, subtitle, actions }) => {
   return(
      <article>
         <Image className='rounded-t-md' width={200} height={100} src={image} alt='foto do produto à venda' />

         <div className='grid grid-cols-2 p-3 shadow-xl bg-white rounded-b-md'>
            <h4 className='col-span-2 text-lg font-bold '>{title}</h4>
            <span className='col-span-2 text-sm '>{subtitle}</span>
            {
               actions 
                  ? actions
                  : null
            }
         </div>
      </article>
   );
}

export default Card;