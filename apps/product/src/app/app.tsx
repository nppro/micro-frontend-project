// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { mockData } from '@mf-store-apps/models';
import Price from './Price';

export function App() {
  const singleProduct = mockData[2];

  return (
    <article className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-10rem)] flex flex-col justify-around text-red-500 md:flex-row md:justify-between md:items-center">
      {/* Image Container */}
      <figure className="relative w-full h-1/2 md:h-[70%] mb-4">
        <img
          src={singleProduct.img}
          alt=""
          className="object-contain w-full h-full"
        />
      </figure>
      <section className="h-1/2 flex flex-col md:h-[70%] gap-4 md:gap-6 md:justify-center ">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </section>
    </article>
  );
}

export default App;
