export default function TableCarDetail({ price, seats, bagage, transmission, fuel, year }) {
  return (
    <table className='w-full border-collapse border border-orange'>
      <caption className="caption-top w-full bg-orange text-white text-xl font-semibold p-4">
        ${price} / day
      </caption>
      <tbody>
        <tr>
          <td>Seats</td>
          <td>{seats}</td>
        </tr>
        <tr>
          <td>Transmition</td>
          <td>{transmission}</td>
        </tr>
        <tr>
          <td>Fuel</td>
          <td>{fuel}</td>
        </tr>
        <tr>
          <td>Bagage</td>
          <td>{bagage}</td>
        </tr>
        <tr>
          <td>Year</td>
          <td>{year}</td>
        </tr>
      </tbody>
    </table>
  )
}