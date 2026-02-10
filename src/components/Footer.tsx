import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B4332] flex flex-col justify-center border-t-2 border-b-2 font-abel h-[129px] px-14">
      <div className="border-b border-dotted border-[#F1F1F1] border-opacity-90 pb-8" />

      <div className="flex items-center justify-between mt-5">
        <div className="flex flex-wrap items-center gap-8 md:gap-12">
          <Image
            src="/assets/nhc.svg"
            alt="National Housing Company"
            width={48}
            height={32}
            className="h-8 w-auto md:h-9 shrink-0"
          />
          <Image
            src="/assets/vision2030.svg"
            alt="Vision 2030 - Kingdom of Saudi Arabia"
            width={48}
            height={32}
            className="h-8 w-auto md:h-9 shrink-0"
          />
        </div>
        <p className="text-[14px] text-white">
          All rights reserved © 2022 - Developed and operated by National Housing
        </p>
      </div>
    </footer>
  )
}
