// eslint-disable-next-line @typescript-eslint/no-unused-vars

import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { AssetsImage, Featured, Offer, Slider } from '@mf-store-apps/ui';
import CategoryPage from './category';
import MenuPage from './menu';
import { useEffect, useRef } from 'react';
import { mount } from '../bootstrap';

const app1Basename = `/shop`;

export function App() {
  return <h1>Welcome</h1>;
}

export default App;
