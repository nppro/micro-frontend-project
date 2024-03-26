import React, { useEffect, useState } from 'react';
import AssetsImage from '../assets';

const data = [
  {
    id: 1,
    title: 'always fresh & always crispy & always hot',
    imgage: AssetsImage.slider1,
  },
  {
    id: 2,
    title: 'We deliver your order wherever you are in NY',
    imgage: AssetsImage.slider2,
  },
  {
    id: 3,
    title: 'The best pizza to share with your family',
    imgage: AssetsImage.slider3,
  },
];

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <section className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="flex flex-1 items-center justify-center flex-col gap-8 text-red-500 font-bold">
        {/* Text container */}
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Oder Now</button>
      </div>

      <div className="flex-1 relative">
        <img
          src={data[currentSlide].imgage}
          alt={`Slider ${currentSlide}`}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Slider;
