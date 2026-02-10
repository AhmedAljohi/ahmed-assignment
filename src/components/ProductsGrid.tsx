'use client'
import { useRouter } from 'next/navigation';
import Card from './Card';
import { useProductDataLoad } from '@/hooks/useProduct';
import Searchbar from './Searchbar';
import { useState } from 'react';
import Typography from './Typography';

const ProductsGrid = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useProductDataLoad(searchQuery);
  return (
    <main className='flex flex-col w-full'>
      <section className='flex items-center'>
        <Searchbar value={searchQuery} onChange={setSearchQuery} className='w-[739px] mx-auto mt-9 mb-6' />
      </section>
      <section className='flex justify-center pb-6'>
        <div className='flex justify-start mb-8 w-[739px]'>
          <Typography as='span' font='inter' size={16} color='black' weight={400}>
            Total results count:
          </Typography>
          <Typography as='span' font='inter' size={16} color='green' weight={400}>
            {data?.total}
          </Typography>
        </div>
      </section>
      <section className='flex justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.products?.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              thumbnail={product.thumbnail}
              onClick={() => router.push(`/products/${product.id}`)} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductsGrid