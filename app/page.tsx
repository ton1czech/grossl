import Link from 'next/link'

export default function Page() {
  return (
    <main className='p-8 md:p-16 h-screen max-h-screen overflow-hidden flex flex-col justify-between'>
      <div className='flex flex-col md:gap-20 md:flex-row md:justify-between md:text-lg'>
        <div className='order-2 md:order-1'>
          <h1 className='text-lg md:text-2xl font-semibold my-10 md:mt-0 md:mb-6'>
            Dominik is a business minded professional lifestyle content creator,{' '}
            <br className='hidden md:block' />
            specializing in social media and marketing.
          </h1>
          <div className='flex flex-col text-zinc-300'>
            <Link href='mailto:contact@dominikgrossl.com'>
              contact@dominikgrossl.com
            </Link>
            <Link href='tel:+420739830034'>+420 739 830 034</Link>
          </div>
        </div>

        <div className='order-1 md:order-2 flex flex-col text-zinc-300 md:text-right'>
          <Link href='/about'>About</Link>
          <Link href='https://www.instagram.com/dominik_grossl/'>
            Instagram
          </Link>
          <Link href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn:li:fsd_profile:ACoAADRJzjMBBRG3KMTYxuBXvyVNId6aFenJhNg&keywords=dominik%20gr%C3%B6ssl&origin=RICH_QUERY_SUGGESTION&position=1&searchId=0d495397-767d-47b2-9c4d-e3d33ceb3852&sid=wai&spellCorrectionEnabled=false'>
            LinkedIn
          </Link>
        </div>
      </div>

      <div>
        <img src='/hero.png' alt='grössl' className='w-full' />
        <p className='pt-5 md:pt-10 text-[8px] md:text-[10px] text-zinc-500 text-center'>
          &copy; {new Date().getFullYear()} Dominik Grössl | ICO: 14184397 | 345
          06, Němčice 26
        </p>
      </div>
    </main>
  )
}
