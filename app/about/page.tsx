'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Page() {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsInitialRender(false)
    }, 3400)
  }, [])

  return (
    <main className='p-8 md:p-16'>
      <div className='grid lg:grid-cols-[1fr_1.9fr] gap-10'>
        <div className='flex flex-col gap-2'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered && text !== 'Home' ? '50%' : '100%',
              y: 0,
            }}
            transition={{
              delay: isInitialRender ? 2 : 0,
              duration: isInitialRender ? 0.7 : 0.35,
            }}
            className='w-min'
          >
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
              className='flex items-center gap-2 text-zinc-300 text-sm'
            >
              <ArrowLeft size={16} />
              Home
            </Link>
          </motion.div>

          <motion.img
            src='/about.jpeg'
            alt='portrait'
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: isHovered ? '50%' : '100%', scale: 1 }}
            transition={{
              delay: isInitialRender ? 0.3 : 0,
              duration: isInitialRender ? 1.5 : 0.35,
            }}
          />
        </div>

        <div className='flex flex-col gap-8 justify-between lg:text-lg 2xl:text-xl text-justify'>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? '50%' : '100%', y: 0 }}
              transition={{
                delay: isInitialRender ? 2.5 : 0,
                duration: isInitialRender ? 0.7 : 0.35,
              }}
              className='mb-8'
            >
              Dominik is a highly motivated and business-minded digital marketer
              and professional content creator specializing in social media. He
              has been blessed with the opportunity to work with leading
              companies and talented individuals from around the world. Reliable
              and organized, he ensures that every project is executed with
              precision and dedication.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? '50%' : '100%', y: 0 }}
              transition={{
                delay: isInitialRender ? 2.7 : 0,
                duration: isInitialRender ? 0.7 : 0.35,
              }}
            >
              His passion for travel and photography has brought him to capture
              breathtaking destinations, while his friendly character and
              logical approach always put his clients and models at ease.
              Skilled in his craft, Dominik combines creativity with a keen eye
              for detail, making every piece of content stand out.
            </motion.p>
          </div>

          <div className='flex flex-col text-zinc-300'>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity:
                  isHovered && text !== 'contact@dominikgrossl.com'
                    ? '50%'
                    : '100%',
                x: 0,
              }}
              transition={{
                delay: isInitialRender ? 3 : 0,
                duration: isInitialRender ? 0.7 : 0.35,
              }}
              className='w-min'
            >
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
              >
                contact@dominikgrossl.com
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity:
                  isHovered && text !== '+420 739 830 034' ? '50%' : '100%',
                x: 0,
              }}
              transition={{
                delay: isInitialRender ? 3.2 : 0,
                duration: isInitialRender ? 0.7 : 0.35,
              }}
              className='w-min'
            >
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
                className='whitespace-nowrap'
              >
                +420 739 830 034
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isHovered ? '50%' : '100%',

                x: 0,
              }}
              transition={{
                delay: isInitialRender ? 3.4 : 0,
                duration: isInitialRender ? 0.7 : 0.35,
              }}
            >
              ICO: 14184397 | 345 06, Němčice
            </motion.p>
          </div>
        </div>
      </div>
    </main>
  )
}
