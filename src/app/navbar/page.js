'use client'

import LogoCarRental from '@/app/component/logo'
import { List, X } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import Button from '../component/button'
import { useEffect, useRef, useState } from 'react'
import Icons from '../component/icons'

export default function Navbar() {
  const sectionRef = useRef()
  const [showNavbarMobile, setShowNavbarMobile] = useState(false)

  const handleNavbarMobile = () => {
    setShowNavbarMobile(!showNavbarMobile)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current?.contains(event.target)) {
        if (showNavbarMobile === true) {
          setShowNavbarMobile(false)
        }
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showNavbarMobile])

  return (
    <nav className="bg-white relative flex justify-between items-center p-4">
      <LogoCarRental />

      <div className='hidden md:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <ul className=' flex items-center gap-4'>
          <li className='font-semibold text-orange transition hover:underline'>
            <Link href="/">Home</Link>
          </li>
          <li className='font-semibold text-orange transition hover:underline'>
            <Link href="#about">About</Link>
          </li>
          <li className='font-semibold text-orange transition hover:underline'>
            <Link href="#carModel">Car</Link>
          </li>
          <li className='font-semibold text-orange transition hover:underline'>
            <Link href="#testimonial">Tertimonial</Link>
          </li>
          <li className='font-semibold text-orange transition hover:underline'>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-2'>
        <div className='cursor-pointer block md:hidden'>
          <List size={30} color="#f47920" weight='bold'
            className={showNavbarMobile ? 'hidden' : 'block'}
            onClick={() => handleNavbarMobile()}
          />
          <X size={30} color="#f47920" weight='bold'
            className={showNavbarMobile ? 'block' : 'hidden'}
            onClick={() => handleNavbarMobile()}
          />
        </div>
        <div className='hidden md:flex items-center gap-3'>
          <button className='font-semibold bg-white py-2 px-5 text-black border border-orange transition hover:bg-orange hover:text-white'>Log in</button>
          <Button name="Register" />
        </div>
      </div>

      {/* NAVBAR MOBILE START */}
      <section className={showNavbarMobile ?
        'transition-all duration-300 fixed top-0 left-0 z-50 p-4 w-[60%] h-[100vh] bg-white shadow-md border-r border-orange' :
        'transition-all duration-300 fixed top-0 left-[-200%] z-50 p-4 w-[60%] h-[100vh] bg-white shadow-md border-r border-orange'}
        ref={sectionRef}>
        <LogoCarRental />
        <div className='w-full absolute top-[40%] p-4 translate-y-[-40%]'>
          <ul className='flex flex-col gap-5'>
            <li className='rounded-md font-semibold text-orange transition-all duration-300 hover:bg-neutral-100 hover:p-2'>
              <Link href="/">Home</Link>
            </li>
            <li className='rounded-md font-semibold text-orange transition-all duration-300 hover:bg-neutral-100 hover:p-2'>
              <Link href="#about">About</Link>
            </li>
            <li className='rounded-md font-semibold text-orange transition-all duration-300 hover:bg-neutral-100 hover:p-2'>
              <Link href="#carModel">Car</Link>
            </li>
            <li className='rounded-md font-semibold text-orange transition-all duration-300 hover:bg-neutral-100 hover:p-2'>
              <Link href="#testimonial">Tertimonial</Link>
            </li>
            <li className='rounded-md font-semibold text-orange transition-all duration-300 hover:bg-neutral-100 hover:p-2'>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Icons />
      </section>

    </nav>
  )
}