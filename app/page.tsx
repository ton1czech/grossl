'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  return (
    <main className='p-8 md:p-16 h-[90vh] max-h-[90vh] md:h-screen md:max-h-screen overflow-hidden flex flex-col justify-between'>
      <div className='flex flex-col md:gap-20 md:flex-row md:justify-between md:text-lg'>
        <div className='order-2 md:order-1'>
          <h1
            className={cn(
              'text-lg md:text-2xl font-semibold my-10 md:mt-0 md:mb-6 transition duration-300 text-zinc-300',
              isHovered ? 'opacity-50' : 'opacity-100'
            )}
          >
            Dominik is a business minded professional lifestyle content creator,{' '}
            <br className='hidden md:block' />
            specializing in social media and marketing.
          </h1>
          <div className='flex flex-col text-zinc-300'>
            <Link
              href='mailto:contact@dominikgrossl.com'
              onMouseEnter={e => {
                setIsHovered(true)
                setText(e.currentTarget.innerText)
              }}
              onMouseLeave={() => {
                setIsHovered(false)
                setText('')
              }}
              className={cn(
                'transition duration-300',
                isHovered && text !== 'contact@dominikgrossl.com'
                  ? 'opacity-50'
                  : 'opacity-100'
              )}
            >
              contact@dominikgrossl.com
            </Link>
            <Link
              href='tel:+420739830034'
              onMouseEnter={e => {
                setIsHovered(true)
                setText(e.currentTarget.innerText)
              }}
              onMouseLeave={() => {
                setIsHovered(false)
                setText('')
              }}
              className={cn(
                'transition duration-300',
                isHovered && text !== '+420 739 830 034'
                  ? 'opacity-50'
                  : 'opacity-100'
              )}
            >
              +420 739 830 034
            </Link>
          </div>
        </div>

        <div className='order-1 md:order-2 flex flex-col md:text-right text-zinc-300'>
          <Link
            href='/about'
            onMouseEnter={e => {
              setIsHovered(true)
              setText(e.currentTarget.innerText)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setText('')
            }}
            className={cn(
              'transition duration-300',
              isHovered && text !== 'About' ? 'opacity-50' : 'opacity-100'
            )}
          >
            About
          </Link>
          <Link
            href='https://www.instagram.com/dominik_grossl/'
            target='_blank'
            onMouseEnter={e => {
              setIsHovered(true)
              setText(e.currentTarget.innerText)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setText('')
            }}
            className={cn(
              'transition duration-300',
              isHovered && text !== 'Instagram' ? 'opacity-50' : 'opacity-100'
            )}
          >
            Instagram
          </Link>
          <Link
            href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn:li:fsd_profile:ACoAADRJzjMBBRG3KMTYxuBXvyVNId6aFenJhNg&keywords=dominik%20gr%C3%B6ssl&origin=RICH_QUERY_SUGGESTION&position=1&searchId=0d495397-767d-47b2-9c4d-e3d33ceb3852&sid=wai&spellCorrectionEnabled=false'
            target='_blank'
            onMouseEnter={e => {
              setIsHovered(true)
              setText(e.currentTarget.innerText)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setText('')
            }}
            className={cn(
              'transition duration-300',
              isHovered && text !== 'LinkedIn' ? 'opacity-50' : 'opacity-100'
            )}
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <div>
        <img
          src='/hero.png'
          alt='grössl'
          className={cn(
            'w-full transition duration-300',
            isHovered ? 'opacity-30' : 'opacity-100'
          )}
        />

        <p
          className={cn(
            'pt-5 md:pt-10 text-[8px] md:text-[10px] text-center text-zinc-500 transition duration-300',
            isHovered ? 'opacity-50' : 'opacity-100'
          )}
        >
          &copy; {new Date().getFullYear()} Dominik Grössl | ICO: 14184397 | 345
          06, Němčice 26
        </p>
      </div>
    </main>
  )
}
