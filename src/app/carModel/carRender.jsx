import Image from "next/image";
import TableCarDetail from "../component/tableCarDetail";

export default function CarRender({ datas, carId }) {
  return (
    <>
      {datas[carId].map((data, id) => (
        <div key={id} className="md:col-span-3 grid grid-cols-1 md:grid-cols-3">
          <div className='flex justify-center items-center md:col-span-2'>
            {data.img ?
              <Image src={data.img} alt="carmodel1" width={1200} height={1200}
                className='object-contain object-center'
              /> : <span>Loading...</span>}
          </div>

          <TableCarDetail
            price={data.price}
            seats={data.seats}
            bagage={data.Bagage}
            transmission={data.transmission}
            fuel={data.fuel}
            year={data.year} />
        </div>
      ))}
    </>
  )
}