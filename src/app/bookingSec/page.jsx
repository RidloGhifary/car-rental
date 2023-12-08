'use client'

import { useState } from "react"
import BookingBg from '/public/assets/booking-sec-bg.png'
import Image from "next/image"

export default function BookingSection() {
  const [checkboxDropLocation, setCheckboxDropLocation] = useState(false)

  const handleCheckBoxDropLocation = () => {
    setCheckboxDropLocation(!checkboxDropLocation)
  }

  return (
    <section className="w-full relative max-w-[1200px] mx-auto rounded-md shadow-lg flex flex-col justify-center p-6 md:px-16" id="booking-schedule">

      <div className="absolute top-0 left-0 bottom-0 right-0 w-full">
        <Image src={BookingBg} alt="booking bg" width={200} height={200}
          className="w-full object-cover object-center"
        />
      </div>

      <article className="md:max-w-[50%] grid grid-cols-1">
        <h1 className="text-orange text-4xl font-bold">Booking schedule</h1>
        <p className="leading-5 font-medium text-base text-neutral-400 mt-2">Simplify your travel plans with our easy booking schedule. Secure your ride hassle-free, ensuring a smooth journey ahead.</p>
      </article>

      <form className="my-6 grid grid-cols-2 md:grid-cols-3 justify-end items-end gap-2">
        <div className="flex flex-col">
          <label htmlFor="carType" className="font-medium text-orange">Car Type</label>
          <select name="carType" id="carType" className="w-full h-[50px] p-2 text-orange border border-orange focus:outline-none">
            <option defaultValue>Select your car type</option>
            <option value="bmw5series">BMW 5 Series</option>
            <option value="bmw320i">BMW 320i</option>
            <option value="bmwx3">BMW X3</option>
            <option value="SUV">Lexus RX 300</option>
            <option value="VOXY">TOYOTA VOXY</option>
            <option value="daihatsuayla">Daihatsu Ayla</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="font-medium text-orange">Pick up date</label>
          <input type="date" name="date" id="date" className="w-full h-[50px] p-2 text-orange border focus:outline-none border-orange" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className="font-medium text-orange">Pick up location</label>
          <input type="text" name="location" id="location" placeholder="Pick Location" className="w-full h-[50px] p-2 text-orange border border-orange   focus:outline-none placeholder-orange" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dropdate" className="font-medium text-orange">Drop of date</label>
          <input type="date" name="date" id="date" className="w-full h-[50px] p-2 text-orange border focus:outline-none border-orange" />
        </div>
        <div className={checkboxDropLocation ? "flex flex-col" : "hidden"}>
          <label htmlFor="location" className="font-medium text-orange">Drop of location</label>
          <input type="text" name="location" id="location" placeholder="Drop of Location" className="w-full h-[50px] p-2 text-orange border border-orange   focus:outline-none placeholder-orange" />
        </div>

        <input type="submit" value="Submit" className={checkboxDropLocation ? "w-full col-span-1 h-[50px] p-2 font-medium text-orange border focus:outline-none border-orange hover:bg-orange hover:text-white cursor-pointer" : "w-full col-span-2 h-[50px] p-2 font-medium text-orange border focus:outline-none border-orange hover:bg-orange hover:text-white cursor-pointer"} />

        <div className="flex justify-start items-center pl-1 col-span-2 md:col-span-1">
          <input type="checkbox" name="dropLocation" id="dropLocation" value="Drop at different location" className="scale-150 text-white accent-orange"
            onChange={() => handleCheckBoxDropLocation()}
          />
          <label htmlFor="dropLocation" className="ml-2 font-medium text-orange">Drop at different location</label>
        </div>
        <div className="flex justify-start items-center pl-1">
          <input type="checkbox" name="useDriver" id="useDriver" value="User our driver" className="scale-150 text-white accent-orange"
          />
          <label htmlFor="useDriver" className="ml-2 font-medium text-orange">Use our driver</label>
        </div>
      </form>
    </section>
  )
}