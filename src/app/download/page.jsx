import googleApp from '/public/assets/download-sec/googleapp.svg'
import appleApp from '/public/assets/download-sec/appstore.svg'
import bg from '/public/assets/download-sec/bg02.png'
import Image from 'next/image'


export default function Download() {
  return (
    <section className="relative w-full bg-neutral-100 mx-auto p-6 py-16 md:px-24">
      <div className="grid md:grid-cols-2">
        <div>
          <h1 className='font-bold text-4xl md:text-5xl text-black md:leading-[70px]'>Download our app to get most out of it</h1>
          <p className='font-normal text-lg md:text-xl text-neutral-700 my-3'>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
          <div className="flex items-center gap-10">
            <Image src={googleApp} alt="googleApp" width={150} height={250} />
            <Image src={appleApp} alt="googleApp" width={150} height={250} />
          </div>
        </div>
        <div className='absolute right-0 bottom-0 hidden md:block pointer-events-none'>
          <Image src={bg} alt="phone-bg" width={1400} height={1400} className='w-full' />
        </div>
      </div>
    </section>
  )
}