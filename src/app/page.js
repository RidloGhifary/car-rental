import About from "./about/page";
import BookingSection from "./bookingSec/page";
import CarModel from "./carModel/page";
import ChooseUs from "./chooseUs/page";
import Faq from "./faq/page";
import Header from "./header/page";
import Navbar from "./navbar/page";
import Testimonial from "./tertimonial/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <BookingSection />
      <About />
      <CarModel />
      <ChooseUs />
      <Testimonial />
      <Faq />
    </>
  )
}