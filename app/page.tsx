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
            className='my-10 text-lg font-semibold md:mb-6 md:mt-0 md:text-2xl'
          >
            Dominik is a business minded professional lifestyle content creator,{' '}
            <br className='hidden md:block' />
            specializing in social media and marketing.
          </motion.h1>
        </div>

        <div className='order-1 flex flex-col text-zinc-300 md:order-2 md:text-right'>
          <motion.div
            // initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: isHovered && text !== 'About' ? '50%' : '100%',
              x: 0,
            }}
            transition={{
              // delay: isInitialRender ? 3 : 0,
              // duration: isInitialRender ? 0.7 : 0.35,
              duration: 0.35,
            }}
          >
            <Link
              href='/about'
              onMouseEnter={(e) => {
                setIsHovered(true)
                setText(e.currentTarget.innerText)
              }}
              onMouseLeave={() => {
                setIsHovered(false)
                setText('')
              }}
            >
              About
            </Link>
          </motion.div>
          <motion.div
            // initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: isHovered && text !== 'Instagram' ? '50%' : '100%',
              x: 0,
            }}
            transition={{
              delay: isInitialRender ? 3.2 : 0,
              duration: isInitialRender ? 0.7 : 0.35,
            }}
          >
            <Link
              href='https://www.instagram.com/dominik_grossl/'
              target='_blank'
              onMouseEnter={(e) => {
                setIsHovered(true)
                setText(e.currentTarget.innerText)
              }}
              onMouseLeave={() => {
                setIsHovered(false)
                setText('')
              }}
            >
              Instagram
            </Link>
          </motion.div>
          <motion.div
            // initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: isHovered && text !== 'LinkedIn' ? '50%' : '100%',
              x: 0,
            }}
            transition={{
              // delay: isInitialRender ? 3.4 : 0,
              // duration: isInitialRender ? 0.7 : 0.35,
              duration: 0.35,
            }}
          >
            <Link
              href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn:li:fsd_profile:ACoAADRJzjMBBRG3KMTYxuBXvyVNId6aFenJhNg&keywords=dominik%20gr%C3%B6ssl&origin=RICH_QUERY_SUGGESTION&position=1&searchId=0d495397-767d-47b2-9c4d-e3d33ceb3852&sid=wai&spellCorrectionEnabled=false'
              target='_blank'
              onMouseEnter={(e) => {
                setIsHovered(true)
                setText(e.currentTarget.innerText)
              }}
              onMouseLeave={() => {
                setIsHovered(false)
                setText('')
              }}
            >
              LinkedIn
            </Link>
          </motion.div>
        </div>
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
      </div>
    </main>
  )
}
