import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';
import CartItem from '../components/CartItem';

const CartPage: React.FC = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + (item.plant.price * item.quantity), 0);
  
  if (cartItems.length === 0) {
    return (
      <div className="pt-28 pb-20 min-h-screen">
        <div className="container-custom max-w-4xl">
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any plants to your cart yet.
            </p>
            <Link to="/products" className="btn btn-primary">
              Browse Plants
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Your Cart</h1>
        <p className="text-lg text-gray-600 mb-8">
          You have {totalItems} item{totalItems !== 1 ? 's' : ''} in your cart.
        </p>
        
        {/* Cart Items */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="divide-y divide-gray-200">
            {cartItems.map(item => (
              <CartItem key={item.plant.id} item={item} />
            ))}
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">Calculated at checkout</span>
          </div>
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-800">Total</span>
              <span className="text-lg font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="btn btn-secondary flex-1 order-2 sm:order-1">
              Continue Shopping
            </Link>
            <button className="btn btn-primary flex-1 order-1 sm:order-2">
              Checkout (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;