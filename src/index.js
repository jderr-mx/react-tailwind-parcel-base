import { createRoot } from 'react-dom/client';
import React from 'react';
import { makeServer } from '../mirage/server';
import { App } from './App';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
