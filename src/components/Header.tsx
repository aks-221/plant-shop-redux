import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const cartItems = useAppSelector(state => state.cart.items);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Monitor scroll position for header transparency
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl font-serif font-bold transition-colors F CFA{
            isScrolled || location.pathname !== '/' ? 'text-green-800' : 'text-white'
          }`}>
            GreenHaven
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors F CFA{
              isScrolled || location.pathname !== '/' ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-100'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`font-medium transition-colors F CFA{
              isScrolled || location.pathname !== '/' ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-100'
            }`}
          >
            Plants
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingBag 
              size={24} 
              className={`transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-100'
              }`} 
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="relative mr-4">
            <ShoppingBag 
              size={24} 
              className={`transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
              }`} 
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors ${
              isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="font-medium text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Plants
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;