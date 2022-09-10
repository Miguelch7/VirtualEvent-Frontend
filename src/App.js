import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Main from './components/Main';

function App() {
  return (
    <>
      <Hero />

      <section className="ProximaNovaFont flex flex-wrap justify-between items-center text-base w-4/5 m-auto py-10 lg:flex-nowrap">
        <Main />
      </section>
    </>
  );
}

export default App;
