import { PhoneCall, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'

export default function Footer() {
  return (
    <footer className="w-full p-6 py-16 md:px-16" id="contact">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-16">
        <article className='md:col-span-2'>
          <h1 className='text-4xl font-semibold text-black'><b>Car</b> Rental</h1>
          <p className='text-neutral-400 font-normal my-3'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
          <div className='flex items-center gap-4 mt-6 font-medium text-black'>
            <PhoneCall size={28} color="#222222" />
            <p>(123)-123-456</p>
          </div>
          <div className='flex items-center gap-4 font-medium text-black'>
            <EnvelopeSimple size={28} color="#222222" />
            <p>carRental@gmail.com</p>
          </div>
        </article>

        <article className='text-center sm:text-left'>
          <h1 className='font-bold text-black text-3xl'>Company</h1>
          <p className='font-normal text-neutral-700 mt-3 hover:underline cursor-pointer'>Jakarta</p>
          <p className='font-normal text-neutral-700 mt-3 hover:underline cursor-pointer'>Malaysia</p>
          <p className='font-normal text-neutral-700 mt-3 hover:underline cursor-pointer'>Singapore</p>
          <p className='font-normal text-neutral-700 mt-3 hover:underline cursor-pointer'>Australia</p>
          <p className='font-normal text-neutral-700 mt-3 hover:underline cursor-pointer'>New York</p>
        </article>

        <article className='text-center sm:text-left'>
          <h1 className='font-bold text-black text-3xl'>Working Hours</h1>
          <p className='font-normal text-neutral-700 mt-3 hover:underline cursor-pointer'>Mon - Fri: 9:00AM - 9:00PM</p>
          <p className='font-normal text-neutral-700 mt-3 hover:underline cursor-pointer'>Sat: 9:00AM - 19:00PM</p>
          <p className='font-normal text-neutral-700 mt-3 hover:underline cursor-pointer'>Sun: Closed</p>
        </article>

        <div className='md:col-span-2'>
          <article className='text-center sm:text-left'>
            <h1 className='font-bold text-black text-3xl'>Subscription</h1>
            <p className='font-normal text-neutral-700 my-3 hover:underline cursor-pointer'>Subscribe your Email address for latest news & updates.</p>
          </article>
          <form>
            <input type="email" name="email" id="email" placeholder='Enter Email Address'
              className='w-full bg-neutral-200 p-4 text-neutral-600 font-normal focus:outline-none'
            />
            <input type="submit" value="Submit"
              className='w-full p-4 mt-3 bg-orange shadow-2xl text-white font-semibold'
            />
          </form>
        </div>
      </div>
    </footer>
  )
}