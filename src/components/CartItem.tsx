import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/slices/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { plant, quantity } = item;
  
  const handleIncrease = () => {
    dispatch(increaseQuantity(plant.id));
  };
  
  const handleDecrease = () => {
    dispatch(decreaseQuantity(plant.id));
  };
  
  const handleRemove = () => {
    dispatch(removeFromCart(plant.id));
  };
  
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 border-b border-gray-200">
      <div className="w-24 h-24 rounded-lg overflow-hidden mr-0 sm:mr-6 mb-4 sm:mb-0">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium text-gray-800">{plant.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{plant.category}</p>
        <p className="font-medium text-green-700">${plant.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center mt-4 sm:mt-0">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button 
            onClick={handleDecrease}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 py-1 text-center w-10">{quantity}</span>
          <button 
            onClick={handleIncrease}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <button 
          onClick={handleRemove}
          className="ml-4 text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;