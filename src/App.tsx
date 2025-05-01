import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <footer className="bg-green-900 text-white py-6 text-center">
        <p className="text-sm">© 2025 GreenHaven Indoor Plants. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;