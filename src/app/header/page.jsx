import Image from 'next/image'
import cityHeaderImg from '/public/assets/header-bg.png'
import carHeaderImg from '/public/assets/header-bg.webp'
import Button from '../component/button'

export default function Header() {
  return (
    <header className='w-full h-[80vh] relative grid md:grid-cols-2 p-5 md:px-16 py-12 md:py-14'>
      <div className='w-full h-full flex flex-col justify-center items-center md:items-start'>
        <h1 className='font-bold text-5xl text-orange'>Car Rental Here</h1>
        <p className='font-medium text-neutral-500 text-base text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet nesciunt voluptas veritatis incidunt, id eos iure. Nemo odit, ratione explicabo cupiditate ea repellat, aperiam rerum magni atque provident excepturi.</p>
        <div className='flex gap-2 mt-3'>
          <button className='font-semibold bg-white py-2 px-5 text-black border border-orange transition hover:bg-orange hover:text-white'>Log in</button>
          <Button name="Register" />
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