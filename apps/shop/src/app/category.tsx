import { Product } from '@mf-store-apps/models';
import { AssetsImage } from '@mf-store-apps/ui';
import React from 'react';
import { Link } from 'react-router-dom';

export type CategoryProps = {
  title: string;
  id: number;
};

export const pizzas: Product[] = [
  {
    id: 1,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: AssetsImage.pizza1,
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'Mediterranean Delight',
    desc: 'Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.',
    img: AssetsImage.pizza2,
    price: 32.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'Bella Napoli',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
    img: AssetsImage.pizza3,
    price: 26.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'Pesto Primavera',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
    img: AssetsImage.pizza4,
    price: 28.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: 'Veggie Supreme',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
    img: AssetsImage.pizza5,
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: 'Four Cheese Fantasy',
    desc: 'Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.',
    img: AssetsImage.pizza6,
    price: 22.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
];

export function CategoryPage() {
  return (
    <section>
      {/* <h1>{title}</h1> */}

      <div className="flex text-red-500">
        {pizzas.map((item) => (
          <Link to={`/pizzas/${item.id}`} key={item.id}>
            <div className="w-1/3">
              <img
                src={item.img}
                alt={`Pizza ${item.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
