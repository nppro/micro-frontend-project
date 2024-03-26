import React from 'react';
import SingleItemCard, { ItemType } from './SingleItemCard';
import AssetsImage from '../assets';

const items: ItemType[] = [
  {
    id: 1,
    price: 24.9,
    title: 'sicilian',
    description:
      'There are countless variations of pizza worldwide, ranging from classic Margherita (tomato sauce, mozzarella, basil) to more elaborate creations like Hawaiian (ham and pineapple), Pepperoni (pepperoni slices), Vegetarian (assorted vegetables), and many more.',
    image: AssetsImage.pizza1,
  },
  {
    id: 2,
    price: 24.9,
    title: 'sicilian',
    description:
      'There are countless variations of pizza worldwide, ranging from classic Margherita (tomato sauce, mozzarella, basil) to more elaborate creations like Hawaiian (ham and pineapple), Pepperoni (pepperoni slices), Vegetarian (assorted vegetables), and many more.',
    image: AssetsImage.pizza1,
  },
  {
    id: 3,
    price: 24.9,
    title: 'sicilian',
    description:
      'There are countless variations of pizza worldwide, ranging from classic Margherita (tomato sauce, mozzarella, basil) to more elaborate creations like Hawaiian (ham and pineapple), Pepperoni (pepperoni slices), Vegetarian (assorted vegetables), and many more.',
    image: AssetsImage.pizza1,
  },
];

export function Featured() {
  return (
    <section className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper item */}
      <div className="w-max flex">
        {items.map((item) => (
          <SingleItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Featured;
