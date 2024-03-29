// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Link, Route, Routes } from 'react-router-dom';
import { AssetsImage, Featured, Offer, Slider } from '@mf-store-apps/ui';
import CategoryPage from './category';
import MenuPage from './menu';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/:slug" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
