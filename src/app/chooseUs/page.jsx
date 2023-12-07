import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import icon1 from '/public/assets/icons/car.png'
import icon2 from '/public/assets/icons/money.png'
import icon3 from '/public/assets/icons/money-and-hand.png'
import Link from "next/link";
import Image from "next/image";

export default function ChooseUs() {
  return (
    <div className="w-full my-16">
      <div className="p-5 py-10 text-center bg-black text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Save big with our cheap car rental!</h1>
        <p className="text-orange font-medium text-sm md:text-base mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repellendus!</p>
      </div>

      <div className="my-28 grid md:grid-cols-2 gap-10 p-4 md:px-14">
        <div>
          <p className="text-black font-semibold text-xl">Why choose us</p>
          <p className="text-black font-bold text-5xl my-2">Best valued deals you will ever find</p>
          <p className="text-neutral-400 font-medium my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui, eligendi aut dolore ipsam dolorum expedita quis culpa laborum architecto praesentium quia obcaecati magnam distinctio odio maxime consequuntur possimus quam, sint itaque error dolor. Distinctio ipsum sunt rem eligendi fugiat nostrum corrupti beatae! Quam officia nemo expedita maiores unde molestiae.</p>
          <Link href='/' className="w-[170px] text-center flex items-center gap-3 rounded-md bg-orange text-white font-semibold px-4 py-2 hover:shadow-md hover:shadow-orange">
            More Detail <ArrowRight size={28} color="#ffffff" weight="bold" />
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-3 items-center">
            <Image src={icon1} alt="icon1" width={150} height={150} />
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl font-bold">Cross Country Drive</p>
              <p className="text-neutral-400 text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur dicta vitae odio, quae modi?</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={icon2} alt="icon1" width={150} height={150} />
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl font-bold">Cross Country Drive</p>
              <p className="text-neutral-400 text-sm font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum similique ratione nisi modi nam nemo!</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={icon3} alt="icon1" width={150} height={150} />
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl font-bold">No Hidden Charges</p>
              <p className="text-neutral-400 text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iusto voluptatibus at maxime, voluptate enim?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}