'use client'

import CarRender from './carRender'
import { CAR_DATA } from './CAR_DATA'
import { useState } from 'react'

export default function CarModel() {
  const [active, setActive] = useState("firstCar")

  const buttonActive = () => {
    return ("w-full border-b border-orange bg-orange text-white p-3 font-medium transition duration-300 hover:bg-orange hover:text-white")
  }

  const buttonDeactive = () => {
    return (
      "w-full border-b border-orange p-3 font-medium transition duration-300 hover:bg-orange hover:text-white"
    )
  }

  return (
    <section className="w-full max-w-[1240px] p-6 py-16 md:px-24">
      <div className="text-center md:max-w-[50%] mx-auto">
        <h1 className="text-orange/75 font-semibold text-xl">Vehicle model</h1>
        <h2 className="text-4xl text-orange font-bold">Our rental fleet</h2>
        <p className="text-neutral-400 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deserunt culpa dolorem autem explicabo accusantium!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-5 mt-10">
        <div className="w-full flex flex-col justify-center items-center border-t border-l border-r border-orange">
          <button
            className={active === "firstCar" ? buttonActive() : buttonDeactive()}
            onClick={() => {
              setActive("firstCar");
            }}
          >BMW X3</button>
          <button
            className={active === "secondCar" ? buttonActive() : buttonDeactive()}
            onClick={() => {
              setActive("secondCar");
            }}
          >BMW 5 Series</button>
          <button
            className={active === "thirdCar" ? buttonActive() : buttonDeactive()}
            onClick={() => {
              setActive("thirdCar");
            }}
          >BMW 320i</button>
          <button
            className={active === "fourtCar" ? buttonActive() : buttonDeactive()}
            onClick={() => {
              setActive("fourthCar");
            }}
          >Lexus RX-300</button>
          <button
            className={active === "fifthCar" ? buttonActive() : buttonDeactive()}
            onClick={() => {
              setActive("fifthCar");
            }}
          >Voxy</button>
          <button
            className={active === "sixthCar" ? buttonActive() : buttonDeactive()}
            onClick={() => {
              setActive("sixthCar");
            }}
          >Daihatsu Ayla</button>
        </div>

        {active === "firstCar" && <CarRender datas={CAR_DATA} carId={0} />}
        {active === "secondCar" && <CarRender datas={CAR_DATA} carId={1} />}
        {active === "thirdCar" && <CarRender datas={CAR_DATA} carId={2} />}
        {active === "fourthCar" && <CarRender datas={CAR_DATA} carId={3} />}
        {active === "fifthCar" && <CarRender datas={CAR_DATA} carId={4} />}
        {active === "sixthCar" && <CarRender datas={CAR_DATA} carId={5} />}
      </div>
    </section>
  )
}