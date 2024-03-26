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
    <section className="flex flex-col w-screen gap-4 items-center cursor-pointer justify-center p-10 hover:bg-fuchsia-50">
      <figure className="flex flex-col gap-8 items-center justify-around">
        <div className="relative flex-1 w-full transition-all hover:rotate-[60deg]">
          <img src={item.image} alt={item.title} className="object-contain" />
        </div>

        <figcaption className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold uppercase">{item.title}</h1>
          <p className="p-4 text-center">{item.description}</p>
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
