import React, { useState } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import PlantCard from '../components/PlantCard';

const ProductsPage: React.FC = () => {
  const plants = useAppSelector(state => state.plants.plants);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(plants.map(plant => plant.category)));
  
  // Filter plants by selected category
  const filteredPlants = selectedCategory 
    ? plants.filter(plant => plant.category === selectedCategory)
    : plants;
  
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">Our Plants</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover our collection of premium indoor plants for your home or office.
        </p>
        
        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            All Plants
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Plants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;