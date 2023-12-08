'use client'

import { CaretUp } from '@phosphor-icons/react/dist/ssr';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = document.documentElement.scrollTop;
      const threshold = document.documentElement.clientWidth < 500 ? 300 : 500;
      setDisplay(currentScrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className={display ? 'fixed bottom-10 right-10 w-[70px] h-[70px] rounded-full bg-orange shadow-xl flex justify-center items-center p-2 cursor-pointer hover:shadow-2xl' : 'hidden'}
      onClick={scrollToTop}
    >
      <CaretUp size={35} color="#ffffff" weight="bold" />
    </section>
  );
}
