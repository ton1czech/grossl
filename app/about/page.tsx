import Link from 'next/link'

export default function Page() {
  return (
    <main className='p-8 md:p-16'>
      <div className='grid lg:grid-cols-[1fr_1.9fr] gap-10'>
        <img src='/about.jpeg' alt='portrait' />

        <div className='flex flex-col gap-8 justify-between md:text-xl lg:text-2xl xl:text-3xl text-justify'>
          <div>
            <p className='mb-8'>
              Dominik is a highly motivated and business-minded digital marketer
              and professional content creator specializing in social media. He
              has been blessed with the opportunity to work with leading
              companies and talented individuals from around the world. Reliable
              and organized, he ensures that every project is executed with
              precision and dedication.
            </p>
            <p>
              His passion for travel and photography has brought him to capture
              breathtaking destinations, while his friendly character and
              logical approach always put his clients and models at ease.
              Skilled in his craft, Dominik combines creativity with a keen eye
              for detail, making every piece of content stand out.
            </p>
          </div>
          <div className='flex flex-col'>
            <Link href='mailto:contact@dominikgrossl.com'>
              contact@dominikgrossl.com
            </Link>
            <Link href='tel:+420739830034'>+420 739 830 034</Link>
            <p>ICO: 14184397 | 345 06, Němčice</p>
          </div>
        </div>
      </div>
    </main>
  )
}
