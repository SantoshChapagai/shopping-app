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
        <div className="content-wrapper">
          <RouterProvider router={router} />
          <div className="FooterSpacer" />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}
export default App;
