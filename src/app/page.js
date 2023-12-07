import About from "./about/page";
import BookingSection from "./bookingSec/page";
import CarModel from "./carModel/page";
import Header from "./header/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <BookingSection />
      <About />
      <CarModel />
    </>
  )
}