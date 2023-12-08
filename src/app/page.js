import About from "./about/page";
import BookingSection from "./bookingSec/page";
import CarModel from "./carModel/page";
import ChooseUs from "./chooseUs/page";
import Download from "./download/page";
import Faq from "./faq/page";
import Header from "./header/page";
import Testimonial from "./tertimonial/page";

export default function Home() {
  return (
    <>
      <Header />
      <BookingSection />
      <About />
      <CarModel />
      <ChooseUs />
      <Testimonial />
      <Faq />
      <Download />
    </>
  )
}