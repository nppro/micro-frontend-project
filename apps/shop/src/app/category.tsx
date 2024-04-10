import { Product } from '@mf-store-apps/models';
import { AssetsImage } from '@mf-store-apps/ui';

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

      <div className="flex text-red-500 flex-wrap">
        {pizzas.map((item) => (
          <a
            href={`/product/${item.id}`}
            key={item.id}
            className="w-full h-[50vh] md:h-[30vh] p-4 border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 group flex flex-col justify-between even:bg-fuchsia-50"
          >
            <div className="relative h-[80%]">
              <img
                src={item.img}
                alt={`Pizza ${item.id}`}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex items-center justify-between font-bold min-h-[4rem]">
              <h1 className="text-2xl uppercase px-2">{item.title}</h1>
              <h2 className="text-xl group-hover:hidden">${item.price}</h2>
              <button
                className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(item);
                }}
              >
                Add To Cart
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
