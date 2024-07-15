import Link from 'next/link'

export default function Page() {
  return (
    <main className='p-16 h-screen'>
      <div className='flex justify-between text-lg'>
        <div className='order-2 md:order-1'>
          <h1 className='text-2xl font-semibold'>
            Dominik is a business minded professional lifestyle content creator,{' '}
            <br />
            specializing in social media and marketing.
          </h1>
          <div className='mt-4 flex flex-col text-zinc-300'>
            <Link href='mailto:contact@dominikgrossl.com'>
              contact@dominikgrossl.com
            </Link>
            <Link href='tel:+420739830034'>739 830 034</Link>
          </div>
        </div>

        <div className='order-1 md:order-2 flex flex-col text-zinc-300 text-right'>
          <Link href='/about'>About</Link>
          <Link href='https://www.instagram.com/dominik_grossl/'>
            Instagram
          </Link>
          <Link href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn:li:fsd_profile:ACoAADRJzjMBBRG3KMTYxuBXvyVNId6aFenJhNg&keywords=dominik%20gr%C3%B6ssl&origin=RICH_QUERY_SUGGESTION&position=1&searchId=0d495397-767d-47b2-9c4d-e3d33ceb3852&sid=wai&spellCorrectionEnabled=false'>
            LinkedIn
          </Link>
        </div>
      </div>

      <h3 className='text-[28.8vw] font-bold text-center'>Grössl</h3>
    </main>
  )
}
