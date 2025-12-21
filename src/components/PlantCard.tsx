import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToCart } from '../redux/slices/cartSlice';
import { Plant } from '../types';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  
  // Check if this plant is already in the cart
  const isInCart = cartItems.some(item => item.plant.id === plant.id);
  
  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };
  
  return (
    <div className="card group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={plant.image} 
          alt={plant.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{plant.name}</h3>
          <span className="text-lg font-medium text-green-700">{plant.price.toFixed(2)} F CFA</span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{plant.category}</p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{plant.description}</p>
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`w-full py-2 rounded-lg font-medium transition-all duration-200 ${
            isInCart 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;