'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useProductDetailsDataLoad } from '@/hooks/useProduct';
import StarRating from '@/components/atoms/StarRating';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === 'string' ? params.id : params.id?.[0] ?? '';
  const { data: product, isLoading, isError, error } = useProductDetailsDataLoad(id);

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-10 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="animate-pulse w-full max-w-2xl space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto" />
          <div className="h-64 bg-gray-200 rounded" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-5 bg-gray-200 rounded" />
            <div className="h-5 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-10 text-center">
        <p className="text-red-600 mb-4">
          {isError && error instanceof Error ? error.message : 'Product not found.'}
        </p>
        <Link
          href="/"
          className="text-nav-active hover:underline font-medium"
        >
          ← Back to products
        </Link>
      </div>
    );
  }

  const mainImage = product.thumbnail;

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-10 font-abel">
      <div className="mb-6">
        <Button
          onClick={() => router.back()}
          variant="success"
          size="md"
          disabled={false}
        >
          ← Back to products
        </Button>
      </div>

      <Typography font='inter' size={30} color='black' weight={500}>{product.title}</Typography>

      {mainImage && (
        <div className="relative w-full aspect-video max-h-[400px] rounded-lg overflow-hidden bg-[#1f2937] mb-8">
          <Image
            src={mainImage}
            alt={product.title}
            fill
            className="object-contain h-[250px] w-[474px]"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <Typography
            font='inter'
            size={16}
            color='black'
            weight={400}>
            Price :
            <Typography
              font='inter'
              size={16}
              as='span'
              color='green'
              weight={500}>
              {product.price}$
            </Typography>
          </Typography>
          <Typography
            font='inter'
            size={16}
            color='black'
            weight={400}>
            Rating : <StarRating rating={product.rating} />
          </Typography>
          <Typography
            font='inter'
            size={16}
            as='span'
            color='black'
            weight={400}>
            Brand :
            <Typography as='span' font='inter' size={16} color='green' weight={400}>{product.brand}</Typography>
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            font='inter'
            size={16}
            as='span'
            color='black'
            weight={400}>
            Discount Percentage :
            <Typography as='span' font='inter' size={16} color='green' weight={500}>{product.discountPercentage}%</Typography>
          </Typography>
          <Typography
            font='inter'
            size={16}
            as='span'
            color='black'
            weight={400}>
            Stock :
            <Typography as='span' font='inter' size={16} color='green' weight={500}>{product.stock}</Typography>
          </Typography>

          <Typography
            font='inter'
            size={16}
            as='span'
            color='black'
            weight={400}>
            Category :
            <Typography as='span' font='inter' size={16} color='green' weight={500}>{product.category}</Typography>
          </Typography>
        </div>
      </div>

      <section className="mb-10">
        <Typography font='inter' size={16} color='black' weight={500}>Product Description</Typography>
        <Typography font='inter' size={16} color='gray' weight={400}>
          {product.description}
        </Typography>
      </section>

      {product.images?.length > 0 && (
        <section>
          <Typography font='inter' size={16} color='black' weight={500}>Product Images</Typography>
          <div className="flex flex-wrap gap-4">
            {product.images?.map((src, index) => (
              <div
                key={index}
                className="relative w-32 h-32 rounded-lg overflow-hidden border border-[#e5e7eb] bg-[#f9fafb] shrink-0"
              >
                <Image
                  src={src}
                  alt={`${product.title} - image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
