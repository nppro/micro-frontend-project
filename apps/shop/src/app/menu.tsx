import { AssetsImage } from '@mf-store-apps/ui';
import React from 'react';
import { Link } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    title: 'Pasta',
    slug: 'pasta',
    img: AssetsImage.menu1,
    desc: ' Pasta comes in a wide variety of shapes, sizes, and textures, ranging from long strands like spaghetti and linguine to short shapes like penne, fusilli, and farfalle.',
    color: 'white',
  },
  {
    id: 2,
    title: 'Burger',
    slug: 'burger',
    img: AssetsImage.menu2,
    desc: 'The hamburger, commonly referred to as a burger, is believed to have originated in the United States in the late 19th or early 20th century. It has since become one of the most popular fast food items globally.',
    color: 'black',
  },
  {
    id: 3,
    title: 'Pizza',
    slug: 'pizza',
    img: AssetsImage.menu3,
    desc: 'Pizza originated in Naples, Italy, and has since become one of the most popular and iconic foods worldwide.',
    color: 'white',
  },
];

function MenuPage() {
  return (
    <main>
      <section className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center justify-center">
        {mockData.map((item) => (
          <Link
            to={`/shop/${item.slug}`}
            // to={`/shop/menu`}
            key={item.id}
            className="w-full h-1/3 bg-cover p-8 md:h-1/2 md:bg-center md:rounded-md md:shadow-sm"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div
              className={`text-${item.color} w-1/2 2xl:flex 2xl:flex-col 2xl:h-full 2xl:items-start`}
            >
              <h1 className="uppercase font-bold text-3xl">{item.title}</h1>
              <p className="text-sm my-8 2xl:flex-1">{item.desc}</p>
              <button
                className={`hidden 2xl:block 2xl:self-start bg-${item.color} ${
                  item.color === 'white' ? 'text-red-500' : 'text-white'
                } py-2 px-4 rounded-md`}
              >
                Explore
              </button>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default MenuPage;
