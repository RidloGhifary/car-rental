import BookingSection from "./bookingSec/page";
import Header from "./header/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <BookingSection />
    </>
  )
}