import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">Welcome to GreenHaven</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in">
            Bringing nature indoors with premium houseplants for every space.
          </p>
          <Link to="/products" className="btn btn-primary text-lg px-8 py-4 fade-in">
            Get Started
          </Link>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView()}
            className="text-white animate-bounce-slow"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">About GreenHaven</h2>
            <p className="text-lg text-gray-600 mb-6">
              GreenHaven was born from a passion for plants and a desire to make beautiful, high-quality houseplants accessible to everyone. 
              Founded in 2022, we've grown from a small local nursery to becoming a trusted source for indoor plants nationwide.
            </p>
            <p className="text-lg text-gray-600 mb-10">
              Our mission is to help bring the beauty and benefits of nature into your home with carefully selected, 
              sustainably grown plants that thrive in indoor environments. Each plant in our collection is chosen for its beauty, 
              air-purifying qualities, and ability to enhance your living space.
            </p>
            
            <Link to="/products" className="btn btn-primary">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Why Choose GreenHaven</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Expert Plant Care</h3>
              <p className="text-gray-600">
                Every plant comes with detailed care instructions tailored to its specific needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainable Practices</h3>
              <p className="text-gray-600">
                We're committed to environmentally friendly growing practices and plastic-free packaging.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Delivery Guarantee</h3>
              <p className="text-gray-600">
                Plants are carefully packed to ensure they arrive in perfect condition, guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring nature home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our collection of carefully curated indoor plants and transform your space today.
          </p>
          <Link to="/products" className="btn bg-white text-green-800 hover:bg-gray-100 text-lg">
            Shop Plants
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingPage;