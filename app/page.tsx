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
    <main className='p-8 md:p-16 h-[90vh] max-h-[90vh] md:h-screen md:max-h-screen overflow-hidden flex flex-col justify-between'>
      <div className='flex flex-col md:gap-20 md:flex-row md:justify-between md:text-lg'>
        <div className='order-2 md:order-1'>
          <motion.h1
            // initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? '50%' : '100%', y: 0 }}
            transition={{
              // delay: isInitialRender ? 2.5 : 0,
              // duration: isInitialRender ? 0.7 : 0.35,
              duration: .35
            }}
            className='text-lg md:text-2xl font-semibold my-10 md:mt-0 md:mb-6'
          >
            Dominik is a business minded professional lifestyle content creator,{' '}
            <br className='hidden md:block' />
            specializing in social media and marketing.
          </motion.h1>
          <div className='flex flex-col text-zinc-300'>
            <motion.div
              // initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity:
                  isHovered && text !== 'contact@dominikgrossl.com'
                    ? '50%'
                    : '100%',
                x: 0,
              }}
              transition={{
                // delay: isInitialRender ? 3 : 0,
                // duration: isInitialRender ? 0.7 : 0.35,
                duration: .35
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
              // initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity:
                  isHovered && text !== '+420 739 830 034' ? '50%' : '100%',
                x: 0,
              }}
              transition={{
                // delay: isInitialRender ? 3.2 : 0,
                // duration: isInitialRender ? 0.7 : 0.35,
                duration: .35
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
          </div>
        </div>

        <div className='order-1 md:order-2 flex flex-col md:text-right text-zinc-300'>
          <motion.div
            // initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: isHovered && text !== 'About' ? '50%' : '100%',
              x: 0,
            }}
            transition={{
              // delay: isInitialRender ? 3 : 0,
              // duration: isInitialRender ? 0.7 : 0.35,
              duration: .35
            }}
          >
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
              onMouseEnter={e => {
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
              duration: .35
            }}
          >
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
            duration: .35
          }}
          className='origin-top'
        />

        <footer>
          <motion.p
            // initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? '50%' : '100%', y: 0 }}
            transition={{
              // delay: isInitialRender ? 4 : 0,
              // duration: isInitialRender ? 0.7 : 0.35,
              duration: .35
            }}
            className='pt-5 md:pt-10 text-[8px] md:text-xs text-center text-zinc-500'
          >
            &copy; {new Date().getFullYear()} Dominik Grössl | 345 06, Němčice 26, Česká republika | IČO: 14184397
          </motion.p>
        </footer>
      </div>
    </main>
  )
}
