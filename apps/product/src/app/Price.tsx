import { CartItem, useStore } from '@mf-store-apps/store';
import { Slider } from '@mf-store-apps/ui';
import React, { useEffect, useState } from 'react';

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
  addToCart: (total: number, quantity: number, selected: number) => void;
};

function Price({ price, id, options, addToCart }: Props) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected]);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* Options container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            key={option.title}
            onClick={() => {
              //   setTotal(price + option.additionalPrice);
              setSelected(index);
            }}
            style={{
              background: selected === index ? 'rgb(248 113 113)' : 'white',
              color: selected === index ? 'white' : 'red',
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity and  add button container*/}
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              disabled={quantity <= 1}
              className="disabled:text-red-200"
            >
              {'<'}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              disabled={quantity >= 9}
              className="disabled:text-red-200"
            >
              {'>'}
            </button>
          </div>
        </div>
        <button
          className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-400 text-center"
          onClick={() => addToCart(total, quantity, selected)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default Price;
