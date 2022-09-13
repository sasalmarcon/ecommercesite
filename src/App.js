import React from 'react'
import Appbar from './components/Appbar';
import Departments from './components/Departments';
import Navbar from "./components/Navbar";
import Product from './components/Product';


function App() {
  return (
    <div>
      <Navbar/>
      <Appbar/>
      <Departments/>
      <Product />
      

    </div>
  );
}

export default App;
