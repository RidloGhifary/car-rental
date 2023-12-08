import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import icon1 from '/public/assets/icons/car.png'
import icon2 from '/public/assets/icons/money.png'
import icon3 from '/public/assets/icons/money-and-hand.png'
import carBg from '/public/assets/main.png'
import Link from "next/link";
import Image from "next/image";

export default function ChooseUs() {
  return (
    <div className="w-full my-16">
      <div className="p-5 py-10 text-center bg-black text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Save big with our cheap car rental!</h1>
        <p className="text-orange font-medium text-sm md:text-base mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repellendus!</p>
      </div>

      <div className="w-full py-16 max-w-[1240px] mx-auto">
        <Image src={carBg} alt="car-bg" width={1000} height={1000}
          className="object-cover object-center mx-auto" />
      </div>

      <div className="mb-28 max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 p-4 md:px-14">
        <div>
          <p className="text-black font-semibold text-xl">Why choose us</p>
          <p className="text-black font-bold text-5xl my-2">Best valued deals you will ever find</p>
          <p className="text-neutral-400 font-medium my-2">Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
          <Link href='/' className="w-[165px] mt-3 text-center flex items-center gap-3 rounded-md bg-orange text-white font-semibold px-4 py-2 hover:shadow-md hover:shadow-orange">
            More Detail <CaretRight size={28} color="#ffffff" weight="bold" />
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-3 items-center">
            <Image src={icon1} alt="icon1" width={150} height={150} />
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl font-bold">Cross Country Drive</p>
              <p className="text-neutral-400 text-sm font-light">"Embark on the ultimate adventure with a cross-country drive. Discover diverse landscapes, iconic landmarks, and the freedom of the open road. Your journey of a lifetime begins here."</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={icon2} alt="icon1" width={150} height={150} />
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl font-bold">All Inclusive Pricing</p>
              <p className="text-neutral-400 text-sm font-light">"Experience worry-free travel with our all-inclusive pricing. No hidden fees, just straightforward and transparent rates. Enjoy peace of mind as you plan your journey with confidence."</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={icon3} alt="icon1" width={150} height={150} />
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl font-bold">No Hidden Charges</p>
              <p className="text-neutral-400 text-sm font-light">"Transparent and hassle-free – our commitment to you. Enjoy your journey with no hidden charges. What you see is what you get, ensuring a straightforward and reliable experience."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}