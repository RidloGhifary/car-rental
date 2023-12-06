import Image from "next/image";
import Logo from '/public/assets/logo.png'

export default function LogoCarRental() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Image src={Logo} alt="car-rental-logo" width={200} height={200}
        className='w-[65px] h-[65px]'
      />
      <p className="text-orange text-2xl font-semibold leading-4">Car
        <span className='block font-normal text-xl'>Rental</span></p>
    </div>
  )
}