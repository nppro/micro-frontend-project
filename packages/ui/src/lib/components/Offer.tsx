import React from 'react';
import AssetsImage from '../assets';
import Countdown from './Countdown';

export function Offer() {
  return (
    <article
      className="bg-black bg-none h-screen flex flex-col items-center justify-center md:flex-row md:justify-between md:bg-inherit md:h-[70vh]"
      style={{ backgroundImage: `url(${AssetsImage.offerBg})` }}
    >
      {/* text container */}
      <section className="flex-1 flex flex-col justify-center items-center gap-8 p-6 md:p-8 lg:p-10">
        <h1 className="text-white text-5xl font-bold xl:text-6xl text-center">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white text-center xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>

        <Countdown targetDate={'2024-04-02T00:00:00'} />

        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </section>

      <figure className="flex-1 w-full relative md:h-full flex items-center justify-center">
        <img src={AssetsImage.offerProduct} className="object-contain" />
      </figure>
      {/* image container */}
    </article>
  );
}

export default Offer;
