export default function Button({ name }) {
  return (
    <button
      className='font-semibold bg-orange py-2 px-5 text-white border border-orange transition hover:bg-white hover:text-black'
    >{name}</button>
  )
}