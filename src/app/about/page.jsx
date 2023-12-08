import TimeIcon from '/public/assets/icons/time.png'
import RatingIcon from '/public/assets/icons/rating.png'
import PaylaterIcon from '/public/assets/icons/paylater.png'
import Image from 'next/image'

export default function About() {
  return (
    <section className="w-full max-w-[1240px] p-6 py-24 md:px-24" id='about'>
      <div className="text-center md:max-w-[50%] mx-auto">
        <span className='font-bold text-black text-lg'>Plan your trip now</span>
        <h1 className="text-orange font-bold text-4xl">Quick & easy car rental</h1>
        <p className="text-neutral-400 mt-3">Experience quick and easy car rentals with us! Seamlessly book your ride for a hassle-free journey. Your next adventure is just a click away.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-10">
        <div className='flex flex-col justify-center items-center text-center'>
          <Image src={TimeIcon} alt="time icon" width={120} height={120} />
          <h1 className='font-bold text-orange text-2xl my-3'>Flexible time</h1>
          <p className='text-neutral-400 w-[70%] md:w-full'>Enjoy flexibility in your schedule! With our services, choose the time that suits you best. Your convenience, your way.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
          <Image src={RatingIcon} alt="rating icon" width={100} height={100} />
          <h1 className='font-bold text-orange text-2xl my-3'>Real customer rating</h1>
          <p className='text-neutral-400 w-[70%] md:w-full'>Explore real customer ratings that speak volumes. Trust the experiences of our satisfied customers – your journey, backed by authenticity.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
          <Image src={PaylaterIcon} alt="paylater icon" width={100} height={100} />
          <h1 className='font-bold text-orange text-2xl my-3'>Paylater</h1>
          <p className='text-neutral-400 w-[70%] md:w-full'>"Experience the convenience of 'Pay Later.' Secure your booking now and pay at your convenience, making travel arrangements stress-free and flexible."</p>
        </div>
      </div>
    </section>
  )
}