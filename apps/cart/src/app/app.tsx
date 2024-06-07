// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { mockData } from '@mf-store-apps/models';
import { useStore } from '@mf-store-apps/store';

export function App() {
  const { cart } = useStore();

  return (
    <main className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* production container */}
      <section className="h-1/2 p-4 flex flex-col lg:h-full lg:justify-center lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* single item */}
        <div className="flex items-center justify-between gap-8">
          <div className="relative p-2 basis-[30%]">
            <img src={mockData[0].img} alt="" className="object-contain" />
          </div>

          <div className="basic-1/2">
            <h1 className="text-xl uppercase font-bold">{mockData[0].title}</h1>
            <p>{mockData[0].options?.at(0)?.title}</p>
          </div>
          <span className="font-bold">${mockData[0].price}</span>
          <button className="cursor-pointer">X</button>
        </div>
      </section>

      {/* payment container */}
      <section className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-12 xl:px-20 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal ({cart.length} items)</span>
          <span>$81</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$81.10</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$81.10</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span className="uppercase">Total(incl.vat)</span>
          <span>$81.10</span>
        </div>
        <button className="uppercase self-end rounded-md w-1/2 bg-red-500 text-white p-3 ring-1 ring-red-400 text-center">
          CHECKOUT
        </button>
      </section>
    </main>
  );
}

export default App;
