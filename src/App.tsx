import React from 'react';
import Header from './components/Header/Header';
import CallToAction from './components/CallToAction/CallToAction';
import Features from './components/Features/Features';
import Smartphones from './components/Smartphones/Smartphones';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CallToAction />
      <Features />
      <Smartphones />
      <Testimonials />
      <Pricing />
    </div>
  );
}

export default App;
