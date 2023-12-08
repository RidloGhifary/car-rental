import Image from 'next/image'
import cityHeaderImg from '/public/assets/header-bg.png'
import carHeaderImg from '/public/assets/header-bg.webp'
import { CheckCircle, CaretRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-full h-[80vh] relative grid md:grid-cols-2 p-5 md:px-16 py-12 md:py-14'>
      <div className='w-full h-full flex flex-col justify-center items-center md:items-start'>
        <span className='font-bold text-black text-lg'>Plan your trip now</span>
        <h1 className='font-bold my-3 text-5xl text-center md:text-left text-black'>Save big with our <b className='text-orange'>car rental</b></h1>
        <p className='font-medium text-neutral-500 text-base text-center md:text-left'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        <div className='flex gap-2 mt-5'>
          <Link href="#booking-schedule" className='font-bold flex items-center gap-3 bg-orange py-4 px-6 text-white border border-orange transition hover:shadow-lg hover:shadow-orange'>Book
            <CheckCircle size={25} color="#ffffff" weight="bold" />
          </Link>
          <button className='font-bold flex items-center gap-3 bg-black py-4 px-6 text-white border border-black transition hover:shadow-lg hover:shadow-black'>Learn more
            <CaretRight size={25} color="#ffffff" weight="bold" />
          </button>
        </div>
      </div>
      <div className='w-full h-full hidden md:flex justify-center items-center'>
        <Image src={carHeaderImg} alt='carHeaderImg' width={700} height={700}
          className='object-cover object-center'
        />
        <Image src={cityHeaderImg} alt="cityHeaderImg" width={450} height={450} className="absolute top-10 right-10 -z-10" />
      </div>
    </header>
  )
} 