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
    <main className='relative flex flex-col justify-between p-8 md:h-screen md:max-h-screen md:min-h-screen md:overflow-hidden md:p-16'>
      <div
        style={{ backgroundImage: `url(/grain.webp)` }}
        className='absolute inset-0 -z-10 opacity-10'
      />

      <div className='grid gap-10 lg:grid-cols-[1fr_2.5fr] 2xl:grid-cols-[1fr_2.1fr]'>
        <div className='flex flex-col gap-2'>
          <motion.div
            // initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered && text !== 'Home' ? '50%' : '100%',
              y: 0,
            }}
            transition={{
              // delay: isInitialRender ? 2 : 0,
              // duration: isInitialRender ? 0.7 : 0.35,
              duration: 0.35,
            }}
            className='w-min'
          >
            <Link
              href='/'
              onMouseEnter={(e) => {
                setIsHovered(true)
                setText(e.currentTarget.innerText)
              }}
              onMouseLeave={() => {
                setIsHovered(false)
                setText('')
              }}
              className='flex items-center gap-2 text-sm text-zinc-300'
            >
              <ArrowLeft size={16} />
              Home
            </Link>
          </motion.div>

          <motion.img
            src='/about.webp'
            alt='portrait'
            // initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: isHovered ? '50%' : '100%', scale: 1 }}
            transition={{
              // delay: isInitialRender ? 0.3 : 0,
              // duration: isInitialRender ? 1.5 : 0.35,
              duration: 0.35,
            }}
          />
        </div>

        <div className='flex flex-col justify-between gap-8 text-justify lg:text-lg 2xl:text-xl'>
          <div>
            <motion.p
              // initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? '50%' : '100%', y: 0 }}
              transition={{
                // delay: isInitialRender ? 2.5 : 0,
                // duration: isInitialRender ? 0.7 : 0.35,
                duration: 0.35,
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
              // initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? '50%' : '100%', y: 0 }}
              transition={{
                // delay: isInitialRender ? 2.7 : 0,
                // duration: isInitialRender ? 0.7 : 0.35,
                duration: 0.35,
              }}
            >
              His passion for travel and photography has brought him to capture
              breathtaking destinations, while his friendly character and
              logical approach always put his clients and models at ease.
              Skilled in his craft, Dominik combines creativity with a keen eye
              for detail, making every piece of content stand out.
            </motion.p>
          </div>

          <div className='flex flex-col text-base text-zinc-300'>
            <motion.div
              // initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity:
                  isHovered && text !== 'dominikgrossl77@gmail.com'
                    ? '50%'
                    : '100%',
                x: 0,
              }}
              transition={{
                // delay: isInitialRender ? 3 : 0,
                // duration: isInitialRender ? 0.7 : 0.35,
                duration: 0.35,
              }}
              className='w-min'
            >
              <p
                onMouseEnter={(e) => {
                  setIsHovered(true)
                  setText(e.currentTarget.innerText)
                }}
                onMouseLeave={() => {
                  setIsHovered(false)
                  setText('')
                }}
              >
                dominikgrossl77@gmail.com
              </p>
            </motion.div>
            <motion.div
              // initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity:
                  isHovered && text !== '+420 739 830 034' ? '50%' : '100%',
                x: 0,
              }}
              transition={{
                // delay: isInitialRender ? 3.2 : 0,
                // duration: isInitialRender ? 0.7 : 0.35,
                duration: 0.35,
              }}
              className='w-min'
            >
              <p
                onMouseEnter={(e) => {
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
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className='mt-10'>
        <motion.img
          src='/footer.webp'
          alt='footer'
          animate={{ opacity: isHovered ? '50%' : '100%' }}
          transition={{
            duration: 0.35,
          }}
          className='mx-auto w-[350px] md:w-[450px]'
        />
      </footer>
    </main>
  )
}
