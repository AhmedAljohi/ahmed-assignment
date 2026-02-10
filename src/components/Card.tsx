'use client'

import Image from "next/image";
import Button from "./Button";
import Typography from "./Typography";

export interface CardProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  onClick: () => void;
}



export default function Card(props: CardProps) {
  const { title, description, price, thumbnail, onClick } = props;
  return (
    <article className="w-[301px] h-[312px] p-2 flex flex-col bg-white rounded-lg border border-[#e5e7eb] shadow-[0px_4px_13px_0px_#00000040]">
      {thumbnail && (
        <div className="relative h-[156px] bg-[#1f2937] overflow-hidden">
          <Image
            src={thumbnail ?? ''}
            alt={title ?? ''}
            fill
            className="object-cover object-center h-[150px] w-full"
          />
        </div>)}

      {/* Product details */}
      <div className="flex flex-col flex-1">
        <Typography font='inter' size={20} color='green' weight={500}>
          {title ?? ''}
        </Typography>
        <Typography font='inter' size={16} color='gray' weight={400} className="line-clamp-2">
          {description ?? ''}
        </Typography>
        <div className="flex items-center justify-between mt-auto">
          <div>
            <Typography as='span' font='inter' size={16} color='gray' weight={400}>
              Price :
            </Typography>
            <Typography as='span' font='inter' size={16} color='green' weight={500}>
              {price ?? 0}$
            </Typography>
          </div>
          <Button variant="success" size="md" onClick={onClick}>More</Button>
        </div>
      </div>
    </article>
  );
}
