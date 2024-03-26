import React from 'react';

export type ItemType = {
  title: string;
  image: string;
  description: string;
  id: number;
  price: number;
};

export function SingleItemCard({ item }: { item: ItemType }) {
  return (
    <section className="flex flex-col w-screen gap-4 items-center cursor-pointer justify-center p-10 hover:bg-fuchsia-50 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
      <figure className="flex flex-col gap-8 items-center justify-around">
        <div className="relative flex-1 w-full transition-all hover:rotate-[60deg] duration-150 p-10 md:p-[4rem]">
          <img src={item.image} alt={item.title} className="object-contain" />
        </div>

        <figcaption className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
            {item.title}
          </h1>
          <p className="p-4 2xl:p-8 text-center">{item.description}</p>
        </figcaption>
      </figure>
      <p className="font-bold">${item.price}</p>
      <button className="bg-red-500 text-white p-2 rounded-md">
        Add to Cart
      </button>
    </section>
  );
}

export default SingleItemCard;
