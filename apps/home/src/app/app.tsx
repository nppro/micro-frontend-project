import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { Navbar, Notification, Footer } from '@mf-store-apps/ui';
import Home from './home';
import { Router } from '../routing/Router';

export function App() {
  return <Router />;
}

export default App;
