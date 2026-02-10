import Typography from '@/components/atoms/Typography'
import Image from 'next/image'

const ABOUT_HEADING = 'About NHC National Housing Company'
const ABOUT_TEXT =
  'NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437 AH to be the investment arm of the initiatives and programs of the Ministry of Municipal and Rural Affairs and Housing in the real estate, residential and commercial sectors. Then the Company came under state ownership in May of the year 2020, after which it entered a new stage in its journey and became an effective enabler of solutions for the Saudi real estate market. To become a leader in the real estate development sector and enable the public and private sectors to develop strategic partnerships with them. NHC is also keen to provide quality projects across urban communities with modern designs and various housing solutions at reasonable prices that keep pace with the aspirations of the future generation and achieve quality of life, in partnership with experienced and efficient real estate developers.'

const STRATEGY_HEADING = 'National Housing Strategy'
const STRATEGY_TEXT =
  'The NHC Strategy aims for the Company to be an enabler of the real estate supply system by empowering the private sector to develop the real estate market and improve the professionalism of the services provided in it, thus offering broader horizons for the Company in enhancing the sustainability of its business and the work of the real estate supply system.'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-full font-abel">
      <div className="mx-auto max-w-[880px] px-6 md:px-10 pt-12 md:pt-16 pb-16 md:pb-24">
        <div className="flex flex-col items-center justify-center gap-0 mb-14 md:mb-20">
          <Image
            src="/assets/logo.svg"
            alt="NHC Innovation"
            width={377}
            height={199}
            priority
          />
        </div>

        <section className="mb-12 md:mb-16">
          <Typography font='abel' size={16} color='green' weight={400}>{ABOUT_HEADING}</Typography>

          <Typography font='abel' size={16} color='black' weight={400}>
            {ABOUT_TEXT}
          </Typography>
        </section>

        <section>
          <Typography font='abel' size={16} color='green' weight={400}>{STRATEGY_HEADING}</Typography>
          <Typography font='abel' size={16} color='black' weight={400}>
            {STRATEGY_TEXT}
          </Typography>
        </section>
      </div>
    </div>
  )
}
