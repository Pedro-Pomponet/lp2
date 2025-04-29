import React from 'react';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Features />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default App;
