import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Main from './components/Main';
import Form from './components/Form';

function App() {
  return (
    <>
      <Hero />

      <section className="ProximaNovaFont flex flex-wrap justify-between items-center text-base w-4/5 m-auto py-10 lg:flex-nowrap">
        <Main />

        <aside className="bg-gray-100 w-full p-10 m-auto lg:w-1/2 lg:ml-10">
          <Form />
        </aside>
      </section>
    </>
  );
}

export default App;
