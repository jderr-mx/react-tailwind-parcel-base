import './styles.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Users from './Users';
import One from './pages/One';
import Two from './pages/Two';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Users />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
      </Routes>
    </BrowserRouter>
  );
}
