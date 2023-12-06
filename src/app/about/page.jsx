import TimeIcon from '/public/assets/icons/time.png'
import RatingIcon from '/public/assets/icons/rating.png'
import PaylaterIcon from '/public/assets/icons/paylater.png'
import Image from 'next/image'

export default function About() {
  return (
    <section className="w-full max-w-[1240px] p-6 py-16 md:px-24">
      <div className="text-center md:max-w-[50%] mx-auto">
        <h1 className="text-orange font-bold text-4xl">Plan your trip now</h1>
        <p className="text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis optio nulla odit provident sit, tempora ratione non tenetur ducimus.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className='flex flex-col justify-center items-center text-center'>
          <Image src={TimeIcon} alt="time icon" width={100} height={100} />
          <h1 className='font-bold text-orange text-2xl'>Flexible time</h1>
          <p className='text-neutral-400 w-[70%] md:w-full'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, vero.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
          <Image src={RatingIcon} alt="rating icon" width={100} height={100} />
          <h1 className='font-bold text-orange text-2xl'>Flexible time</h1>
          <p className='text-neutral-400 w-[70%] md:w-full'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, vero.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
          <Image src={PaylaterIcon} alt="paylater icon" width={100} height={100} />
          <h1 className='font-bold text-orange text-2xl'>Flexible time</h1>
          <p className='text-neutral-400 w-[70%] md:w-full'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, vero.</p>
        </div>
      </div>
    </section>
  )
}