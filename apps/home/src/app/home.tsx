import { Featured, Offer, Slider } from '@mf-store-apps/ui';
import React from 'react';

export function home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}

export default home;
