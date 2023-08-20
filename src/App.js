import './App.css';
import router from "./router/router"

import { RouterProvider } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState();
  const countUpdate = (newCount) => {
    setCount(newCount);
  }
  return (
    <div className="App">
      <Header count={count} />
      <RouterProvider router={router} setCount={countUpdate} />
      <Footer />
    </div>
  );
}

export default App;
