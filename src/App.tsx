import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Smartphones from './components/Smartphones/Smartphones';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Smartphones />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default App;
