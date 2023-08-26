import './App.css';
import router from "./router/router"

import { RouterProvider } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './hooks/Context';


function App() {


  return (
    <CartProvider>
      <div className="App">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </CartProvider>

  );
}
export default App;
