'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function Page() {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  return (
    <main className='p-8 md:p-16'>
      <div className='grid lg:grid-cols-[1fr_1.9fr] gap-10'>
        <div className='flex flex-col gap-2'>
          <div className='w-min'>
            <Link
              href='/'
              onMouseEnter={e => {
                setIsHovered(true)
                setText(e.currentTarget.innerText)
              }}
              onMouseLeave={() => {
                setIsHovered(false)
                setText('')
              }}
              className={cn(
                'flex items-center gap-2 text-zinc-300 text-sm transition duration-300',
                isHovered && text !== 'Home' ? 'opacity-50' : 'opacity-100'
              )}
            >
              <ArrowLeft size={16} />
              Home
            </Link>
          </div>
          <motion.img
            src='/about.jpeg'
            alt='portrait'
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? '50%' : '100%' }}
            className={cn(
              'origin-top transition duration-300',
              isHovered ? 'opacity-50' : 'opacity-100'
            )}
          />
        </div>

        <div className='flex flex-col gap-8 justify-between lg:text-lg 2xl:text-xl text-justify'>
          <div
            className={cn(
              'transition duration-300',
              isHovered ? 'opacity-50' : 'opacity-100'
            )}
          >
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
          <div className='flex flex-col text-zinc-300'>
            <div className='w-min'>
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
            </div>
            <div className='w-min'>
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
                  'transition duration-300 whitespace-nowrap',
                  isHovered && text !== '+420 739 830 034'
                    ? 'opacity-50'
                    : 'opacity-100'
                )}
              >
                +420 739 830 034
              </Link>
            </div>
            <p
              className={cn(
                'transition duration-300',
                isHovered ? 'opacity-50' : 'opacity-100'
              )}
            >
              ICO: 14184397 | 345 06, Němčice
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
