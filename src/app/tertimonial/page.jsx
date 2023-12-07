import Image from 'next/image'
import photo1 from '/public/assets/tertimonial-img/messi.webp'
import photo2 from '/public/assets/tertimonial-img/ronaldo.jpg'
import { Quotes } from '@phosphor-icons/react/dist/ssr'

export default function Testimonial() {
  return (
    <section className="bg-neutral-100 w-full max-x-[1240px] py-16 px-10 md:px-24">
      <div className="text-center md:w-[60%] mx-auto">
        <p className="text-xl font-semibold">Reviewed by People</p>
        <p className="text-black font-bold text-4xl my-2">Client's Testimonials</p>
        <p className="text-neutral-600">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10 mt-10">
        <div className="bg-white p-8 rounded-md shadow-md">
          <p className='text-black font-medium'>"Exceptional service! Easy booking, a great selection of cars, and seamless customer support. The vehicle was clean and reliable, making our trip a breeze. Highly recommend this car rental for a hassle-free experience!"</p>
          <div className="flex justify-between items-center mt-3">
            <div className='flex items-center gap-3'>
              <Image src={photo1} alt="customer-1" width={300} height={300}
                className='w-[60px] h-[60px] object-cover object-center rounded-full' />
              <div>
                <p className="font-medium text-lg">Messi</p>
                <span className="block text-sm text-gray-700">CEO, FC Barcelona</span>
              </div>
            </div>
            <Quotes size={60} color="#f47920" weight="bold" />
          </div>
        </div>
        <div className="bg-white p-8 rounded-md shadow-md">
          <p className='text-black font-medium'>"Fantastic car rental experience! Easy booking, friendly service, and a well-maintained vehicle made our trip hassle-free. Highly recommend for a smooth and enjoyable journey!"</p>
          <div className="flex justify-between items-center mt-3">
            <div className='flex items-center gap-3'>
              <Image src={photo2} alt="customer-1" width={300} height={300}
                className='w-[60px] h-[60px] object-cover object-center rounded-full' />
              <div>
                <p className="font-medium text-lg">Ronaldo</p>
                <span className="block text-sm text-gray-700">Player, Al-Nasrr</span>
              </div>
            </div>
            <Quotes size={60} color="#f47920" weight="bold" />
          </div>
        </div>
      </div>
    </section>
  )
}