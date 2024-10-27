'use client'

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
    }, 4000)
  }, [])

  return (
    <main className='relative flex h-[90vh] max-h-[90vh] flex-col justify-between overflow-hidden p-8 md:h-screen md:max-h-screen md:p-16'>
      <div
        style={{ backgroundImage: `url(/grain.webp)` }}
        className='absolute inset-0 -z-10 opacity-10'
      />

      <div className='flex flex-col md:flex-row md:justify-between md:gap-20 md:text-lg'>
        <div className='order-2 md:order-1'>
          <motion.h1
            // initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? '50%' : '100%', y: 0 }}
            transition={{
              // delay: isInitialRender ? 2.5 : 0,
              // duration: isInitialRender ? 0.7 : 0.35,
              duration: 0.35,
            }}
            className='my-10 text-[16px] font-semibold md:mb-6 md:mt-0 md:text-2xl'
          >
            <span className='hidden md:block'>
              Dominik is a business minded professional lifestyle content
              creator,
              <br />
              specializing in social media and marketing.
            </span>

            <span className='md:hidden'>
              Dominik is a business minded professional lifestyle content
              creator, specializing in social media.
            </span>
          </motion.h1>
        </div>

        <motion.div
          animate={{
            opacity: isHovered && text !== 'links' ? '50%' : '100%',
            x: 0,
          }}
          transition={{
            // delay: isInitialRender ? 3 : 0,
            // duration: isInitialRender ? 0.7 : 0.35,
            duration: 0.35,
          }}
          onMouseEnter={(e) => {
            setIsHovered(true)
            setText('links')
          }}
          onMouseLeave={() => {
            setIsHovered(false)
            setText('')
          }}
          className='order-1 flex flex-col text-zinc-300 md:order-2 md:text-right'
        >
          <Link
            href='/about'
            className='duration-[0.3s] transition hover:opacity-50'
          >
            About
          </Link>
          <Link
            href='https://www.instagram.com/dominik_grossl/'
            target='_blank'
            className='duration-[0.3s] transition hover:opacity-50'
          >
            Instagram
          </Link>
          <Link
            href='https://www.linkedin.com/in/dominik-grössl/'
            target='_blank'
            className='duration-[0.3s] transition hover:opacity-50'
          >
            LinkedIn
          </Link>
        </motion.div>
      </div>

      <div>
        <motion.img
          src='/hero.webp'
          alt='grossl'
          // initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: isHovered ? '50%' : '100%', scale: 1 }}
          transition={{
            // delay: isInitialRender ? 0.5 : 0,
            // duration: isInitialRender ? 2 : 0.35,
            duration: 0.35,
          }}
          className='origin-top'
        />
        {/* <h1 className='text-[450px] font-bold'>Grössl</h1> */}

        <footer className='mt-10'>
          <motion.img
            src='/footer-mobile.webp'
            alt='footer'
            animate={{ opacity: isHovered ? '50%' : '100%' }}
            transition={{
              duration: 0.35,
            }}
            className='mx-auto w-[270px] md:hidden'
          />
          <motion.img
            src='/footer-desktop.webp'
            alt='footer'
            animate={{ opacity: isHovered ? '50%' : '100%' }}
            transition={{
              duration: 0.35,
            }}
            className='mx-auto hidden md:block md:w-[450px]'
          />
          {/* <p className='pt-5 text-center text-[12.80px] text-zinc-500 md:pt-10 md:text-xs'>
            &copy; {new Date().getFullYear()} Dominik Grössl <br />
            IČO: 14184397 | 345 06, Němčice 26, Česká republika
          </p> */}
        </footer>
      </div>
    </main>
  )
}
