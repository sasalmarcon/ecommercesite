import React from 'react'
import Appbar from './components/Appbar';
import Navbar from "./components/Navbar";
import Product from './components/Product';


function App() {
  return (
    <div>
      <Navbar/>
      <Appbar/>
      <Product />
    </div>
  );
}

export default App;
