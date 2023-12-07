'use client'

import car from '/public/assets/car.png'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import { useState } from 'react';

export default function Faq() {
  const [showFaq, setShowFaq] = useState('');

  const toggleFAQ = (id) => {
    setShowFaq((prevId) => (prevId === id ? '' : id));
  };

  return (
    <section className="relative overflow-hidden w-full p-6 py-16 md:px-24">
      <div className="md:w-[70%] mx-auto text-center">
        <p className="text-black font-bold text-xl">FAQ</p>
        <p className="text-black font-bold text-4xl">Frequently Asked Questions</p>
        <p className="text-neutral-400 text-base">Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
      </div>

      <div className="md:w-[75%] mx-auto shadow-md bg-white mt-10">
        <div className='border-b border-neutral-100/90'>
          <div
            className={showFaq === 'q1' ? "p-6 px-8 flex gap-3 justify-between items-center bg-orange text-white shadow-md cursor-pointer transition-colors" : "p-6 px-8 flex gap-3 justify-between items-center bg-white text-black shadow-md cursor-pointer transition-colors"}
            onClick={() => toggleFAQ('q1')}>
            <p className="font-semibold text-base md:text-lg">1. What is special about comparing rental car deals?</p>
            {showFaq === 'q1' ? <CaretUp size={28} color="#ffffff" weight="bold" /> : <CaretDown size={28} color="#22222" weight="bold" />}
          </div>

          <div
            className={showFaq === 'q1' ? 'p-6 max-h-[500px] block transition-all duration-300' : 'h-0 hidden transition-all duration-300'}>
            <p className="font-medium text-neutral-400">
              Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
            </p>
          </div>
        </div>

        <div className='border-b border-neutral-100/90'>
          <div
            className={showFaq === 'q2' ? "p-6 px-8 flex gap-3 justify-between items-center bg-orange text-white shadow-md cursor-pointer transition-colors" : "p-6 px-8 flex gap-3 justify-between items-center bg-white text-black shadow-md cursor-pointer transition-colors"}
            onClick={() => toggleFAQ('q2')}>
            <p className="font-semibold text-base md:text-lg">2. How do I find the car rental deals?</p>
            {showFaq === 'q2' ? <CaretUp size={28} color="#ffffff" weight="bold" /> : <CaretDown size={28} color="#22222" weight="bold" />}
          </div>

          <div
            className={showFaq === 'q2' ? 'p-6 max-h-[500px] block transition-all duration-300' : 'h-0 hidden transition-all duration-300'}>
            <p className="font-medium text-neutral-400">
              You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
            </p>
          </div>
        </div>

        <div>
          <div
            className={showFaq === 'q3' ? "p-6 px-8 flex gap-3 justify-between items-center bg-orange text-white shadow-md cursor-pointer transition-colors" : "p-6 px-8 flex gap-3 justify-between items-center bg-white text-black shadow-md cursor-pointer transition-colors"}
            onClick={() => toggleFAQ('q3')}>
            <p className="font-semibold text-base md:text-lg">3. How do I find such low rental car prices?</p>
            {showFaq === 'q3' ? <CaretUp size={28} color="#ffffff" weight="bold" /> : <CaretDown size={28} color="#22222" weight="bold" />}
          </div>

          <div
            className={showFaq === 'q3' ? 'p-6 max-h-[500px] block transition-all duration-300' : 'h-0 hidden transition-all duration-300'}>
            <p className="font-medium text-neutral-400">
              Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
            </p>
          </div>
        </div>
      </div>

      <div className='-z-10 hidden md:block absolute left-0 top-[25%]'>
        <Image src={car} alt='car-bg' width={450} height={450} />
      </div>
    </section>
  );
}